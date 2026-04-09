import CanvasBackground from '@/components/ui/CanvasBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Cookies() {
  return (
    <main className="relative min-h-screen">
      <CanvasBackground />
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-8 max-w-4xl">
        <h1 className="text-4xl font-space-grotesk font-bold mb-12 text-white">Política de Cookies</h1>
        
        <div className="prose prose-invert max-w-none text-text-muted space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">¿Qué son las cookies?</h2>
            <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Cookies utilizadas en este sitio</h2>
            <p>Este sitio web utiliza únicamente <strong>cookies técnicas</strong> y de personalización esenciales para el funcionamiento de la página y la carga de fuentes o componentes de seguridad. No se utilizan cookies de seguimiento publicitario ni de terceros con fines comerciales.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Cómo desactivar las cookies</h2>
            <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Internet Explorer/Edge</li>
              <li>Safari</li>
            </ul>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
