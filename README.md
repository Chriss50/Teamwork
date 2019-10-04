[![Build Status](https://travis-ci.org/Chriss50/Teamwork.svg?branch=develop)](https://travis-ci.org/Chriss50/Teamwork)
[![Coverage Status](https://coveralls.io/repos/github/Chriss50/Teamwork/badge.svg?branch=develop)](https://coveralls.io/github/Chriss50/Teamwork?branch=develop)

# Teamwork
Teamwork is an internal social network for organizations’ employees. The goal of this application is to facilitate more interaction between colleagues and facilitate team bonding

## UI creation

### User have to register
> In the the UI folder there is a sign up file to help the user create an account.

> A user must have an account to use the system.

> CSS files for styling the form.

> A js file

### User have to login

> A login form have been created so that a registered user can enter to the system.

> When a user forgot his password, he is able to recover it and be generated to his email address.
### Homepage

> An index page added, it's where the user will find both login and sign up links.

> A user is able of seeing others articles and react to them, it can be commenting, sharing, even liking those articles.

> A user is able to edit his own articles once they are shared.

### Messages
> A user also can send private messages to anyone with the account.

> A user is able to delete his articles when he desires.

> Apart from sending messages to his friends, a user can also contact the system if he need any support. There is a link for that.

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
