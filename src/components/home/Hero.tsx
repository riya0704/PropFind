import { PropertySearchForm } from './PropertySearchForm';

export function Hero() {
  return (
    <section className="relative py-16 bg-secondary/30">
      <div className="container relative z-20 w-full max-w-6xl px-4">
        <PropertySearchForm />
      </div>
    </section>
  );
}
