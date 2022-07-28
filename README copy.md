# React Auth Postgres

[Видео](https://youtu.be/BBTtkAFyxzE)  
В данном проекте реализована регистрация/авторизация пользователя средствами cookies и session

## Как запустить server

1) Установить все пакеты - ``npm install``

2) Заполнить и переименовать файл `.env.sample` в `.env`
Пример файла .env:
```bash
COOKIE_SECRET=catdog
COOKIE_NAME=authorisation
PORT=5555
DB_HOST=localhost
DB_USERNAME=adam
DB_USER_PASSWORD=null
DB_NAME=elbrus
DB_PORT=5432
DB_DIALECT=postgres
```
3) Cделать миграцию - `npx sequelize-cli db:migrate`
4) Запустить проект - `npm run start`


## Как запустить client

1) Установить все пакеты - `npm install`, 
2) Заполнить и переименовать файл `.env.sample` в `.env`
Пример файла .env:
```bash
REACT_APP_HOST=http://localhost:5555
```
3) Запустить проект - `npm run start`


## Автор

- [@balkoev](https://www.github.com/balkoev)
