# syntax=docker/dockerfile:1
# base image name
FROM node

# working directory
WORKDIR /app

# copy package.json and install dependencies
COPY ["package.*", "./"]
RUN npm install

# copy the source code
COPY . .

# run the application
CMD ["npm", "run", "server"]