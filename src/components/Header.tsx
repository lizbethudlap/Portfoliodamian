import { ThemeSwitcher } from './ThemeSwitcher';

const navItems = ['Home', 'Shop', 'About', 'Blog', 'Contact'];

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header 
      className="w-full overflow-hidden relative"
      style={{
        height: 'var(--semantic-layout-header-height)',
        backgroundColor: 'var(--semantic-surface-header)',
      }}
    >
      <div className="relative h-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <p 
          className="absolute left-[50px] top-6 font-semibold not-italic leading-normal"
          style={{
            fontFamily: 'var(--semantic-font-heading-primary)',
            fontSize: 'var(--semantic-font-size-logo)',
            color: 'var(--semantic-text-primary)',
          }}
        >
          Damian Alcala
        </p>
        
        {/* Navigation */}
        <nav 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-[47px]"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-normal not-italic leading-normal transition-opacity hover:opacity-70"
              style={{
                fontFamily: 'var(--semantic-font-body)',
                fontSize: 'var(--semantic-font-size-nav)',
                color: 'var(--semantic-text-primary)',
              }}
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Theme Switcher */}
        <div className="absolute right-[100px] top-1/2 -translate-y-1/2">
          <ThemeSwitcher theme={theme} onToggle={onThemeToggle} />
        </div>
      </div>
    </header>
  );
}
