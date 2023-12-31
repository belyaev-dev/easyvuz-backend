ARG WORKDIR=/opt/app
ARG NODE_VERSION=node:18-alpine3.17

# Base Stage: Upgrade npm and install / upgrade pnpm
FROM ${NODE_VERSION} AS base
ARG WORKDIR
LABEL builder=true org.opencontainers.image.authors="Denis Belyaev battler73@yandex.ru"
RUN npm i -g pnpm
RUN mkdir -p ${WORKDIR} && chown -R node:node ${WORKDIR}
USER node

# Dependencies Stage: Copy package.json + lock file and install dependencies
FROM base as installer
ARG WORKDIR
WORKDIR ${WORKDIR}
COPY --chown=node:node package.json pnpm-lock.yaml ./
# Skip pnpm checking + Husky init
RUN pnpm install --ignore-scripts --frozen-lockfile
# Copy Prisma schema file and generate Prisma client
COPY --chown=node:node prisma/schema.prisma ./prisma/
RUN npx prisma generate

# Builder Stage: Copy node_modules from dependencies and build it
FROM installer as builder
ARG WORKDIR
WORKDIR ${WORKDIR}
COPY --chown=node:node . .
RUN pnpm build

# Production Stage: Copy dist from builder and start the application
FROM ${NODE_VERSION} as runner
ARG WORKDIR
WORKDIR ${WORKDIR}
COPY --chown=node:node --from=builder ${WORKDIR}/dist .
USER node

EXPOSE 3000
CMD ["node", "main.js"]
