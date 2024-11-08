# Step 1: Use an official Node.js runtime as a base image
FROM node:14

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose the port your site runs on
EXPOSE 3000

# Step 7: Specify the command to run your app
CMD ["npm", "start"]