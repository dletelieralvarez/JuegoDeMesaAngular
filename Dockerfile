# Etapa 1: build de Angular
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build JuegoDeMesaAngular --configuration production

# Etapa 2: Servir app con nginx
FROM nginx:alpine
COPY --from=build /app/dist/juego-de-mesa-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]