import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-warm-white">
      <div className="text-center px-4">
        <p className="text-gold font-display text-6xl mb-4">404</p>
        <h1 className="font-display text-2xl text-carbon mb-4">
          Page not found
        </h1>
        <p className="text-charcoal/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/en"
          className="inline-flex bg-gold text-carbon font-semibold px-8 py-3 rounded hover:bg-gold-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
