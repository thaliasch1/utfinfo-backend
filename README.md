# UTFInfo
In this repository you will find the code for the Back-end system of the project:

 <b>UFTINFO: Web platform for displaying informational media.</b>

## Dependecies

* Node JS - https://nodejs.org/en/download/

## Download 

```bash
$ git clone https://github.com/thaliasch1/utfinfo-backend.git
```


## Configuration

After cloning the project, you can find the .env file in the project root, where the environment variables are located; 
In this file it is necessary to update the variable URL and PORT.

URL  = url that is running the back-end, usually: http://localhost, without the port

PORT = the port that is running, usually: 3000

In the .env file update: 


Running local: 
```bash
PORT=3000
URL="http://localhost"
```

To run on the server use: 
```bash
PORT=3000
URL="http://totens.td.utfpr.edu.br"
```

### Running

First update the packages:

```bash
npm i
```
then run the application:
```bash
npm start
```
After the Back-end is running you can start the Front-end


