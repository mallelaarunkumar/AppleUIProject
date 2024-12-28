export interface WatchCase {
  id: string;
  name: string;
  material: 'Aluminum' | 'Titanium';
  color: string;
  price: number;
  image: string;
}

export interface WatchBand {
  id: string;
  name: string;
  type: 'Solo Loop' | 'Braided Solo Loop' | 'Sport Band' | 'Sport Loop';
  color: string;
  price: number;
  image: string;
}

export interface WatchConfiguration {
  case: WatchCase | null;
  size: '41mm' | '45mm';
  band: WatchBand | null;
  totalPrice: number;
}

export interface WatchCollection {
  id: string;
  name: string;
  description: string;
  cases: WatchCase[];
  bands: WatchBand[];
}