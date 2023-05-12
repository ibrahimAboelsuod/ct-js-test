FROM node AS base
# Stage 1: Preparing
WORKDIR /app
# defualt the NODE_ENV to production for increased performance
ARG NODE_ENV=production
ENV NODE_ENV $ENVIRONMENT
COPY package*.json ./
RUN npm ci

# Build
FROM base AS build
COPY . .
RUN npm run build:prod

# Serve nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
