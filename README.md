# Tutoring Web Application

Team project for SJSU's CMPE-133 - Software Engineering II course.


## Dependencies and `npm` packages

For you to be able to run this website you need to install the `npm` packages necesarry for the website.

- mysql
- express
- passport

Or even better since they are already part of the modules in the project, you can only run the following command within the project's directory:

- `npm install`

## Database setup

This project makes use of a MySQL database. Please make sure that you have MySQL installed in
your computer with an active client.

- Login into your MySQL shell and run this command
    - `SOURCE tutoringSchema.sql`
- In the `mySqlConnector.js` file you will need to edit the login details to your own, this way the database is linked to the local database once the server is initiated.

## Running the Server

You need to have `NodeJS` installed if you do not. It can be found [here](https://nodejs.org/en/). Once it is installed, go to the directory where you have cloned this repo in your command line. Then do the command:

- `node app.js`

The server should start and display the port on which it is running. It can then be accessed at [http://localhost:8081](http://localhost:8081), assuming you did not change the port.