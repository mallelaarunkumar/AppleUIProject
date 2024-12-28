import { WatchCase } from '@/types/watch';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface CaseSelectorProps {
  cases: WatchCase[];
  selected: WatchCase | null;
  onSelect: (watchCase: WatchCase) => void;
}

export function CaseSelector({ cases, selected, onSelect }: CaseSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose your case</h3>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flex space-x-4 p-4">
          {cases.map((watchCase) => (
            <button
              key={watchCase.id}
              onClick={() => onSelect(watchCase)}
              className={cn(
                "flex-shrink-0 relative rounded-lg overflow-hidden",
                "w-40 h-40 border-2 transition-all",
                selected?.id === watchCase.id
                  ? "border-blue-500 shadow-lg"
                  : "border-transparent hover:border-gray-200"
              )}
            >
              <img
                src={watchCase.image}
                alt={watchCase.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm">{watchCase.name}</p>
                <p className="text-white/80 text-xs">${watchCase.price}</p>
              </div>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}