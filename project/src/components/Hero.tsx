import { Button } from '@/components/ui/button';

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-12">
      <h1 className="text-5xl font-bold tracking-tight mb-4">
        Choose a case.
        <br />
        Pick a band.
        <br />
        Create your own style.
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Customize your Apple Watch with the perfect combination.
      </p>
      <Button size="lg" className="rounded-full px-8" onClick={onStart}>
        Get started
      </Button>
      <div className="mt-12 max-w-xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800"
          alt="Apple Watch"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}