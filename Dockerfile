FROM node:alpine as build-stage
RUN npm i -g @vercel/ncc
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run bundle
FROM node:alpine as production-stage
COPY --from=build-stage /app/dist /app
EXPOSE 8077
ENTRYPOINT [ "node","/app/index.js" ]