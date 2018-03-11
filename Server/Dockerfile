FROM arm32v7/node 

VOLUME /var/lib/jenkins/cache/npm:/root/.npm

RUN mkdir /euroserver
COPY . /euroserver
WORKDIR ./euroserver
RUN npm install -g npm@latest && npm install

EXPOSE 3000:3000

CMD node index.js
