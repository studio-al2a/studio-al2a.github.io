# Настройка проекта

## Установленные зависимости

### Основные

- **React 19** - основная библиотека для UI
- **Redux Toolkit** - управление состоянием
- **React Redux** - интеграция Redux с React

### Линтеры и форматирование

- **ESLint** - линтинг кода
- **Prettier** - форматирование кода
- **TypeScript ESLint** - линтинг TypeScript
- **React ESLint плагины** - правила для React
- **Redux ESLint плагин** - правила для Redux
- **Accessibility ESLint плагин** - правила доступности
- **Import ESLint плагин** - правила для импортов

## Доступные скрипты

```bash
# Разработка
npm run dev          # Запуск dev сервера
npm run build        # Сборка проекта
npm run preview      # Предпросмотр сборки

# Линтинг и форматирование
npm run lint         # Проверка кода линтером
npm run lint:fix     # Автоматическое исправление ошибок линтера
npm run format       # Форматирование кода с Prettier
npm run format:check # Проверка форматирования
npm run type-check   # Проверка типов TypeScript
```

## Структура Redux

```
src/store/
├── index.ts         # Основной store
├── hooks.ts         # Типизированные хуки
└── slices/
    └── exampleSlice.ts  # Пример slice
```

## Использование Redux

### В компонентах:

```tsx
import { useAppSelector, useAppDispatch } from './store/hooks';
import { increment, decrement } from './store/slices/exampleSlice';

const MyComponent = () => {
  const count = useAppSelector(state => state.example.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
```

## Правила линтера

### React

- Компоненты должны быть arrow functions
- JSX файлы должны иметь расширение .tsx
- Запрещены ненужные фрагменты
- Предупреждения о spread props

### Redux

- Предпочтение именованных аргументов в connect
- Рекомендация отделять компоненты в отдельные файлы

### Accessibility

- Обязательные alt атрибуты для изображений
- Валидация ARIA атрибутов
- Проверка ролей и их требований

### Imports

- Автоматическая сортировка импортов
- Группировка по типам (builtin, external, internal, etc.)
- Алфавитная сортировка

### Prettier

- Одинарные кавычки
- Точка с запятой в конце
- Максимальная ширина строки: 80 символов
- 2 пробела для отступов

## Примечание о Storybook

Storybook требует Node.js версии 20 или выше. Для установки обновите Node.js и выполните:

```bash
npx storybook@latest init --yes
```

## Рекомендации

1. Всегда используйте `useAppSelector` и `useAppDispatch` вместо обычных хуков
2. Создавайте отдельные файлы для каждого slice
3. Используйте TypeScript для типизации
4. Следуйте правилам доступности (a11y)
5. Регулярно запускайте линтер и форматирование
