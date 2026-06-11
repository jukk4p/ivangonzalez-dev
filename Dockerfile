# syntax=docker/dockerfile:1

# 1. Base stage
FROM node:22.12.0-alpine AS base
WORKDIR /app
RUN npm install -g npm@latest

# 2. Dependencies stage
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# 3. Build stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

# 4. Runner stage (Production payload)
FROM base AS runner
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Copiar build de servidor Astro
COPY --from=builder /app/dist ./dist
# Copiar dependencias de producción necesarias para ejecutar el runtime de @astrojs/node
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./

CMD ["node", "dist/server/entry.mjs"]
