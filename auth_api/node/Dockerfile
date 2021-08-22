FROM node:9-alpine

FROM node:9-alpine

WORKDIR /sre_bootcamp

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD [ "npm", "start" ]
# App must run on port 8000
# Add your instructions to dockerize the application
# first step is create a .env file and put in the root of sre-bootcamp/auth_api/node/ with the access like this
# HOSTDB=
# USERDB=
# PASSWORDDB=
# DATABASE=
# JWT_SECRET=
# second step (optional if you want to modify or extend the project)
# docker build -t wize-samuel-canales:latest .  [at the root directory sre-bootcamp/auth_api/node/]
# third step run the image public from docker hub (is active now)
# docker run -p 8000:8000 compusam/wize-samuel-canales
# the app is running on the port 8000 from localhost:8000

#
