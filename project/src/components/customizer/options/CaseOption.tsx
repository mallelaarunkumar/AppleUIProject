import { WatchCase } from '@/types/watch';
import { cn, formatINR } from '@/lib/utils';

interface CaseOptionProps {
  watchCase: WatchCase;
  isSelected: boolean;
  onSelect: () => void;
}

export function CaseOption({ watchCase, isSelected, onSelect }: CaseOptionProps) {
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
        src={watchCase.image}
        alt={watchCase.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-lg font-medium">{watchCase.name}</p>
        <p className="text-white/80 text-sm">From {formatINR(watchCase.price)}</p>
      </div>
    </button>
  );
}