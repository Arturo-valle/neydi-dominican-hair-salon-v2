import { Locale } from "@/lib/types";
import { business } from "@/lib/data";

export default async function AccessibilityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;
  const isEs = locale === "es";

  return (
    <>
      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-warm-white">
            {isEs ? "Accesibilidad" : "Accessibility"}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg">
          {isEs ? (
            <>
              <p>
                En {business.name}, nos comprometemos a hacer que nuestro sitio web sea accesible
                para todas las personas, incluyendo aquellas con discapacidades.
              </p>
              <h2>Nuestro compromiso</h2>
              <p>
                Trabajamos para cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2
                nivel AA. Esto incluye:
              </p>
              <ul>
                <li>Navegación completa por teclado</li>
                <li>Contraste de color adecuado</li>
                <li>Texto alternativo para imágenes</li>
                <li>Etiquetas de formulario accesibles</li>
                <li>Respeto a las preferencias de movimiento reducido</li>
                <li>Estructura de encabezados semántica</li>
              </ul>
              <h2>Limitaciones</h2>
              <p>
                Algunos elementos de terceros (como el sistema de reservas externo) pueden tener
                limitaciones de accesibilidad fuera de nuestro control directo. Trabajamos para
                ofrecer alternativas accesibles cuando sea posible.
              </p>
              <h2>Comentarios</h2>
              <p>
                Si encuentra alguna barrera de accesibilidad en nuestro sitio, por favor contáctenos.
                Valoramos sus comentarios y trabajaremos para resolver cualquier problema.
              </p>
              <p>
                Contacto: <a href={`tel:${business.phone}`}>{business.phoneFormatted}</a>
              </p>
            </>
          ) : (
            <>
              <p>
                At {business.name}, we are committed to making our website accessible
                to all people, including those with disabilities.
              </p>
              <h2>Our Commitment</h2>
              <p>
                We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.2
                level AA. This includes:
              </p>
              <ul>
                <li>Full keyboard navigation</li>
                <li>Adequate color contrast</li>
                <li>Alternative text for images</li>
                <li>Accessible form labels</li>
                <li>Respecting reduced motion preferences</li>
                <li>Semantic heading structure</li>
              </ul>
              <h2>Limitations</h2>
              <p>
                Some third-party elements (such as the external booking system) may have
                accessibility limitations outside our direct control. We work to provide
                accessible alternatives where possible.
              </p>
              <h2>Feedback</h2>
              <p>
                If you encounter any accessibility barriers on our site, please contact us.
                We value your feedback and will work to resolve any issues.
              </p>
              <p>
                Contact: <a href={`tel:${business.phone}`}>{business.phoneFormatted}</a>
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
