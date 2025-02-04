# build environment
FROM node:22-alpine
RUN apk add --update \
    git \
    python3 \
    python3-dev \
    py3-pip \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
  && pip3 install virtualenv \
  && rm -rf /var/cache/apk/*
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY . /app
RUN yarn install
RUN NODE_OPTIONS="--max_old_space_size=4096" yarn run build
