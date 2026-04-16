import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Configuración del transportador de SMTP para OVH Zimbra (Cluster confirmado)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'zimbra1.mail.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      authMethod: 'LOGIN',
      tls: {
        rejectUnauthorized: false
      }
    });

    const now = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });

    // Configuración del correo
    const mailOptions = {
      from: `"IvanGonzalez.cloud" <${process.env.SMTP_USER}>`,
      to: 'hola@ivangonzalez.cloud',
      replyTo: email,
      subject: `🚀 Nuevo contacto: ${name}`,
      text: `Has recibido un nuevo mensaje de contacto.\n\nNombre: ${name}\nEmail: ${email}\nFecha: ${now}\n\nMensaje:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; background-color: #0a0a0b; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #1a1a1c; }
            .header { background: linear-gradient(135deg, #0a0a0b 0%, #111112 100%); padding: 40px 20px; text-align: center; border-bottom: 1px solid #0f9d8c33; }
            .header h1 { margin: 0; color: #0f9d8c; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; }
            .content { padding: 40px; }
            .field { margin-bottom: 25px; }
            .label { color: #0f9d8c; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: bold; margin-bottom: 8px; }
            .value { font-size: 16px; color: #e2e2e2; line-height: 1.5; }
            .message-box { background-color: #ffffff05; border: 1px solid #ffffff10; border-radius: 12px; padding: 20px; margin-top: 10px; font-style: italic; color: #d1d1d1; }
            .footer { background-color: #050505; padding: 20px; text-align: center; color: #444; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>IvanGonzalez.cloud</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Remitente</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email de respuesta</div>
                <div class="value"><a href="mailto:${email}" style="color: #0f9d8c; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Fecha del mensaje</div>
                <div class="value">${now}</div>
              </div>
              <div class="field">
                <div class="label">Consulta Recibida</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Ivan Gonzalez Cloud - Sistema de Contacto Automatizado
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Envío del correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado correctamente' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email: ' + (error.message || 'Error desconocido') },
      { status: 500 }
    );
  }
}
