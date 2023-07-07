# Personal Website

This is the code to build David Thuman's personal [website](https://davidthuman.org)

## Maintainence Commands


`pm2 list` to list all processes that pm2 is running

`pm2 delete <processId>` to delete that process

`ps -ael` to list all processes that are currently running

`kill <pid>` to kill the process with id `<pid>`

`CTRL + Z` to put the current process to sleep

`bg` to run the process in the background

`npm install` to install all node packages to the system that are in package and package-lock

`rm -r <foldername>` to remove a directory and all of its content.

`npm run build` to build out the app

`pm2 start "./pocketbase serve --http 23.239.16.103:8090"`

`pm2 start "npm run start -- --port 8080"` 

## NGINX

### [How to deploy NextJS with NGINX?](https://stackoverflow.com/questions/64386737/how-to-deploy-nextjs-with-nginx)


