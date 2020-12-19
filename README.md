# HotelManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




## Work Done 
## Date 18-12-2020
-Created New Project structure with installation of packages.
-created components like Hotel and Booking Components.
-created basic Header and Footer for the website.
-Implemented the Hotel component like it's 'displying' all the hotels list in tabular form by getting from hotel.json file.
-implemented the 'searching' features ex: you can search the hotels by city name as per requirement.

## Date 19-12-2020
- Changes done in Header and Footer
- In Hotels Detail page created a column called 'Action' if you click on view details, It will redirect
    to the Booking details page.
- Implemented Booking details page it contains details of hotel and details of member whoever
     booked  that perticular hotel. (Done by Component to Component Communication by Service)
- Created a Service for component interaction.
- Handled Exception, if bookings are not there then message will be displayed like 
    "No Bookings found".


## Installation required for Project
- Nodejs
- npm
- Visual studio code/ any other IDE
- npm install -g @angular/cli
- npm install bootstrap@3.3.7



## To Run Project

- Go to your project directory
- ng serve -o