#!/bin/bash
# preparing
#docker buildx create --name mybuilder
#docker buildx use mybuilder
#docker buildx inspect --bootstrap
docker buildx build --push -t abvgdeej/front:v1 -o type=image --platform=linux/amd64 .
#docker buildx build --push -t abvgdeej/front:v1 -o type=image --platform=linux/arm64,linux/amd64 .
docker run -it -d -p 3000:3000 --name=front abvgdeej/front:v1
