import { Moon, Sun } from 'lucide-react';

interface ThemeSwitcherProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function ThemeSwitcher({ theme, onToggle }: ThemeSwitcherProps) {
  return (
    <div className="flex items-center gap-[10px]">
      <button
        onClick={onToggle}
        className="flex items-center justify-center px-5 py-4 rounded-lg transition-colors hover:bg-white/10"
        aria-label="Toggle dark mode"
      >
        <Moon className="w-[18px] h-[18px]" style={{ color: 'var(--semantic-button-icon)' }} />
      </button>
      <button
        onClick={onToggle}
        className="flex items-center justify-center px-5 py-4 rounded-lg transition-colors hover:bg-white/10"
        aria-label="Toggle light mode"
      >
        <Sun className="w-[18px] h-[18px]" style={{ color: 'var(--semantic-button-icon)' }} />
      </button>
    </div>
  );
}
