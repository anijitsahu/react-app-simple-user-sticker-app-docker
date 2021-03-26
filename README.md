# react-app-simple-user-sticker-app
A Simple User Sticker Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).  

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/). 

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to *transpile* all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

Back end is implemented using [Node JS](https://nodejs.org/en/docs/), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the *Cloud* version of [MongoDB](https://docs.mongodb.com/)
is used.

This is a *responsive web application* for viewing in both Mobile and Desktop.


## Features
- Code is rewritten with [React JS 17](https://reactjs.org/docs/getting-started.html) and [Node JS 15](https://nodejs.org/en/docs/)
- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
- ES8 `async/await` is used

<br/>

- This is Simple Users Sticker Application
- It is a Full Stack Application
- All the users details are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This is a *free/ shared* account on [Atlas](https://www.mongodb.com/cloud/atlas). **So Please use it wisely**

<br/>

- Application uses *lazy loading* feature
- Application loaded with fixed number of users. When it is scrolled to the end it will load some more users until all the users listed in the databases are loaded.


## Installation

Clone the repository:
```
git clone https://github.com/anijitsahu/react-app-simple-user-sticker-app.git
```
Navigate inside the directory: 
```
cd react-app-simple-user-sticker-app
```
Install all the necessary dependecies: 
```
npm install
``` 
Run the server: 
```
npm run server
```
Open the web browser and type`http://localhost:3000` in the address bar to load the application 
 
*tested with <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome 89](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">[Mozilla Firefox 86](https://www.mozilla.org/en-US/firefox/new/)*  

## Screenshots

Some screens of the application is given below for better understanding. 

Desktop as well as Mobile version of the screenshots are given side by side.

<p> Initial screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="initial screen"/>
 <img src="screenshots/mobile 1.png" width="230px" title="initial screen"/> 
</p>
 
 <p> After scrolling to the bottom <br/> 
 <img src="screenshots/desktop 2.png" width="590px" title="After scrolling to the bottom  screen"/>
 <img src="screenshots/mobile 2.png" width="230px" title="After scrolling to the bottom  screen"/> 
</p>


