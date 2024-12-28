import { WatchConfiguration } from '@/types/watch';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Share2, Download, Twitter, Facebook, Linkedin } from 'lucide-react';
import { shareToSocial, generateShareUrl, generateShareText } from '@/lib/share';
import { captureElement, downloadImage } from '@/lib/capture';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ShareDialogProps {
  config: WatchConfiguration;
  collection: string;
}

export function ShareDialog({ config, collection }: ShareDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const shareUrl = generateShareUrl(config, collection);
  const shareText = generateShareText(config);

  const handleCapture = async () => {
    try {
      const dataUrl = await captureElement('watch-preview');
      downloadImage(dataUrl, 'my-apple-watch.png');
      toast({
        title: "Success!",
        description: "Your design has been downloaded"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to capture design",
        variant: "destructive"
      });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "Share URL has been copied to clipboard"
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share your design</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2"
            onClick={handleCopyLink}
          >
            <Share2 className="h-4 w-4" />
            Copy share link
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start gap-2"
            onClick={handleCapture}
          >
            <Download className="h-4 w-4" />
            Download as image
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => shareToSocial('twitter', shareUrl, shareText)}
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => shareToSocial('facebook', shareUrl)}
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => shareToSocial('linkedin', shareUrl)}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}