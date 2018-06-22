FROM node:carbon as build

WORKDIR /home/twylya/


# pm2 is getting used for running node js process (forever)
RUN npm install pm2 -g
RUN npm install babel-cli -g

# backend caching
ADD backend/package*.json .
RUN npm install

# Add backend application files
ADD backend/ .


# Entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
  chmod +x /usr/local/bin/docker-entrypoint.sh


# frontend caching
ADD frontend/package*.json frontend/
RUN cd frontend && npm install

Add frontend/ frontend/
RUN cd frontend && npm run build:prod


# Expose the port
EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
