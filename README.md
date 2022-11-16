# react-app-simple-user-sticker-app

A Simple User Sticker Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to _transpile_ all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

Back end is implemented using [Node JS](https://nodejs.org/en/docs/), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the _Cloud_ version of [MongoDB](https://docs.mongodb.com/)
is used.

Docker[https://docs.docker.com/language/nodejs/build-images/] is used to containerize the application.

This is a _responsive web application_ for viewing in both Mobile and Desktop.

## Features

1. Code is rewritten with [React JS 17](https://reactjs.org/docs/getting-started.html) and [Node JS 18](https://nodejs.org/en/docs/)
2. Latest features of JavaScript i.e. ES6, ES7, ES8 is used
3. [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
4. ES8 `async/await` is used

<br/>

5. This is Simple Users Sticker Application
6. It is a Full Stack Application
7. All the users details are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This is a _free/ shared_ account on [Atlas](https://www.mongodb.com/cloud/atlas). **So Please use it wisely**

<br/>

8. Application uses _lazy loading_ feature
9. Application loaded with fixed number of users. When it is scrolled to the end it will load some more users until all the users listed in the databases are loaded.
10. Docker[https://docs.docker.com/language/nodejs/build-images/] is used to containerize the application.

<!---
<ul>
  <li> This is Simple set of Authentication APIs </li> 
  <li> All the common features like <strong>use creation, email validation, login, checking for authenticity of the user</strong> is implemented</li>
</ul>

- It is created using latest version of [Node JS 15](https://nodejs.org/docs/latest-v15.x/api/)

<ul>
 <li><b>Forget password</b> feature is implemented </li>
 <li><b>Reset password</b> as well as email id feature is added </li>
 <li>All the user details, email id, password is stored in a file <code>server/userlist.json</code>. <b>All the passwords are encrypted</b>.</li> 
</ul>

<ul>
  <li><i>Ready to use</i> REST APIs </li>
  <li>Can be consumed by <i>any</i> Frontend application framework that supports REST API</li>   
  <li>Can be used in conjunction with other popular JavaScript framework like <a href="https://reactjs.org/">ReactJS</a></li>  
</ul>

-->



## Installation

Clone the repository:

```bash
$ git clone https://github.com/anijitsahu/react-app-simple-user-sticker-app.git
```

Navigate inside the directory:

```bash
$ cd react-app-simple-user-sticker-app
```

Install using docker:

```bash
# build the image
$ sudo docker build --tag user-sticker-server .

# list all the images 
$ sudo docker images

# run the container (in detach mode and publish the corresponding port and with a name)
sudo docker run --detach --publish 3000:3000 --name user-sticker-app user-sticker-server

# list all container processes
sudo docker ps --all

# stop the container and remove it from the system (optional)
sudo docker stop user-sticker-app
sudo docker rm user-sticker-app

# delete the image itself (optional)
sudo docker rmi user-sticker-server
```


Open the web browser and type`http://localhost:3000` in the address bar to load the application

_tested with latest versions of <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Mozilla Firefox">[Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)_

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
