import { useState, useEffect } from 'react';
import { WatchConfiguration } from '@/types/watch';
import { collections } from '@/data/collections';

const STORAGE_KEY = 'watch_saved_designs';

const getInitialConfig = (collectionId: string): WatchConfiguration => {
  const collection = collections[collectionId as keyof typeof collections];
  return {
    case: collection.cases[0],
    size: '45mm',
    band: collection.bands[0],
    totalPrice: collection.cases[0].price + collection.bands[0].price
  };
};

export function useConfiguration() {
  const [currentCollection, setCurrentCollection] = useState('series10');
  const [config, setConfig] = useState<WatchConfiguration>(() => 
    getInitialConfig(currentCollection)
  );
  
  const [savedConfigs, setSavedConfigs] = useState<WatchConfiguration[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedConfigs));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [savedConfigs]);

  const updateConfiguration = (updates: Partial<WatchConfiguration>) => {
    setConfig(prev => {
      const newConfig = { ...prev, ...updates };
      newConfig.totalPrice = (newConfig.case?.price || 0) + (newConfig.band?.price || 0);
      return newConfig;
    });
  };

  const changeCollection = (collectionId: string) => {
    if (collections[collectionId as keyof typeof collections]) {
      setCurrentCollection(collectionId);
      setConfig(getInitialConfig(collectionId));
    }
  };

  const saveConfiguration = () => {
    setSavedConfigs(prev => [...prev, config]);
  };

  const shareConfiguration = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('collection', currentCollection);
    url.searchParams.set('case', config.case?.id || '');
    url.searchParams.set('size', config.size);
    url.searchParams.set('band', config.band?.id || '');
    
    navigator.clipboard.writeText(url.toString());
    return url.toString();
  };

  return {
    config,
    currentCollection,
    updateConfiguration,
    changeCollection,
    saveConfiguration,
    shareConfiguration,
    savedConfigs,
    loadConfiguration: setConfig
  };
}