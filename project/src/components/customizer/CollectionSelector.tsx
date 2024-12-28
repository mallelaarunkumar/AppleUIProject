import { collections } from '@/data/collections';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface CollectionSelectorProps {
  currentCollection: string;
  onSelect: (collectionId: string) => void;
}

export function CollectionSelector({ currentCollection, onSelect }: CollectionSelectorProps) {
  const currentName = collections[currentCollection as keyof typeof collections].name;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2">
          {currentName}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(collections).map(([id, collection]) => (
          <DropdownMenuItem
            key={id}
            onClick={() => onSelect(id)}
          >
            {collection.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}