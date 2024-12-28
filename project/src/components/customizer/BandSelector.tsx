import { WatchBand } from '@/types/watch';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface BandSelectorProps {
  bands: WatchBand[];
  selected: WatchBand | null;
  onSelect: (band: WatchBand) => void;
}

export function BandSelector({ bands, selected, onSelect }: BandSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose your band</h3>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flex space-x-4 p-4">
          {bands.map((band) => (
            <button
              key={band.id}
              onClick={() => onSelect(band)}
              className={cn(
                "flex-shrink-0 relative rounded-lg overflow-hidden",
                "w-40 h-40 border-2 transition-all",
                selected?.id === band.id
                  ? "border-blue-500 shadow-lg"
                  : "border-transparent hover:border-gray-200"
              )}
            >
              <img
                src={band.image}
                alt={band.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm">{band.name}</p>
                <p className="text-white/80 text-xs">${band.price}</p>
              </div>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}