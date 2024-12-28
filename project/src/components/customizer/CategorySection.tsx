import { WatchConfiguration } from '@/types/watch';
import { collections } from '@/data/collections';
import { cn } from '@/lib/utils';
import { useRef, useEffect } from 'react';

interface CategorySectionProps {
  title: string;
  type: 'size' | 'case' | 'band';
  config: WatchConfiguration;
  onUpdate: (updates: Partial<WatchConfiguration>) => void;
}

export function CategorySection({ title, type, config, onUpdate }: CategorySectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  // Center the selected item on mount and when selection changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedRef.current && scrollRef.current) {
        const container = scrollRef.current;
        const element = selectedRef.current;
        const containerWidth = container.offsetWidth;
        const elementWidth = element.offsetWidth;
        
        container.scrollLeft = element.offsetLeft - containerWidth / 2 + elementWidth / 2;
      }
    }, 100); // Small delay to ensure elements are rendered

    return () => clearTimeout(timer);
  }, [config]);

  const renderSizeContent = () => (
    <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      <div className="flex-shrink-0 w-1/4" />
      {['41mm', '45mm'].map((size) => (
        <button
          key={size}
          ref={config.size === size ? selectedRef : null}
          onClick={() => onUpdate({ size: size as '41mm' | '45mm' })}
          className={cn(
            "flex-shrink-0 w-[500px] mx-4 snap-center",
            "group relative aspect-square rounded-3xl overflow-hidden transition-all duration-500",
            config.size === size ? "scale-100" : "scale-75 opacity-40"
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800"
            alt={size}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-2xl font-medium mb-2">{size}</p>
            <ul className="space-y-1 text-sm opacity-80">
              <li>• Perfect for {size === '41mm' ? 'smaller' : 'larger'} wrists</li>
              <li>• {size === '41mm' ? 'Compact' : 'Expansive'} display</li>
              <li>• Optimal weight distribution</li>
            </ul>
          </div>
        </button>
      ))}
      <div className="flex-shrink-0 w-1/4" />
    </div>
  );

  const renderCaseContent = () => (
    <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      <div className="flex-shrink-0 w-1/4" />
      {collections.series10.cases.map((watchCase) => (
        <button
          key={watchCase.id}
          ref={config.case?.id === watchCase.id ? selectedRef : null}
          onClick={() => onUpdate({ case: watchCase })}
          className={cn(
            "flex-shrink-0 w-[500px] mx-4 snap-center",
            "group relative aspect-square rounded-3xl overflow-hidden transition-all duration-500",
            config.case?.id === watchCase.id ? "scale-100" : "scale-75 opacity-40"
          )}
        >
          <img
            src={watchCase.image}
            alt={watchCase.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-2xl font-medium mb-2">{watchCase.name}</p>
            <ul className="space-y-1 text-sm opacity-80">
              <li>• Premium {watchCase.material} construction</li>
              <li>• {watchCase.color} finish</li>
              <li>• Scratch-resistant coating</li>
              <li>• Water resistant to 50m</li>
            </ul>
          </div>
        </button>
      ))}
      <div className="flex-shrink-0 w-1/4" />
    </div>
  );

  const renderBandContent = () => (
    <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      <div className="flex-shrink-0 w-1/4" />
      {collections.series10.bands.map((band) => (
        <button
          key={band.id}
          ref={config.band?.id === band.id ? selectedRef : null}
          onClick={() => onUpdate({ band })}
          className={cn(
            "flex-shrink-0 w-[500px] mx-4 snap-center",
            "group relative aspect-square rounded-3xl overflow-hidden transition-all duration-500",
            config.band?.id === band.id ? "scale-100" : "scale-75 opacity-40"
          )}
        >
          <img
            src={band.image}
            alt={band.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-2xl font-medium mb-2">{band.name}</p>
            <ul className="space-y-1 text-sm opacity-80">
              <li>• {band.type} design</li>
              <li>• {band.color} colorway</li>
              <li>• Comfortable all-day wear</li>
              <li>• Quick-release mechanism</li>
            </ul>
          </div>
        </button>
      ))}
      <div className="flex-shrink-0 w-1/4" />
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case 'size': return renderSizeContent();
      case 'case': return renderCaseContent();
      case 'band': return renderBandContent();
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-24">
      <h2 className="text-4xl font-semibold text-center mb-16">{title}</h2>
      {renderContent()}
    </section>
  );
}