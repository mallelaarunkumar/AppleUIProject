import { WatchConfiguration } from '@/types/watch';
import { formatINR } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

interface SavedDesignsProps {
  designs: WatchConfiguration[];
  onSelect: (config: WatchConfiguration) => void;
}

export function SavedDesigns({ designs, onSelect }: SavedDesignsProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Save className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Saved Designs</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          {designs.length === 0 ? (
            <p className="text-center text-gray-500">No saved designs yet</p>
          ) : (
            designs.map((design, index) => (
              <button
                key={index}
                onClick={() => onSelect(design)}
                className="w-full p-4 rounded-lg border hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={design.case?.image}
                    alt={design.case?.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium">
                      {design.size} {design.case?.material} Case
                    </p>
                    <p className="text-sm text-gray-600">
                      with {design.band?.name}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      {formatINR(design.totalPrice)}
                    </p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}