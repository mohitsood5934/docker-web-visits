# docker-web-visits-app
 - In this app, we will show how many times a user has visited a web app
 - We will be running our app on expressjs & we will be using the redis-server to maintain the count of user visits
 - We are going to learn how to use multiple local containers
 - We will be cresting two containers : one for nodejs & other for redis
 - Both are isolated from each other
 - We need a mechanism to establish a communication betwen them . This can be established by the use of docker-compose / volumes.

Tagging an image

docker build -t msood123/visits .

```docker build -t <my_username>/<appName>:latet <destination>```

This command will give us image id 


# Running multiple containers
 - We can create docker-compose.yml file to  create & run miltiple containers in our app
 - Defining them in same .yml file will enable multiple containers to communicate with each other without opening any other port/connection between them  and exchange as much information needed.

# Docker Compose commands
 - ```docker-compose up ``` - run the image
 - ```docker-compose up --build``` - it is combination of ```docker build .``` ```docker run myImage```
 - Launch containers  in background   ```docker-compose up -d ```
 - Stop Containers - ```docker-compose down ```
 - Get status of running containers ```docker-compose ps```

# How to deal if our containers got crash ? 
 - if we are running some server / service inside the container , then server might get crash / hang due to some reason .We will look how to restart the container if some crash/error occurred inside it due to some reason.

 -  We have "restart" policies . We should specify the "restart" value in our docker-compose.yml file . It can contain any of the below value
      <ul>
       <li>"no": never try to restart the container if it stops or crashes</li>
       <li>"always": if container stops due to any reason , always try to restart it</li>
       <li>"on-failure": only restart if the container exists with the error code/li>
        <li>"unless-stopped": always restart unless we forcibly stop it</li>
      </ul>
 
