import { WatchConfiguration } from '@/types/watch';
import { cn } from '@/lib/utils';

interface WatchPreviewProps {
  configuration: WatchConfiguration;
}

export function WatchPreview({ configuration }: WatchPreviewProps) {
  const previewImage = configuration.case?.image || 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800';

  return (
    <div id="watch-preview" className="relative aspect-square">
      <div className={cn(
        "w-full h-full rounded-3xl overflow-hidden",
        "transition-all duration-500 transform",
        configuration.case ? "scale-100" : "scale-90 opacity-80"
      )}>
        <img
          src={previewImage}
          alt="Watch Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}