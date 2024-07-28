# IFTT3225---TP2


  ## Exigences 

  - Authentification and encryption of user data
  - Create an API (Rest) to query the database with the essential CRUD features.


  ## Setting up the project after cloning

  *If you've just cloned the project, you can simply install the dependencies to get started :* <br>

  1. Install dependencies stored in package.json. The following command will create and add content in node_modules, make sure you are in the backend directory and use the console to type :<br>
  `npm install ` 

  2. Run your Node server with : <br>
  `npm run startAll` <br>



  ## Setting up the project for the first time

  0. Files : <br>
    *Create index.js* <br>
    *Create .env* <br>
    *Create .gitignore* <br>
    *Create src/* <br>


  1. Prepare dependencies 
  

    ### Prepare the Node.js dependencies :
      *In console, change directory to the app and prepare it for Node.js*  <br>
      `npm init -y `  <br>
      Will add package.json.  <br>


    ## FrontEnd Dependencies:

    ### Prepare the React dependencies :
      *In console, change directory to the app.* <br>
      `npm i vite` <br>
      Will allow for live viewing and refreshing of our react app. <br>

    ### Prepare the React dependencies :
      *In console, change directory to the app.* <br>
      `npm create vite@latest my-react-app --template react` <br>
      Will allow for better UI/UX experience and modularity. We are really just interested in setting up a react app rapidly. <br>


    ## Backend Dependencies:

    ### Prepare the Express.js dependencies : 
      *In console, change directory to the app and prepare it for Express.js* <br>
      `npm i express `  <br>
      Will add content in node_modules, package-lock.json and also update package.json. <br>

    ### Prepare the Mongoose dependencies : 
      *In console, change directory to the app.* <br>
      `npm i mongoose `  <br>
      Will add content in node_modules, package-lock.json and also update package.json. <br>

    ### Prepare the MongoDB dependencies : 
      *In console, change directory to the app.* <br>
      `npm i mongodb` <br>
      Will add content in node_modules, package-lock.json and also update package.json. <br>

    ### Prepare the mongoose-unique-validator dependencies :
      *In console, change directory to the app.* <br>
      `npm i mongoose-unique-validator` <br>
      Will enhance mongoose. <br>

    ### Prepare the bcrypt dependencies :
      *In console, change directory to the app.* <br>
      `npm i bcrypt` <br>
      Will allow encryption of data. <br>

    ### Prepare the concurrently dependencies :
      *In console, change directory to the app.* <br>
      `npm i concurrently` <br>
      Will allow better scripting in package.json <br>





  2. Development dependencies :  <br>
    *In console, change directory to the app.* <br>
    `npm i --save-dev dotenv nodemon`  <br>
    Will add Dotenv to manage environement variables.  <br>
    Will add Nodemon to refresh the server automatically while applying changes. <br>
    Will add content in node_modules, package-lock.json and also update package.json. <br>

  3. Prepare the .gitignore : <br>
    *In .gitignore, add the lines:* <br>
    `.env ` <br>
    `node_modules `  <br>
    If you need to install depedencies, use "npm -install", and the dependencies will be automatically installed via package.json <br>

  4. Scripts : <br>
    *In package.json, add the following lines in the script list:* <br>
    `"startAll": "concurrently \"npm run server\" \"npm run client\"",` <br>
    `"server": "nodemon backend/src/index.js",` <br>
    `"client": "vite frontend/src/"` <br>




  ## Ressources used :

  - https://www.youtube.com/watch?v=P6RZfI8KDYc&list=PL_cUvD4qzbkwjmjy-KjbieZ8J9cGwxZpC "playlist tutorial"
  - https://www.youtube.com/watch?v=_7UQPve99r4 "1h30 tutorial"
  - https://www.youtube.com/watch?v=fgTGADljAeg "30 mins tutorial"

