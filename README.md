# BehnTestLogin

This is an app built in two different parts. The first part is a simple Angular app, where a user can visit, and log into (as this is for testing, no database is set up, the user info exists in the code). 

The second part is a BDD-driven automated testing suite. This is a node.js app set up using WebDriverIO, Cucumber, and Spec. Scenarios have also been tagged with `@Smoke` and `@Regression`, which should allow users to run a specifically tagged set of tests, if they choose.

There are 2 main folders to take note of:
* `client` - The Angular app
* `automation` - The WebDriverIO app

## Running the Angular app

To run the angular app, you will first need `node.js` and `npm` installed. With these installed, you can install the Angular CLI with the following command: `npm install @angular/cli`

After installing, navigate into the `client` folder, run `npm install` (to make sure all modules are downloaded) and serve the application using `ng serve`. This will run the app on http://localhost:4200.

## Running the WebDriverIO project

To run this project, you will first need to make sure the Angular app is up and running on http://localhost:4200.

Once running, navigate into the `automation` folder, and run `npx wdio run ./wdio.conf.ts`. This will open a Chrome window, will run through the tetss, and the Spec report will be available on the command line after the tests have completed.
