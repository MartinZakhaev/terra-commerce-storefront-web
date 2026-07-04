FROM node:24-alpine AS build
WORKDIR /app
RUN npm install --global pnpm@11.9.0
COPY package.json pnpm-workspace.yaml ./
RUN pnpm install --no-frozen-lockfile --network-concurrency=4 --child-concurrency=1
COPY . .
RUN pnpm build

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
