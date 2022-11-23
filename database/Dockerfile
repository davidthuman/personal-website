# NEEDS TO BE CHANGED

# syntax=docker/dockerfile:1
# MAINTAINER "Brian Scott <dev@bscott.mozmail.com>"

FROM alpine as downloader

ARG POCKETBASE_VERSION=0.8.0

# Install the dependencies
RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    zip \
    zlib-dev

# Download Pocketbase and install it for AMD64
ADD https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_linux_amd64.zip /tmp/pocketbase.zip
RUN unzip /tmp/pocketbase.zip -d /tmp/
RUN chmod +x /tmp/pocketbase

FROM scratch

COPY --from=downloader /tmp/pocketbase /pocketbase

# Start Pocketbase
CMD [ "/pocketbase", "serve", "--http=0.0.0.0:8090"]