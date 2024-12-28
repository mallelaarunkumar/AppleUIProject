import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WatchCustomizer } from '@/components/WatchCustomizer';
import { useConfiguration } from '@/hooks/useConfiguration';

function App() {
  const [started, setStarted] = useState(false);
  const {
    config,
    currentCollection,
    savedConfigs,
    changeCollection,
    loadConfiguration
  } = useConfiguration();

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentCollection={currentCollection}
        onCollectionChange={changeCollection}
        savedDesigns={savedConfigs}
        onLoadDesign={loadConfiguration}
      />
      <main>
        {started ? (
          <WatchCustomizer />
        ) : (
          <Hero onStart={() => setStarted(true)} />
        )}
      </main>
    </div>
  );
}

export default App;