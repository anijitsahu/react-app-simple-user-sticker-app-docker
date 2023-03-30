# react-app-simple-user-sticker-app-docker

A Simple User Sticker Application using [React JS](https://react.dev/learn), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).

This application uses **component oriented UI** creation paradigm. All components are written in [JSX](https://react.dev/learn/writing-markup-with-jsx) and ES6 style and are combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

[Babel](https://babeljs.io/docs/) is used to _transpile_ all [JSX](https://react.dev/learn/writing-markup-with-jsx) code to vanilla JavaScript. For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used.

This is a _responsive web application_ for viewing in both Mobile and Desktop.

Back end is implemented using [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). [Docker](https://docs.docker.com/language/nodejs/build-images/) is used to _containerize_ the application.


## Features

1. Code is rewritten with latest version of [React JS](https://react.dev/learn) and [Node JS](https://nodejs.org/en/docs/).
2. Latest features of JavaScript i.e. **ESNext** is used.

<br/>

5. This is Full Stack Simple Users Sticker Application.
6. All the users details are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This example uses a _free/ shared_ account. **So Please use it wisely**.

<br/>

7. Application uses _lazy loading_ feature i.e. application loaded with fixed number of users. When it is scrolled to the end it will load some more users until all the users listed in the databases are loaded.
8. [Docker](https://docs.docker.com/language/nodejs/build-images/) is used to **containerize** the application.

<br/>

9. [Winston](https://github.com/winstonjs/winston#readme) logging added.
10. API call is done using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
11. **Test Cases** are written using [Jest](https://jestjs.io/docs/getting-started) and [Supertest](https://www.npmjs.com/package/supertest).

<!---
<ul>
  <li> This is Simple set of Authentication APIs </li>
  <li> All the common features like <strong>use creation, email validation, login, checking for authenticity of the user</strong> is implemented</li>
</ul>



<ul>
 <li><b>Forget password</b> feature is implemented </li>
 <li><b>Reset password</b> as well as email id feature is added </li>
 <li>All the user details, email id, password is stored in a file <code>server/userlist.json</code>. <b>All the passwords are encrypted</b>.</li>
</ul>

-->

## Installation

Clone the repository:

```bash
$ git clone https://github.com/anijitsao/react-app-simple-user-sticker-app-docker.git
```

Navigate inside the directory:

```bash
$ cd react-app-simple-user-sticker-app-docker
```

Install using docker:

```bash
# build the image
$ sudo docker build --tag user-sticker-server .

# list all the images (optional)
$ sudo docker images

# run the container (in detach mode and publish the corresponding port, with a name)
$ sudo docker run --detach --publish 3000:3000 --name user-sticker-app user-sticker-server

# list all container processes
$ sudo docker ps --all

# stop the container and remove it from the system (optional)
$ sudo docker stop user-sticker-app
$ sudo docker rm user-sticker-app

# delete the image itself (optional)
$ sudo docker rmi user-sticker-server
```

Open the web browser and type`http://localhost:3000` in the address bar to load the application.

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
