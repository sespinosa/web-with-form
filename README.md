# Web with Form
## Example of a basic web application using form authentication and a render engine.

## FAQ
  You can find the "Frequently Asked Questions" section in [FAQ.md](FAQ.md)

## Pre
  This documentation assumes ZERO knowledge about computers, i expect you use it for things like:
  - Check other people's instagram page, and then talk shit about them with your friends.
  - Trying to download movies but getting frustrated before you understand how to do it.
  - Watch netflix (the previous step is relevant here).
  - Using email.
  - Do video calls to help your mother/grandma use netflix or fixing something on her phone.

## Install instructions

To run this you need to install nodejs and git

- [nodejs](https://nodejs.org/en/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - [Windows](https://git-scm.com/download/windows)
  - [Linux](https://git-scm.com/download/linux)
  - [OSX](https://git-scm.com/download/mac)

Git allows you to clone the repository (get a copy on your computer), and send updates to the remote repository (this one hosted on github), this tool is intended for team development, so everyone can create branches, these are like different channels that allows different team members to work on a independent version of the code, when the modifications are done, you can merge those changes with the master branch (that´s the main branch).

### Cloning the project

1. First we open the command line:
   * `cmd` on windows.
   * `terminal` on Linux or OSX (mac)

2. Then we go to the folder where we want to work (inside the terminal). for example:

    Windows:
    ```bash
    cd C:\Users\my_user\work_folder
    ```

    Linux:
    ```bash
    cd /home/my_user/work_folder
    ```
    Then we clone the actual project:

    ```bash
    git clone https://github.com/sespinosa/web-with-form
    ```
    This will create the `web-with-form` folder on the folder you entered in the previous step.

### Installing dependencies

For this step you need to have [nodejs](https://nodejs.org/en/) already installed (you must follow the instructions on the node page provided at the begining of this document).\
IF YOU ARE USING **WINDOWS**, maybe after installing it, [nodejs](https://nodejs.org/en/) is not accesible from the `cmd/terminal`, for simplicity's sake is recommended to reboot your computer ***in the case you are using windows***, in the case of using Linux you just need to restart the terminal if is not accesible (you probably don't need to do it because linux is a decent OS).

1. Be on the folder where you cloned the code.
    * Windows: use the `dir` command and you should see the `web-with-form` folder.
    * Linux/OSX: use the `ls` command and you should see the `web-with-form` folder.
2. Enter cloned folder:\
    This is the directory where the code lives, and you should enter the folder like this:
    ```basb
    cd web-with-form
    ```
3. Install dependencies using `npm`:
    `npm` comes with `node` (if you install `node`, you are also installing `npm`), `npm` means **"Node Package Manager"** and is for installing shit, this shit is called dependency, and this are "libraries", basically other software that you can use on your own software, this libraries (dependencies) are other people´s work that they decide to share so dum-dums like you don't waste time creating big functions to format dates or add zeros on the left to some numbers (and probably making it wrong too), that's pretty cool right?.

    To install run this command:
    ```bash
      npm install
    ```
    or if you are a lazy one:
    ```bash
    npm i
    ```

    This goes and reads the file `package.json` in the project, goes to the "dependencies" property (because package.json contains a JSON object, so it has properties), and goes and downloads that list of dependencies into the `node_modules` folder inside our project (that folder in automatically created when installing dependencies so don´t freak out if you can't find it before installing).

    Now that we have everything in place, we can run our project.

### Running the code

To run the code you just enter the folder of the project with the terminal and run:

```bash
node index.js
```
***this is ->literally<- running the index.js file directly***

# BUT

If you want to run it like a pro, you should use `npm tasks`, it does the same because it is just a alias, the definition is located in the `package.json` file under the `scripts` property.\
In the task list you can find 3 previously created tasks:
 - start
 - start-nodemon
 - test

### You should run a task like this:

```bash
npm run <task>
```
like
```bash
npm run start-nodemon
```

all the tasks should be run using the `run` parameters, except `start`, npm allows you to run it directly because npm also wants you to be lazy, like:

```bash
npm start
```
This will translate to `npm run start`

## npm tasks

 **start**: This is pretty standard, generally this is the one that the creator of a project added to being able to just run our application, in this case is:

  ```bash
  node .
  ```
this is the same as

```bash
node index.js
```

because `node` looks for "index.js" when the name if not specified (defaults to `index.js`).

**start-nodemon**: I created this one to run the project using `nodemon`, this autorestarts the application in case the code is modified, so you don't need to do it manually, ***I highly recommend to use this while you are making changes**, you still need to refresh your browser when changes are made, the browser can't know if there's a change.

***I expect to add a browser autoreload feature in the future so you can be even more lazy than now***

**test**: This is supposed to run tests (yes, you can have automatic tests that run and tell you if you broke something), but i haven't added any yet.

The objective of this project is to serve as a introduction to web development,
and allow you to see in action basic concepts like:

 - Webserver.
 - Endpoints.
 - Sessions.
 - Cookies.
 - Login lifecycle.
 - HTML rendering using a engine (pug).

I avoided any need for a persistance layer (database) and i mocked some data to show it.

### TLRD;

This code runs a web page where you need to login and you can see a page with a link, that link gives you a list of links of movie/series information.

This implementation is basic, doesn´t use stuff like databases to store data, i´m storing that data directly in the code so you can see it clearly.


Related documentation:
 - [Pug](https://pugjs.org/)
 - [Express](https://expressjs.com/)
 - [Passport](http://www.passportjs.org/)
 - [Passport-local](http://www.passportjs.org/packages/passport-local/)
 - [Express Cookie Parser](https://github.com/expressjs/cookie-parser)
 - [Express Body Parser](https://github.com/expressjs/body-parser)

***This is not intented for real world use, probably it doesn´t have a lot of nasty bugs, but i literally tested it for 2 minutes***

# Directory Structure

The entrypoint (The file that you need to execute to start the application) is `./index.js`, this file loads all the libraries and sets the endpoints and does all the configuration.

If you are asking yourself, man, what's the deal with that `./` thing?

`./` it's a relative path pointing to the current folder, in simple terms means ***on the folder i actually standing***.

In computers you probably will be in front of things like that all the time, so just to be clear:

  * `.` means "here"
  * `/` is the separator between folders

So if i type `./index.js` it means ***"The index file in my current folder"***
Also this can get a little more tricky like: `node ./someFolder/otherFolder/my_code.js`, and this means ***"from the folder i'm standing, go to 'someFolder' and inside that one go to 'otherFolder' and inside that, you will find a file called 'my_code.js', ok, cool, now run it with node, thx"***

I can type and type a lot about how to use a computer but i think that explanation covers what we need right now.

So, the file structure of this project is this:

```bash
web-with-form
 ├── README.md
 ├── index.js
 ├── package.json
 ├─> public
 │   ├─> css
 │   │   └── style.css
 │   └─> img
 ├─> utils
 │   ├── films.js
 │   ├── getFilms.js
 │   └── users.js
 └─> views
     ├── index.pug
     ├── layout.pug
     ├── login.pug
     ├── stories.pug
     └── story.pug
```
***So let's dig in on what are those weird files and how are being used on this.***

***./index.js***: This is the file that get executed and calls all the other files, this contains configuration, application logic and authorization logic.

***./package.json***: Here we setup the project, here you can find information about the author of the project, tasks for `npm`, the dependency list (external things our software uses), licence, and more.

***./public***: This is the folder accesible publicly from the browser when the application is running, so here we put our stylesheets (CSS), our client side javascript (Code that runs on the browser), or images. This is the place that we use to put files that the browser can read directly.

***./public/css/style.css***: This is the global Stylesheet for this project, any changes that you need to do on how the site looks, should be done here, you can add new stylesheets if you want, but then you need to call them on the HTML, you can do that on the `./views/layout.pug` file.

***./utils***: This is the folder where you add utilitary code for some tasks, you can add everything to `./index.js` but that's really hard to maintain, looks horrible and my OCD gets crazy.

Also the idea is to separate the specific business model code from the general tasks code, so you can call this utilitary functions from anywhere in your project (the fancy term for this is ***Separation of concerns***).

***./utils/films.js***: This contains the movie/series information on JSON format, this is being exported as a variable (that's why it's a js file that is exporting a JSON object inside).

***./utils/getFilms***: This file contains the methods to access the film data, now only has 2 functions:
 - `byId`: This functions expects 1 parameter, this parameter is the id of the movie, you pass that and the function is goind to return a object with the information of that movie, like:
    ```json
        {
        "id": 6,
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "937,412",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True",
        "Images": [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ]
      }
    ```
    **It's easier to understand how to use this if you go to the `./index.js` file and check the line using the `getFilm.byId`** function.

  - `all`: This function returns all the movies on a array of objects (to make it simple, an array is just a list of things, in this case objects).

***./utils/users.js***: This file contains the users we need to use to log in, and the methods that `passport` (the authentication library) calls to get the users by id or by credentials (the username and password pair, it only will return if the username exist and the password is correct).

The current users created are:

| Username      | Password      |
| ------------- | ------------- |
| test1         | 123           |
| test2         | 123           |
| test3         | 123           |

  You can create/remove/update users on the `./utils/users.js` file.

***./views/***: This is the folder where you can find the view templates, this files contain `pug` specific syntax, this syntax allows to make files that produce `html` as output, but the cool thing is, you can use variables, do iterations (run something N ammount of times, changing the value of the variable, to create lists for example), interpolate text (create strings with embeded text from variables) and more, is pretty flexible and makes it a lot easier to read (compared to HTML).

Express grabs this pug file, and the parameters you are passing to it, and builds final HTML that is delivered to the client browser (the browser understand html not `pug`).

***`Pug` is pretty strict about indentation, this is the way `pug` knows what is supposed to be inside what (a fancier way to say this is: This is how you define hierarchy on `pug`)***

## I HIGHLY RECOMMEND TO TAKE A PEEK ON THE PUG DOCUMENTATION REFERENCED ON THE BEGINING OF THIS DOCUMENT.

***./views/index.pug***: This is the index view, is accesible on the `/` endpoint, this view (and all others) will call `layout.pug` and place themself inside the layout, this is how this file looks:

```
extends layout
block content
  div#index-wrapper
    h1 Hello, welcome to the page.
    div
      h2 Check this list of Movies and Series
      a(href="/stories") Here!
```

The `extends layout` line in the top is telling pug to place this view inside the `layout.pug` view, and the `block content` is declaring the block of code we want to put inside the layout, but because the block is called `content`, it will place the block on the `block content` part of the layout.

This works like this because `pug` supports multiple blocks, so we can pass multiple pieces of code to our layout, for example you can pass the body of the page, the header, and the footer if you need to, in a single file, like this:

```
extends layout
block header
  h1 this will show on top!, this is the header content
block content
  h1 This is a title
  p Some text
block footer
  p This should show in the bottom of the page, because in the layout this is declared at the bottom.
```
And the corresponding layout for this example should be something like this:

```
doctype html
html
  head
    title Example Title!
    link(rel='stylesheet', href='/path/to/my/css/style.css')
    script(type='text/javascript', src='/path/to/my/js/app.js')
  body
    block header
      h1 This is the content it will be shown if there's not header passed from the other view
    block content
      h2 This will be shown if there's no content block passed to this view.
    block footer
      h3 This where the footer is being shown, and this content will be displayed if there's no footer block defined in the view that is calling this one.
```

***./views/layout.pug***: Here is where all the things you will need on all page views needs to be placed, like CSS and client side javascript, this file looks like this:

```
doctype html
html
  head
    link(rel='stylesheet', href='/css/style.css')
  body
    block content
      h2 Someone forgot to pass the block here right?
```

So this is the skeleton of the application, everything gets loaded inside this on the `block` segment, in this case the block needs to be named `content`, if you are calling this layout (with extends) but you forgot to pass the `block content`, this view will default with the message (after the html render):

```html
<h2>Someone forgot to pass the block here right?</h2>
```

***./views/login.pug***: This where the login form is defined in pug syntax.

***./views/stories.pug***: Here we find the place where the list of movies/series is created dynamically, it iterates the list of movies and prints each title in a list of `hyperlinks` (dorks like to say `hyperlinks` instead of `links` like normal people do).

***./views/story.pug***: This is the view of a single movie/series, it recieves a single object that contains all the information of that movie/series and displays part of that information.

#### Remember, `pug` outputs html based on the pug files, html is static by itself, so it's the final form after is created, if you need to add some dynamic (programatic) functionality to your html page, use "Client Side Javascript", basically you go and put a js file in the `public` folder (so the browser can read it directly) and then call it from your view using a `script` tag.

I repeat, for more detailed information read the `pug` documentation, and also

## learning html helps a lot.


# Conclusion

Understanding web development can be hard if you don't know where to start, with this project at least you can see how some things are done and understand the basic authentication flow and page rendering process, web development can become ***a lot harder*** if you want to do more advanced stuff, but this is a good start.

I highly recommend to learn *Markdown* (This document is a product of that), it´s a special syntax that alows you to create rich text documentation and easy to share information with some style, also the repositories can display `markdown` files very nicely (like github, the repository site i use for this project).

Here you can find a CheatSheet to start creating documents in markdown:

[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)