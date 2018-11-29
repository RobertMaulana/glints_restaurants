# Forex Exchange Currencies
Simple Forex Exchange Currencies App


### Requirements
- [Node 8](https://nodejs.org/en/blog/release/v8.9.0/)
- [jest](https://facebook.github.io/jest/)
- [enzyme](https://airbnb.io/enzyme/)

### Run App without docker
To run Forex Exchange Currencies App in development environment use this command
```
$ npm install
$ npm run start
```

### Run test without docker
To run test on all specs
```
$ npm run test
```

### Run App via docker
Make sure you have docker installed
```
$ docker image build -t foreign_exchange_currency:1.0.0 .
$ docker container run -it -p 3000:3000 foreign_exchange_currency:1.0.0
```

### Run App with hot reloading via docker
```
$ docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app foreign_exchange_currency:1.0.0
```

### Run test via docker
```
$ docker container run -it -v $(pwd):/app foreign_exchange_currency:1.0.0 test
```

### Run inspect container of docker
```
$ docker container run -it foreign_exchange_currency:1.0.0 bash
```

### Build and Run
```
$ docker container run -it -v $(pwd):/app foreign_exchange_currency:1.0.0 build
```
