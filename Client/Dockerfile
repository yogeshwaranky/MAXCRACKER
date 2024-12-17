FROM mhart/alpine-node

RUN npm install -g serve

EXPOSE 3000
WORKDIR /usr/local/lib/penClient

ENTRYPOINT [ "serve", "-p", "3000", "-s", "/usr/local/lib/build" ]
