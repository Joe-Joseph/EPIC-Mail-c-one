# EPIC-Mail-c-one

[![Build Status](https://travis-ci.com/Joe-Joseph/EPIC-Mail-c-one.svg?branch=server)](https://travis-ci.com/Joe-Joseph/EPIC-Mail-c-one)
[![Maintainability](https://api.codeclimate.com/v1/badges/e633ffcb5e6884fcb52e/maintainability)](https://codeclimate.com/github/Joe-Joseph/EPIC-Mail-c-one/maintainability) 
  [![Coverage Status](https://coveralls.io/repos/github/Joe-Joseph/EPIC-Mail-c-one/badge.svg?branch=server)](https://coveralls.io/github/Joe-Joseph/EPIC-Mail-c-one?branch=server)
 
**EPIC Mail** is Web application that will help people to interact and exchange messages/information over the internet.

**EPIC Mail features**
  1. Users can sign up.
  2. Users can login.
  3. Admin can create groups and Users to the group.
  4. Users can send a message to individuals.
  5. Users can view their inbox and read messages.
  6. Users can read sent messages.
  7. Users can save an email as draft and send it later or delete it.

**Prerequisites**
  * Node
  * Postman
  
**Setup**
  1. Clone the repository
     ```https://github.com/Joe-Joseph/EPIC-Mail-c-one.git```
     
  2. Install dependencies
  
     ```npm install```
     
  3. Start the server
  
     ```npm run start```
  
  4. Use Postman to test api on ```localhost:4000```
  
 **Run test**
 To run the application test run the following command in terminal
 
 ```npm test```
 
 **Endpoints**
 
 Endpoint | Functionality
 -------- | -------------
 POST /api/v1/auth/signup | Create user account
 POST /api/v1/auth/login | User login
 GET /api/v1/messages | Get received emails
 GET /api/v1/messages/unread | Get unread emails
 GET /api/v1/messages/sent | Get sent emails
 GET /api/v1/messages/draft | Get draft emails
 GET /api/v1/messages/:id | Read single email
 POST /api/v1/messages | Send email to individual
 DELETE /api/v1/messages/:id | Delete single email
 
 
 ### API documentation
 
1. **POST** http://localhost:4000/api/v1/auth/signup

**Endpoint**

```http://localhost:4000/api/v1/auth/signup```

This endpoints is for creating a new user

**Headers**

```Content-Type	application/json```

**Bodyraw** (application/json)

```
{
	"firstName" : "Jonas",
	"lastName": "Gitau",
	"email" : "joe@gmail.com",
	"password": "@12Gitau",
	"confirmPassword" : "@12Gitau"
}
```

2. **POST** http://localhost:4000/api/v1/auth/login

**Endpoint**

```http://localhost:4000/api/v1/auth/login```

This Endpoint allow user to login

**Headers**

```Content-Type	application/json```

**Bodyraw** (application/json)
```
{
	"email": "john@gmail.com",
	"password": "123456"
}
```

3. **GET** http://localhost:4000/api/v1/messages

**Enpoint**

```http://localhost:4000/api/v1/messages/sent```

This Endpoint is for getting all the messages

**Headers**

```Content-Type   application/json```

**Bodyraw** (application/json)

When there is no message you will get the following response
with status code and message telling what happaned
```
{
    "status": 400,
    "message": "There is no sent message"
}
```
When message found
You will get the following response
```
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "subject": "Greetings",
            "message": "hello!!!",
            "parentMessageId": 1,
            "status": "sent",
            "createdOn": "March 15, 2019"
        }
    ]
}
```

4. **GET** http://localhost:4000/api/v1/messages/sent

**Endpoint** 

```http://localhost:4000/api/v1/messages/sent```

This Endpoint is for getting all sent emails

**Headers**

```Content-Type	`application/json```

**Bodyraw** (application/json)

When there is no message you will get the following response

with status code and message telling what happaned
```
{
    "status": 400,
    "message": "There is no sent message"
}
```
When message found

You will get the following object
```
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "subject": "Greetings",
            "message": "hello!!!",
            "parentMessageId": 1,
            "status": "unread",
            "createdOn": "March 15, 2019"
        }
    ]
}
```

5. **GET** http://localhost:4000/api/v1/messages/unread

**Endpoint** 

```http://localhost:4000/api/v1/messages/unread```

Endpoint for getting all unread emails

**Headers**

```Content-Type	application/json```

**Bodyraw** (application/json)

When there is no message you will get the following response

with status code and message telling what happaned
```
{
    "status": 400,
    "message": "There is no unread message"
}
```
When message found

You will get the following object
```
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "subject": "Greetings",
            "message": "hello!!!",
            "parentMessageId": 1,
            "status": "unread",
            "createdOn": "March 15, 2019"
        }
    ]
}
```
6. **GET** http://localhost:4000/api/v1/messages/draft

**Endpoint**

```http://localhost:4000/api/v1/messages/draft```

Endpoint for getting all emails in draft

**Headers**

```Content-Type	application/json```

**Bodyraw** (application/json)

When there is no message you will get the following response

with status code and message telling what happaned
```
{
    "status": 400,
    "message": "There is draft no message"
}
```
When message found

You will get the following object
```
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "subject": "Greetings",
            "message": "hello!!!",
            "parentMessageId": 1,
            "status": "draft",
            "createdOn": "March 15, 2019"
        }
    ]
}
```
7. **GET** http://localhost:4000/api/v1/messages/1

**Endpoint**

```http://localhost:4000/api/v1/messages/1```

This is an Endpoint for reading one message

**Headers**

``Content-Type	application/json``

**Bodyraw** (application/json)

When there is no message you will get the following response

with status code and message telling what happaned
```
{
    "status": 404,
    "message": "Email was not found"
}
```
When message found

You will get the following object
```
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "subject": "Greetings",
            "message": "hello!!!",
            "parentMessageId": 1,
            "status": "draft",
            "createdOn": "March 15, 2019"
        }
    ]
}
```

8. **DELETE** http://localhost:4000/api/v1/messages/1

**Endpoint**

```http://localhost:4000/api/v1/messages/1```

This is the Endpoint for deleting one email

**Headers**

```Content-Type	application/json```

**Bodyraw** (application/json)

When there is no message you will get the following response

with status code and message telling what happaned
```
{
    "status": 404,
    "message": "Email was not found"
}
```
When message found

You will get response of a deleted object
```
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "subject": "Greetings",
            "message": "hello!!!",
            "parentMessageId": 1,
            "status": "draft",
            "createdOn": "March 15, 2019"
        }
    ]
}
```

**Technology used**

**Frontend**
  * JavaScript
  * HTML
  * CSS

**Backend**
  * Node
  * Express
  * mocha
  * chai

**Author**
Nkurunziza Joseph

