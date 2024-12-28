import { useConfiguration } from '@/hooks/useConfiguration';
import { WatchPreview } from './customizer/WatchPreview';
import { ProductInfo } from './customizer/ProductInfo';
import { CategorySection } from './customizer/CategorySection';
import { ActionBar } from './customizer/ActionBar';

export function WatchCustomizer() {
  const { 
    config, 
    currentCollection,
    updateConfiguration, 
    saveConfiguration
  } = useConfiguration();

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-12">
          <WatchPreview configuration={config} />
          <ProductInfo configuration={config} />
        </div>
      </section>

      {/* Customization Sections */}
      <div className="space-y-24 py-24">
        <CategorySection
          title="Choose your size"
          type="size"
          config={config}
          onUpdate={updateConfiguration}
        />
        
        <CategorySection
          title="Pick your case"
          type="case"
          config={config}
          onUpdate={updateConfiguration}
        />
        
        <CategorySection
          title="Select your band"
          type="band"
          config={config}
          onUpdate={updateConfiguration}
        />
      </div>

      <ActionBar 
        config={config}
        collection={currentCollection}
        onSave={saveConfiguration}
      />
    </div>
  );
}