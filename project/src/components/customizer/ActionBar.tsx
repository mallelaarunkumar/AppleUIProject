import { Share2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatINR } from '@/lib/utils';
import { WatchConfiguration } from '@/types/watch';
import { useToast } from '@/hooks/use-toast';
import { ShareDialog } from '@/components/share/ShareDialog';

interface ActionBarProps {
  config: WatchConfiguration;
  collection: string;
  onSave: () => void;
}

export function ActionBar({ config, collection, onSave }: ActionBarProps) {
  const { toast } = useToast();

  const handleSave = () => {
    onSave();
    toast({
      title: "Configuration saved!",
      description: "You can find this in your saved designs"
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border-t border-gray-200 p-6 fixed bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <p className="text-3xl font-semibold">
            {formatINR(config.totalPrice)}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {config.size} {config.case?.material} Case
            {config.band && ` with ${config.band.name}`}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ShareDialog config={config} collection={collection} />
          <Button variant="outline" size="icon" onClick={handleSave}>
            <Save className="h-4 w-4" />
          </Button>
          <Button size="lg" className="px-12">
            Add to Bag
          </Button>
        </div>
      </div>
    </div>
  );
}