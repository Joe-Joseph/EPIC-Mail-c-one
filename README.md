# EPIC-Mail-c-one

[![Build Status](https://travis-ci.com/Joe-Joseph/EPIC-Mail-c-one.svg?branch=server)](https://travis-ci.com/Joe-Joseph/EPIC-Mail-c-one)  [![Coverage Status](https://coveralls.io/repos/github/Joe-Joseph/EPIC-Mail-c-one/badge.svg?branch=server)](https://coveralls.io/github/Joe-Joseph/EPIC-Mail-c-one?branch=server)   
[![Maintainability](https://api.codeclimate.com/v1/badges/e633ffcb5e6884fcb52e/maintainability)](https://codeclimate.com/github/Joe-Joseph/EPIC-Mail-c-one/maintainability) 
[![Build Status](https://travis-ci.com/Joe-Joseph/EPIC-Mail-c-one.svg?branch=server)](https://travis-ci.com/Joe-Joseph/EPIC-Mail-c-one)  [![Coverage Status](https://coveralls.io/repos/github/Joe-Joseph/EPIC-Mail-c-one/badge.svg?branch=server)](https://coveralls.io/github/Joe-Joseph/EPIC-Mail-c-one?branch=server)
 
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

