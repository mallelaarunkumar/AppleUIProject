import { cn } from '@/lib/utils';

interface SizeOptionProps {
  size: '41mm' | '45mm';
  isSelected: boolean;
  onSelect: () => void;
}

export function SizeOption({ size, isSelected, onSelect }: SizeOptionProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "relative w-48 h-48 rounded-2xl overflow-hidden",
        "border-2 transition-all duration-300",
        isSelected ? "border-blue-500 scale-105" : "border-transparent"
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400"
        alt={size}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <span className="text-white text-2xl font-medium">{size}</span>
      </div>
    </button>
  );
}