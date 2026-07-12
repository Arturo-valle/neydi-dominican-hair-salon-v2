import { Locale } from "@/lib/types";
import { business } from "@/lib/data";

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;
  const isEs = locale === "es";

  return (
    <>
      <section className="bg-carbon py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-warm-white">
            {isEs ? "Política de Privacidad" : "Privacy Policy"}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg">
          {isEs ? (
            <>
              <h2>Información que recopilamos</h2>
              <p>
                Cuando usted solicita una cita a través de nuestro sitio web, recopilamos su nombre,
                correo electrónico, número de teléfono y cualquier nota que decida compartir. Esta información
                se utiliza únicamente para programar y confirmar su cita.
              </p>
              <h2>Cómo usamos su información</h2>
              <p>
                Su información personal se usa exclusivamente para:
              </p>
              <ul>
                <li>Confirmar y programar su cita</li>
                <li>Comunicarnos con usted sobre su servicio</li>
                <li>Responder a sus preguntas</li>
              </ul>
              <h2>Protección de datos</h2>
              <p>
                No vendemos, compartimos ni distribuimos su información personal a terceros.
                Sus datos se almacenan de forma segura y se eliminan cuando ya no son necesarios.
              </p>
              <h2>Cookies y análisis</h2>
              <p>
                Este sitio puede utilizar cookies básicas para mejorar su experiencia de navegación.
                No utilizamos cookies de publicidad ni rastreamos su actividad en otros sitios web.
              </p>
              <h2>Fotografías</h2>
              <p>
                Las fotografías mostradas en este sitio se utilizan con el consentimiento de las clientas
                correspondientes. No utilizamos fotos de clientas para entrenamiento de inteligencia artificial
                ni las compartimos con terceros.
              </p>
              <h2>Contacto</h2>
              <p>
                Para preguntas sobre esta política o para solicitar acceso, corrección o eliminación
                de sus datos, contáctenos al{" "}
                <a href={`tel:${business.phone}`}>{business.phoneFormatted}</a>.
              </p>
            </>
          ) : (
            <>
              <h2>Information We Collect</h2>
              <p>
                When you request an appointment through our website, we collect your name,
                email address, phone number, and any notes you choose to share. This information
                is used solely to schedule and confirm your appointment.
              </p>
              <h2>How We Use Your Information</h2>
              <p>
                Your personal information is used exclusively to:
              </p>
              <ul>
                <li>Confirm and schedule your appointment</li>
                <li>Communicate with you about your service</li>
                <li>Respond to your questions</li>
              </ul>
              <h2>Data Protection</h2>
              <p>
                We do not sell, share, or distribute your personal information to third parties.
                Your data is stored securely and deleted when no longer needed.
              </p>
              <h2>Cookies & Analytics</h2>
              <p>
                This site may use basic cookies to improve your browsing experience.
                We do not use advertising cookies or track your activity across other websites.
              </p>
              <h2>Photographs</h2>
              <p>
                Photos displayed on this site are used with the consent of the corresponding clients.
                We do not use client photos for AI training or share them with third parties.
              </p>
              <h2>Contact</h2>
              <p>
                For questions about this policy or to request access, correction, or deletion
                of your data, contact us at{" "}
                <a href={`tel:${business.phone}`}>{business.phoneFormatted}</a>.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
