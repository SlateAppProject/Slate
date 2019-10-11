# [SLATE](http://slate-app-prod.s3-website-us-west-2.amazonaws.com/#/)

### Team Meh
Brandon Hurrington | Manish B KC | Marisha Hoza | Peter Lee
 
### Product Description
A translation chat app geared towards groups of foreign language enthusiasts. 

### Vision

What is the vision of our product?
- Our product vision is to create a translation chat app geared towards groups of foreign language enthusiasts. It will have multi-chatrooms that are language specific so user's can communicate in their own native language. 

What pain point does this project solve?
- Individual language knowledge and preferences differ, which can strain communication and reduce clarity of intention. Rather than using a seperate application to translate correspondence, our app will translate it in real-time within the chatroom. This will allow for a seemless communication experience. 

Why should you care about our product?
- This product will support communication between different groups of people with disparate backgrounds. 

### Scope (In/Out)
- IN 
	- The app will signup users and once joined they can enter a chatroom.
	- The app lets users chat in their speicific language preferance. 
	- The app will authenticate users during login.

- OUT 
	- The app will not retain any messages after a chatroom is left. 
	- Direct Messaging

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
 - To ensure user information and privacy, the app will utilize AWS Cognito to authenticate users. The app will also not retain any chat logs after a user has disconnected from the chatroom. 
 #### Reliability
 - Utilizing AWS cloud services to maintain application's availabilty to users. 
#### Scalability
 - Adopting serverless applicaion model using AWS cloud and other services will support on-demand capacity provisioning. 

### Architecture
![Architecture](https://github.com/SlateAppProject/Slate/blob/dev/docs/arc.jpg)

### Data Flow
A user visits our web app, and signs up for our product(don't worry, it's free!). The user registration requirements are: alias, password, email, and phone number. Once registered, a user can now log in with their credentials. After login is authenticated, a user can choose a language specific chatroom to join or simply join the global chat to have messages translated into their language preference. Once a user clicks the chatroom and joins, they can start typing in their preferred language and it will be translated according to the logic of the chat room they are present in. To exit the user simply has to navigate away from the page and they are removed from the chatroom.

### AWS Assets:
 - API Gateway WebSockets
 - Cognito
 - Lambda
 - Translate
 - <strike>Redis</strike>
 - <strike>CodeStar</strike>
 - Dynamo DB
 - Amplify
 - S3
 - CloudWatch
 
### Other Technologies & Languages
 - JS
 - VUE
   - Vue Router
   - Vuex
   - Vue Native Websocket
 - HTML/CSS
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

