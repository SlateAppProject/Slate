# SLATE

## Team Meh

#### Members
 * Brandon Hurrington | Manish B KC | Marisha Hoza | Peter Lee
 
### Product Description
A translation chat app geared towards groups of foreign language enthusiasts. 

### Vision

What is the vision of this product?
- Our product vision is to create a translation chat app geared towards groups of foreign language enthusiasts. It will have multi-chatrooms that are language specific so user's can communicate in their own native language. 

What pain point does this project solve?
- Individual's language preference differ and this makes communication difficutl. Rather than using a seperate application to translate correspondance, our app will translate it in real-time within the chatroom. This allows for a seemless communication experience. 

Why should we care about your product?
- This product will support communication between different languages. 

### Scope (In/Out)
- IN 
	- The app will signup users and once joined they can enter a chatroom.
	- The app lets users chat in their speicific language preferance. 
	- The app will authenticate users during login.

- OUT 
	- This is not a mobile-first app. 
	- The app will not retain any messages after a chatroom a left. 

#### MVP
A web application with a single chatroom for users to chat in their native language that is translated into English. 

#### Stretch
Multi-chatrooms for users to join depending on which translated language is needed. 

### Functional Requirements
1. A user can sign up for the app. 
2. A user can login and join a chatroom.
3. A user can type in the chatroom and it will be translated to another language. 
4. A user can logout or the app.

### Non-Functional Requirements
 #### Security
 - To ensure user information and privacy, the app will utilize AWS Cognito to authenticate a user. The app will also not retain any discussions after a user has disconnected from the chatroom. 
 #### Reliability
 - Utilizing AWS services to maintain application's availabilty to users. 
#### Scalability
 - Adopting serverless applicaion model using AWS cloud and other services will support on-demand capacity provisioning. 

### Architecture
![Architecture](https://github.com/SlateAppProject/Slate/blob/dev/docs/arc.jpg)

### Data Flow
User visits our web application, and signs up for our translation chatroom product/service (don't worry, it's free!). User registration requirements are: name, alias, password, language preference, email, and phone number. Once registered, user can now login with their credentials. After login is authenticated, a user can choose a chatroom to join, in which a chatroom is languauge specific. Once a user clicks the chatroom and joins, he/she can start typing in their preferential language and it will be translated to the chatrooms defualt language. User can leave chatroom and sign out of web application.

### AWS Product Assets:
 - API Gateway & WebSockets
 - Cognito
 - Lambda
 - Translate
 - <strike>Redis</strike>
 - <strike>CodeStar</strike>
 - Dynamo DB
 - Amplify
 
### Other Technologies & Languages
- Front-End
  - JS
  - VUE
  - HTML/CSS
 
- Back-End
 	- JS
 	- Java
 
### Important Documents
* [Team Agreement](docs/Team-Agreement.md)
* [Glo Board](https://app.gitkraken.com/glo/board/XZOBl6r2-gAPzcbw)
* [Whimsical Wireframe](https://whimsical.com/4Jpa6FyPKYeXfBFEGr25dt)
