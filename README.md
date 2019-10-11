# [SLATE](http://slate-app-front-end.s3-website-us-west-2.amazonaws.com/#/)

### Team Meh
Brandon Hurrington | Manish B KC | Marisha Hoza | Peter Lee
 
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
A web application with a single chatroom for users to communicate and receive incoming messages in their language preference.

#### Stretch
 - Multi-chatrooms for users to join depending on which translated language is needed. 
 - Direct Messaging
 - User profile pictures
 - Dark/Light themes

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
 - S3
 
### Other Technologies & Languages
 - JS
 - VUE
 - HTML/CSS
 - JS
 - Java
 
### Important Documents
* [Team Agreement](docs/Team-Agreement.md)
* [Glo Board](https://app.gitkraken.com/glo/board/XZOBl6r2-gAPzcbw)
* [Whimsical Wireframe](https://whimsical.com/4Jpa6FyPKYeXfBFEGr25dt)

### References
- [Build a multilingual chat app with React and Amazon Translate](https://pusher.com/tutorials/multilingual-chat-react-amazon-translate)
- [Multilingual Chat App with PubNub ChatEngine and AWS Translate](https://github.com/shyampurk/ChatEngineWithAWSTranslate)
- [Using Web Socket AWS API Gateway to allow your event driven Lambda based API to push data to your clients](https://medium.com/build-succeeded/using-web-socket-aws-api-gateway-to-allow-your-event-driven-lambda-based-api-to-push-data-to-your-212855db344b)
- [Integrating Vue.js and Socket.io](https://alligator.io/vuejs/vue-socketio/)
- [Announcing WebSocket APIs in Amazon API Gateway](https://aws.amazon.com/blogs/compute/announcing-websocket-apis-in-amazon-api-gateway/)
- [Vue-native-websockets](https://www.npmjs.com/package/vue-native-websocket)
- [A simple chat architecture for your MVP](https://cheesecakelabs.com/blog/simple-chat-architecture-mvp/)
- [How to Build Production-ready Vue Authentication](https://dev.to/dabit3/how-to-build-production-ready-vue-authentication-23mk)
- [Using Amazon Polly with Amazon Translate](https://docs.aws.amazon.com/translate/latest/dg/examples-polly.html)
- [How Amazon Translate Works](https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes)

