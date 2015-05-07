# Grunt'd

**Grunt'd**
*verb*

~ The process of adding Grunt.js Task Runner to a project


The goal of this repo is to expedite adding Grunt to any project that requires Front-End Development work.  This repo takes advantage of Javascripts `module.exports` functionality in order to compartmentalize and simplify the management of Grunt'd projects.

## Getting Setup

Start by copying this repo 

#### Updating `Project.js`

`project.js` contains all the project specific information for the project.  Provides _paths_ array with entries pointed to webroot, css, js and scss directories.

## Tasks

#### Installing Grunt & Dependant Packages
If you haven't installed Grunt CLI Tools then you'll first need to run the following command.

`$ npm install -g grunt-cli`

After Grunt CLI is installed navigate to the root directory of the project and execute: 

`npm install`

You should now be all ready to execute your grunt tasks.


###### Dev Tasks:
- `watch`
- `watch-css`

###### Build Tasks:
- `check`
- `dist`
- `js-dist`


TODO: 
- Create css-dist task
- Create watch-js task


