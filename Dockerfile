# build environment
FROM node:24-alpine
RUN apk add --update \
    bash \
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
  && rm -rf /var/cache/apk/*
WORKDIR /app
ARG VITE_EXTERNAL_SERVICES_SPEC_ID=""
ARG VITE_EMAIL_AUTHENTICATION_PROCESS_ID=""
ARG VITE_PARENT_ORGANISATION_ID=""
ENV PATH=/app/node_modules/.bin:$PATH
ENV VITE_EXTERNAL_SERVICES_SPEC_ID=$VITE_EXTERNAL_SERVICES_SPEC_ID
ENV VITE_EMAIL_AUTHENTICATION_PROCESS_ID=$VITE_EMAIL_AUTHENTICATION_PROCESS_ID
ENV VITE_PARENT_ORGANISATION_ID=$VITE_PARENT_ORGANISATION_ID
COPY package.json /app/package.json
COPY . /app
RUN yarn install
RUN NODE_OPTIONS="--max_old_space_size=4096" yarn run build
