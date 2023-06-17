## Тестовое задание от IT Solution

## Используемый стек:
1. `Vue 3.3.4`
2. `Typescript`
3. `Tailwind \ PostCss`
4. `Swiper.js`
5. `Vite`

## Архитектура
# .
`src`/
|-`app/` - Корневая папка приложения.
    |-`styles/`  - Файлы стилей для всего приложения.
    |-`app.vue`  - Корневой элемент приложения.
    |-`index.ts` - Вход в приложение.
|-`shared/`
    |-`assets/` - Папка с картинками и иконками.
    |-`helpers/` - Папка с переиспользуемым кодом.
    |-`hooks/` - Папка с хуками.
    |-`ui/` - Папка с UI компонентами, используемыми во всем приложении.
|-`views/` - Папка с компонентами страниц
|-`widgets/` - Папка с зависимыми компонентами для конкретной страницы

## Как запустить

## Установить зависимости:
```sh
    npm install
```

## Запустить локально
```sh
    npm run dev
```

## Для продакшена
```sh
    npm run build
```