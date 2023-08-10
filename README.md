# Crypto Scan

###### Основной репозиторий

# 1. Структура

```bash
/root
  # =-=-=-=-=-=-= Клиент =-=-=-=-=-=-=
  /client # - Клиент (фронтенд)
    /app # - Feature-Sliced слой
      /entrypoint # - Точка входа клиента (фронтенда)
      /providers # - Контекстные обёртки aka BrowserRouter, ThemeProvider
      /root # - Корневой компонент приложения (App)
      /routes # - Роуты по страницам
    /pages # - Feature-Sliced слой (Страницы)
      /brc-20 # - Страница с brc-20 токенами
      /login # - Страница авторизации
      /nfts # - Страница с nfts
      /not-found # - Страница Not found (404)
      /portfolio # - Главная страница приложения
      /transactions # - Страница с транзакциями
    /widgets # - Feature-Sliced слой (Композиция shared и entity элементов с бизнес логикой)
    /features # - Feature-Sliced слой. Фичи приложения
    /entities # - Feature-Sliced слой. Сущности приложения
    /shared # - Feature-Sliced слой
      /theme # - срез темы
        /provider # - Реализация провайдера темы
        /schema # - Тема приложения
  # =-=-=-=-=-=-= Сервер =-=-=-=-=-=-= 
  /api # - REST интерфейс
    /entrypoint # - Точка входа приложения
  # =-=-=-=-=-=-= Crawler (WiP) =-=-=-=-=-=-= 
  /crawler # - Скрипты сбора данных
```

# 2. Настройка окружения

### Требования

1. Node 16 - 19
2. Yarn
3. Docker, Docker-compose

### 2.1 Установка зависимостей

```bash
yarn install
```

### 2.2 Запуск (в режиме разработки)

#### Сервисы разработки

* `api-dev` - бэкэнд
* `client-dev` - фронтенд

#### Поднять контейнеры

```bash
docker compose --profile dev up
```

#### Остановить контейнеры

```bash
docker compose --profile dev stop
```

#### Удалить контейнеры

```bash
docker compose --profile dev down
```

# 3. Развёртывание

*В процессе...*
