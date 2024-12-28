import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategoryScrollProps {
  categories: Category[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function CategoryScroll({ categories, selectedId, onSelect }: CategoryScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const element = selectedRef.current;
      const containerWidth = container.offsetWidth;
      const elementWidth = element.offsetWidth;
      
      container.scrollLeft = element.offsetLeft - containerWidth / 2 + elementWidth / 2;
    }
  }, [selectedId]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group h-screen flex items-center justify-center">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory absolute inset-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex-shrink-0 w-1/3" />
        {categories.map((category) => (
          <button
            key={category.id}
            ref={category.id === selectedId ? selectedRef : null}
            onClick={() => onSelect(category.id)}
            className={cn(
              "flex-shrink-0 w-[600px] h-[600px] mx-4 transition-all duration-500 snap-center",
              "relative rounded-2xl overflow-hidden",
              selectedId === category.id ? "scale-100 shadow-2xl" : "scale-75 opacity-40"
            )}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-8 left-8 right-8 text-white text-center text-3xl font-medium">
              {category.name}
            </p>
          </button>
        ))}
        <div className="flex-shrink-0 w-1/3" />
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
}