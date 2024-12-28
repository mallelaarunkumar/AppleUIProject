import { WatchBand } from '@/types/watch';
import { cn, formatINR } from '@/lib/utils';

interface BandOptionProps {
  band: WatchBand;
  isSelected: boolean;
  onSelect: () => void;
}

export function BandOption({ band, isSelected, onSelect }: BandOptionProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "relative flex-shrink-0 w-72 h-72 rounded-2xl overflow-hidden",
        "border-2 transition-all duration-300",
        isSelected ? "border-blue-500 scale-105" : "border-transparent"
      )}
    >
      <img
        src={band.image}
        alt={band.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-lg font-medium">{band.name}</p>
        <p className="text-white/80 text-sm">{formatINR(band.price)}</p>
      </div>
    </button>
  );
}