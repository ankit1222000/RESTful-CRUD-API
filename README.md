# RESTful-CRUD-API
A Node Express.js API that performs basic CRUD (Create, Retrieve, Update, and Delete) operations on a particular Student with a relational database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))  [Express.js] (https://www.npmjs.com/package/express) installed on your computer 

```
node@v10.16.0 or higher
npm@6.9.0 or higher
express @4.17.1 or higher
git@2.17.1 or higher
```


## Setting Database

Login to your mysql root by using the commands:


```
#Moving to database table folder
$ cd database

# Login to root
$ mysql -uroot -p
Your Password:

# Create Database
$ CREATE DATABASE node;

# Create New  Database User
$ create user 'nodeuser'@'localhost' identified by 'nodeuser@1234';   

# Grant All Privileges to User
$ grant all privileges on node.* to 'nodeuser'@'localhost' with grant option;

# Now quit from mysql, then login as accounting by typing
$ mysql -unode -p
$ Your Password: nodeuser@1234

# Choose Database
$ use node

# Create Customer Table in Database
$ source customer.sql
(Table will be created)

```


## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/ankit1222000/RESTful-CRUD-API.git

# Go into the repository
$ cd RESTful-CRUD-API

# Install dependencies
$ npm install

#Start's Express API server
$ node server.js
```

## Routes Available

```
  (Create New Customer) app.post("/customers",customers.create);

  (Find All Customer) app.get("/customers",customers.findAll);

  (Find One Customer Using Customer Id ) app.get("/customers/:customerId",customers.findOne);

  (Update Customer Using Customer Id) app.put("/customers/:customerId",customers.update);

  (Delete Customer Using Customer Id) app.delete("/customers/:customerId",customers.delete);

  (Delete All Customer) app.delete("/customers",customers.deleteAll);

```
