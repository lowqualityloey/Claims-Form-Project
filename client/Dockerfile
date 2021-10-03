# use the node 12 version image
FROM node:12
# create the working directory as named app
WORKDIR /app
# add patch to fix a reloading bug - so that for hot-reloading via bind mount,
# the user/developer does not need to use refresh button in the browser to reload code changes
ENV CHOKIDAR_USEPOLLING=true
# copy all into app folder
COPY . /app
# run an install
RUN ["npm","install"]
# expose a port (of the docker container) where the client/app should run
EXPOSE 3000
# set/run a command as the entry point to run the app
ENTRYPOINT ["npm", "start"]