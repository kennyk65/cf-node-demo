cf-node-demo
============

Extreme minimalist example of a Node.js application that can run on Cloud Foundry

Instructions Running Locally
============
- Install Node.js locally.
- Clone this project locally.
- Open a command prompt within this application's folder.  
- Run with: export PORT=1337; node app.js (or equivalent syntax on windows)
- Open a browser to http://localhost:1337

Instructions Running on Cloud Foundry
=========================
- Assuming you have a CF account, login and target your cloud.
- Change settings in the manifest.yml if you wish to.
- Open a command prompt within this application's folder.
- cf push
- (note that you do not have to set the PORT as you do when running locally)
- Cloud Foundry will tell you the URL

