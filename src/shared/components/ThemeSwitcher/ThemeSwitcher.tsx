import { useTheme } from '@shared/hooks/useTheme';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex items-center gap-2'>
      <label
        htmlFor='theme-select'
        className='text-sm text-gray-700 dark:text-gray-100'
      >
        Тема:
      </label>
      <select
        id='theme-select'
        aria-label='Выбор темы'
        value={theme}
        onChange={e => setTheme(e.target.value as 'light' | 'dark' | 'auto')}
        className='border border-gray-500 rounded px-2 py-1 focus:outline-none focus:ring-4 focus:ring-blue-600'
      >
        <option value='auto'>Auto</option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
