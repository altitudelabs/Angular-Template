## Continuous Deployment Workflow ##

1. Set up two terminal windows, one for the client app and one for the server app.
2. The client app is where you will continuously update your codebase. You can run "grunt serve" on the client app terminal to continuously watch for any changes.
3. Once you are ready to deploy (with minified code), run "grunt --force" on the client app terminal. This will create a dist folder in your server app.
4. If you want to run your deploy code, go to the terminal window that has server app and run this in your terminal: $NODE_ENV=production nodemon app.js
5. The ideal workflow will be to initially run "grunt serve" on your client app terminal and run "nodemon app.js" in your server app terminal. Changes you make in your client app will be continuously watched and can be viewed in the browser from the port specified in the server app.
6. Once you are ready to test in production, deploy the client app by running "grunt --force" and confirm the minification process happens. To see the deployed app, run "$NODE_ENV=production nodemon app.js" on the server app and go to the specified port to see the app in the browser.