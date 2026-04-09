import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Privacidad() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-8 max-w-4xl">
        <h1 className="text-4xl font-space-grotesk font-bold mb-12 text-white">Política de Privacidad</h1>
        
        <div className="prose prose-invert max-w-none text-text-muted space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Responsable del Tratamiento</h2>
            <p>Iván González es el responsable del tratamiento de los datos personales del Usuario y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Finalidad del Tratamiento</h2>
            <p>Sus datos personales se utilizarán exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Responder a las consultas y mensajes enviados a través del formulario de contacto.</li>
              <li>Gestionar la relación profesional en caso de contratación de servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Legitimación</h2>
            <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado al marcar la casilla de aceptación en el formulario de contacto.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Conservación de Datos</h2>
            <p>Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o mientras existan prescripciones legales que dictaminen su custodia.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Derechos</h2>
            <p>Usted tiene derecho a acceso, rectificación, portabilidad y supresión de sus datos, así como a la limitación u oposición a su tratamiento enviando un email a hola@ivangonzalez.cloud.</p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
