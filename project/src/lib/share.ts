import { WatchConfiguration } from '@/types/watch';

const SOCIAL_PLATFORMS = {
  twitter: (url: string, text: string) => 
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  facebook: (url: string) => 
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  linkedin: (url: string) => 
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
};

export function generateShareUrl(config: WatchConfiguration, collection: string): string {
  const url = new URL(window.location.href);
  url.searchParams.set('collection', collection);
  url.searchParams.set('case', config.case?.id || '');
  url.searchParams.set('size', config.size);
  url.searchParams.set('band', config.band?.id || '');
  return url.toString();
}

export function generateShareText(config: WatchConfiguration): string {
  return `Check out my custom Apple Watch design: ${config.size} ${config.case?.material} Case with ${config.band?.name}`;
}

export function shareToSocial(platform: keyof typeof SOCIAL_PLATFORMS, url: string, text?: string): void {
  const shareUrl = SOCIAL_PLATFORMS[platform](url, text || '');
  window.open(shareUrl, '_blank', 'width=600,height=400');
}