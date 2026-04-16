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

    // Configuración del transportador de SMTP para OVH (versión robusta 587)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'ssl0.ovh.net',
      port: 587, // Cambiamos a 587 que suele ser más estable en VPS
      secure: false, // false para STARTTLS (puerto 587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Esto evita errores si el certificado de OVH tiene discrepancias con el hostname
        rejectUnauthorized: false
      }
    });

    // Configuración del correo
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Importante: OVH suele exigir que el 'from' sea el usuario autenticado
      to: 'hola@ivangonzalez.cloud',
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name} (IvanGonzalezCloud)`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #0f9d8c;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
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
