FROM mcr.microsoft.com/playwright:v1.54.0-noble
WORKDIR /app
COPY . .
RUN corepack enable && \
  corepack prepare pnpm@latest --activate && \
  pnpm install

CMD ["pnpm", "run", "test"]