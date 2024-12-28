import { Watch } from 'lucide-react';
import { CollectionSelector } from './customizer/CollectionSelector';
import { SavedDesigns } from './customizer/SavedDesigns';
import { WatchConfiguration } from '@/types/watch';

interface HeaderProps {
  currentCollection: string;
  onCollectionChange: (id: string) => void;
  savedDesigns: WatchConfiguration[];
  onLoadDesign: (config: WatchConfiguration) => void;
}

export function Header({ 
  currentCollection, 
  onCollectionChange,
  savedDesigns,
  onLoadDesign
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Watch className="h-6 w-6" />
            <span className="font-semibold">Watch Studio</span>
          </div>
          <CollectionSelector
            currentCollection={currentCollection}
            onSelect={onCollectionChange}
          />
        </div>
        <SavedDesigns
          designs={savedDesigns}
          onSelect={onLoadDesign}
        />
      </div>
    </header>
  );
}