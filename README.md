# node-employee-crud
Employee CRUD Operations With Nodejs and MongoDB

# If you are using this application then follow from (STEP 6)
======================================================================================================

# Local Evironment setup (SCRATCH)

# Step 1 – Install Node.js
Hit the [Node.js website](http://nodejs.org) and click the big green Install button.

# Step 2 – Install Express Generator
Open cmd.exe, navigate to the folder.
Run **npm install -g express-generator**

# Step 3 – Create an Express Project
Run **express employee-crud**

# Step 4 – Add some required Dependencies
**"mongodb": "^1.4.4",**
**"monk": "^1.0.1",**
**"connect-flash": "~0.1.1"**

# Step 5 – Install required Dependencies
Run **npm install**

> ** npm install express-messages **

# Step 6 – Create data storage directory and start the app

> ** mkdir data **

> ** npm start **

# Step 7 – Install MongoDB
Hit [Mongodb website](http://mongodb.org/) and download Mongo. Click the downloads link in the main menu and snag the production release that fits your system.

# Step 8 – Run mongod
Open a new cmd.exe
Navigate to the folder where mongodb files stored, in most case ** (C:\Program Files\MongoDB\Server\3.2\bin) **

Run ** mongod --dbpath d:\node\employee-crud\data\ **

# Step 9 – Run mongo
Open a new cmd.exe
Navigate to the folder where mongodb files stored, in most case ** (C:\Program Files\MongoDB\Server\3.2\bin) **

Run commands: 
> ** mongo **
> ** use node-employee **
> ** db.employeecollection.insert({"title":"Dr.", "name":"Admin Admin", "email":"admin@gmail.com", "phone":"1234567890"}) **

# Step 10 – Start App again
Open a new cmd.exe
Run command ** npm start **


# Regards [Sam Mishra](mailto:samatwork14@gmail.com)