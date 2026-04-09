import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AvisoLegal() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-8 max-w-4xl">
        <h1 className="text-4xl font-space-grotesk font-bold mb-12 text-white">Aviso Legal</h1>
        
        <div className="prose prose-invert max-w-none text-text-muted space-y-6">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Datos Identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Titular:</strong> Iván González</li>
              <li><strong>Email de contacto:</strong> hola@ivangonzalez.cloud</li>
              <li><strong>Sitio Web:</strong> ivangonzalez.cloud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Usuarios</h2>
            <p>
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Uso del Portal</h2>
            <p>
              ivangonzalez.cloud proporciona el acceso a multitud de informaciones, servicios, programas o datos en Internet pertenecientes a Iván González a los que el USUARIO pueda tener acceso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Propiedad Intelectual e Industrial</h2>
            <p>
              Iván González por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
