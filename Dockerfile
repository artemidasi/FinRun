FROM node:lts-gallium as build-stage

RUN addgroup --system react \
    && adduser --system --ingroup react react

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_DOCKER=1

ENV NEXT_PUBLIC_AUTH_API_URL=https://fin-run.ru/secure
ENV NEXT_PUBLIC_MAIN_API_URL=https://fin-run.ru/v1

# set working directory
WORKDIR /app

# install app dependencies
COPY --chown=react:react package.json ./
COPY --chown=react:react package-lock.json ./

RUN npm config set unsafe-perm true

RUN npm install --silent --unsafe-perm=true --allow-root
RUN npm install react-scripts@5.0.0 -g --silent --unsafe-perm=true --allow-root

RUN mkdir -p /app/node_modules/.cache && \
    chown -R react:react /app/node_modules/ && \
    chmod -R 777 node_modules/ && \
    chmod -R 777 package.json && \
    chmod -R 777 package-lock.json && \
    chown -R react:react ~/.npm

# RUN npm ci --silent --unsafe-perm=true --allow-root
RUN npm install --silent --unsafe-perm=true --allow-root
RUN npm install react-scripts@5.0.0 -g --silent --unsafe-perm=true --allow-root
# RUN npm install -g node-sass --unsafe-perm=true --allow-root
# RUN npm install --unsafe-perm=true --allow-root

# copy app
COPY --chown=react:react . ./

# build
RUN npm run build

RUN mkdir -p /app/node_modules/.cache && \
    chown -R react:react /app/node_modules/ && \
    chmod -R 777 node_modules/ && \
    chmod -R 777 package*.json && \
    chown -R react:react ~/.npm

USER react

EXPOSE 3000

RUN ls -lah

# start app
CMD ["npm", "start"]
