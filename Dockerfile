FROM node:latest 

# copy src files 

COPY . .

COPY package*.json ./

# install nodejs dependencies 
RUN npm install


# default command when image is ran to create container
CMD ["npm", "start"]

# PORT AT WHICH CONTAINER LISTENS ON FOR NETWORK DATA