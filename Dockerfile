FROM node AS build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine AS final
EXPOSE 5173/tcp
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist /etc/nginx/html/

WORKDIR /
COPY ./ngix.conf /etc/nginx/nginx.conf
ENV ASPNETCORE_FORWARDEDHEADERS_ENABLED=true
CMD ["nginx", "-g", "daemon off;"]