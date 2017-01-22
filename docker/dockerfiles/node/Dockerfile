FROM node:argon

ARG user=node

RUN apt-get update
RUN apt-get install sudo vim

RUN usermod -aG sudo $user
RUN echo "$user:$user"|chpasswd && echo "root:root"|chpasswd

RUN npm install -g webpack express-generator

USER $user
WORKDIR /app
ENTRYPOINT tail -f /dev/null
