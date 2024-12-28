import { WatchConfiguration } from '@/types/watch';
import { formatINR } from '@/lib/utils';

interface ProductInfoProps {
  configuration: WatchConfiguration;
}

export function ProductInfo({ configuration }: ProductInfoProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold tracking-tight">
          Apple Watch Series 10
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          From {formatINR(configuration.totalPrice)}
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-lg">
          {configuration.size} {configuration.case?.material} Case
          {configuration.band && ` with ${configuration.band.name}`}
        </p>
        
        <p className="text-gray-600">
          The most advanced Apple Watch yet with breakthrough health innovations and an amazing display that's always on.
        </p>
      </div>
    </div>
  );
}