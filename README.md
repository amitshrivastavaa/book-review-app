# Overview of application:
The application has 3 parts:
  ## Frontend:
    Main Tech Stack: React.js, Redux(not really used it in this app), React Router V4, Webpack4, Babel.
  ## Backend:
    Main Tech Stack: Express.js, MySql, Pm2(for running node.js server)
  ## Deployment:
    Main Tech Stack: Docker


## Running app on development server:
  1. Go to `frontend` folder & execute `npm i` && `npm start` command.
  2. Go to `backend` (mysql database needed see  Nothing works) folder & execute `npm i` && `npm run dev` command.
  3. Application will run on `http://localhost:8080`

## Running app in docker:
  1. Install docker in case if you don't have from [here](https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac).
  2. Start Docker & go to the directory `twyla_code_challenge` from terminal.
  3. RUN `docker-compose build`.
  4. RUN `docker-compose up`. (`docker-compose up --build` to skip above step).
  5. There is some problem interacting with mysql because they changed some authencation stuff and now in     order to interact with mysql using node.js we need to have either ssl connection or some modules which disables this authencation thingy.
    [here is the issue](https://github.com/mysqljs/mysql/issues/1507)
  6. A quick fix is you need to do the following steps:
    * RUN `docker ps` & find the container id(the container name will be similar to "")
    * RUN `docker exec -it <id> mysql -u root -p123456`. <id> => CONTAINER ID (e.g "3343c2c77c55") of ""
    * You will be ask for password. Type 123456
    * You will see mysql prompt => mysql >
    * RUN `ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456'`;
    * RUN `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'`;
  7. Restart the running docker container from directory `book-review-app` by Running `docker-compose up`
  8. It should work now.

## Nothing works(in-case):
  1. Install MySql.
  2. Go to folder mysqldump and copy the content of setup.sql and paste it into mysql console. It will gonna create the DATABASE name book_review_db.
  3. Create a mysql user with name: `root` and password `123456` and server `localhost`
  4. Go to `frontend` folder from terminal RUN `npm i` && `npm run local:prod`
  5. Go to `backend` folder from terminal RUN `npm i` && `npm start`. pm2 will start node js server which replicates the prod environment
  6. Go to `http://localhost:3000`
  7. To stop pm2 sever run `npm run stop`.
