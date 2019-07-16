# Git workflow

### Branches:

`git status` to check status of files for staging, of which branch you are on

`git checkout NAME_OF_BRANCH` switches to branch

`git checkout -b NAME_OF_NEW_BRANCH` create new branch and switch to it

### Committing:

git status before hand is recommended

`git add FILE_NAME` adding file name to stage

`git add .` add ALL upstaged files

`git commit -m "YOUR_COMMIT_MESSAGE_HERE"` commit changes

`git push` will push changes to remote branch (if remote branch doesnt exist see bellow)

`git push -u origin NAME_OF_NEW_REMOTE_BRANCH` will create new remote branch and push to it

### Pull requests:

create pull request on github page, `master < your branch` and add reviewers

once 1 person approve, you will be able to merge to master on github page

### Merges

if you want latest details from master to your branch

commit and push your changes to your branch
 
`git checkout master` switch to master branch


# PurchaseOrder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

michal
