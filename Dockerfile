FROM node:lts

ENV WORK_DIR /usr/src/app

ENV PORT 3000

WORKDIR ${WORK_DIR}

ADD . ${WORK_DIR}

RUN npm ci
RUN npm run build

EXPOSE ${PORT}

CMD [ "npm", "start" ]