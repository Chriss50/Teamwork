# Teamwork

[![Build Status](https://travis-ci.org/Chriss50/Teamwork.svg?branch=develop)](https://travis-ci.org/Chriss50/Teamwork)
[![Coverage Status](https://coveralls.io/repos/github/Chriss50/Teamwork/badge.svg?branch=develop)](https://coveralls.io/github/Chriss50/Teamwork?branch=develop)

Teamwork is an internal social network for organizations’ employees. The goal of this application is to facilitate more interaction between colleagues and facilitate team bonding

# **Technonlogies**

- **Express JS** - API development framework

- **Node** - run time environment for JavaScript
- **Mocha and Chai** - for testing
- **Eslint** - code analysis tool for identifying problematic patterns found in JavaScript code
- **Babel JS** - JavaScript compiler (**ES6** to **ES5**)

# **Requirements and Installation steps**

## **You need the following to be able to run the application**

[Node](https://nodejs.org/en/download/) a runtime environment for JavaScript

[Postman](https://www.getpostman.com/downloads/) to test the Api endpoints

[Visual studio code](https://code.visualstudio.com/download) for editing and running the app

## **Clone the project**
In your command line run the following codes:
    
    - git clone https://github.com/Chriss50/Teamwork.git
    - npm install (to install required dependencies)
  
## **Testing**

    - npm test

## **Start The Application**

     - npm start


## API endpoints

The following endpoints have been implemented:

HTTP METHOD | ENDPOINT | DESCRIPTION
------------|---------------|-----------------------------------------
POST | `/api/v1/auth/signup`  | Employees can create their own user account
POST | `/api/v1/auth/signin`  | Employees can sign in
POST | `api/v1/articles` | Employees can write and/or share articles
PATCH | `api/v1/articles/{id}`| Employees can edit their articles
DELETE | `api/v1/articles/{id}`| Employees can delete their articles
POST | `api/v1/articles/{id}/comments`| Employees can comment on other colleagues' article post
GET | `api/v1/feeds`| Employees can view all articles, showing the most recently posted articles first
GET | `api/v1/articles/{id}`|  Employees can view a specific article

You can use Postman to test the endpoints.

### Some relevant links

### 1. Gh-pages

https://chriss50.github.io/Teamwork/UI/html/


### 2. Pivotal Tracker

https://www.pivotaltracker.com/n/projects/2397837



## Author
Ishimwe Christian