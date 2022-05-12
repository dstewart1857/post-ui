# Magic 8 Ball UI

A Wordle clone made with React

---

## Requirements

You will need a modern web browser, NodeJS, and NPM to run this project.

### Node

- #### Node installation on Windows

   Go to the [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

```bash
  $ sudo apt install nodejs
  $ sudo apt install npm
```

- #### Other Operating Systems
  
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

```bash
  $ node --version
  v18.1.0

  $ npm --version
  8.8.0
```

If you need to update `npm`, you can do so using `npm`! Cool right? After running the following command, after running relaunch your command line editor.

```bash
  $ npm install npm -g
```

---

## Install

    $ git clone https://gitlab.com/maximumsnow/wordle-react
    $ cd wordle-react
    $ npm install

## Running the project

```bash
  $ npm start
```

---

## Exercise

### 1. Connect the Magic 8 Ball API to the UI

This project contains a magic 8 ball UI. Edit the ./src/getAnswer.js file to fetch and return the answer from the Magic 8 Ball API you completed in an earlier exercise. 