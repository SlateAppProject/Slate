# SLATE

# Team Meh

### Members
 * Brandon Hurrington | Manish B KC | Marisha Hoza | Peter Lee
 
### Product Description
A translation chat app geared towards groups of foreign language enthusiasts. 

### Vision

What is the vision of this product?
- Our product vision is to create a translation chat app geared towards groups of foreign language enthusiasts. It will have multi-chatrooms that are language specific so user's can communicate in their own native language. 

What pain point does this project solve?
- Individual's language preference differ and this makes communication difficutl. Rather than using a seperate application to translate correspondance, our app will translate it in real-time within the chatroom. This allows for a seemless communication experience. 

Why should we care about your product?
- This product will help alleviate the ineffectiveness of communication between different languages. 

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


You *MUST* describe what the non-functional requirement is and how it will be implemented. Simply saying "Our project will be testable for testibility" is **NOT** acceptable. Tell us how, why, and what. 

### Data Flow
Describe the flow of data in your application. 
Write out what happens from the time the user enters the app to the time the request process completes (The user is done with the app). Think about the "Happy Path" of the application. Describe through visuals and text what requests are made, and what data is received, in addition to any other details about how the user moves through the site. 

## Domain Model
![Model](https://github.com/SlateAppProject/Slate/blob/master/docs/model.jpg)

## AWS Product Assets:
 - API Gateway
 - Cognito
 - Lambda
 - Translate
 - Redis
 - <strike>CodeStar</strike>
 - Dynamo DB
 
## Important Documents
* [Team Agreement](docs/Team-Agreement.md)
* [Glo Board](https://app.gitkraken.com/glo/board/XZOBl6r2-gAPzcbw)
* [Whimsical Wireframe](https://whimsical.com/4Jpa6FyPKYeXfBFEGr25dt)
