FROM node:19
WORKDIR /app
COPY . .
RUN yarn --immutable
RUN yarn workspace @api/entrypoint build
CMD yarn workspace @api/entrypoint prod
