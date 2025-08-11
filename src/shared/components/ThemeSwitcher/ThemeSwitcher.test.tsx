import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import ThemeSwitcher from './ThemeSwitcher';

// Mock useTheme hook
vi.mock('@shared/hooks/useTheme', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}));

describe('ThemeSwitcher', () => {
  it('renders theme selector', () => {
    render(<ThemeSwitcher />);

    expect(screen.getByText('Тема:')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('has correct theme options', () => {
    render(<ThemeSwitcher />);

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('light');

    const options = Array.from(select.options).map(option => option.value);
    expect(options).toEqual(['auto', 'light', 'dark']);
  });
});
