# build stage
FROM node:lts as build-stage
WORKDIR /vue/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
CMD ["yarn", "quasar", "dev"]


#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /var/www
#COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 3000
#ENTRYPOINT ["nginx","-g","daemon off;"]
