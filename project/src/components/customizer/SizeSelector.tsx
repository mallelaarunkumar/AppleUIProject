import { Button } from '@/components/ui/button';

interface SizeSelectorProps {
  value: '41mm' | '45mm';
  onChange: (size: '41mm' | '45mm') => void;
}

export function SizeSelector({ value, onChange }: SizeSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose your size</h3>
      <div className="flex space-x-4">
        <Button
          variant={value === '41mm' ? 'default' : 'outline'}
          onClick={() => onChange('41mm')}
          className="flex-1"
        >
          41mm
        </Button>
        <Button
          variant={value === '45mm' ? 'default' : 'outline'}
          onClick={() => onChange('45mm')}
          className="flex-1"
        >
          45mm
        </Button>
      </div>
    </div>
  );
}