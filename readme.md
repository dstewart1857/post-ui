# UI for the SetAssessment Back End

A Wordle clone made with React.

This is a modified version of the Magic 8 Ball UI done by Mike Snow

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

    $ git clone https://gitlab.com/dstewart1857/post-ui.git
    $ cd post-ui
    $ npm install

## Running the project

```bash
  $ npm start
```

---

## What this UI does

This project contains a modified version of the magic 8 ball UI. It has been modified to allow input for setting the tests in the test collection for the ReportContoller and then also getting the tests from that collection.

Note: If you are getting a CORS error you will need to enable CORS on your C# API. Here is a Microsoft Doc outlining the steps: [CORS with named policy and middleware](https://docs.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-6.0)
