## Starting the app
1. Clone the respository in your local machine.
2. Go to the folder in which the project is located.
3. Run the command `npm install --legacy-peer-deps`, to avoid any problem that might arise from possible version mismatch between the npm packages used in the app.
4. Run the command npm run start.
5. The app will be up and running in your local machine.

## App Overview
This app can best be described as a small api that exposes the following endpoints:
- /api/auth/signup- for registring a new user.
- /api/auth/login- for authenticating an already existing user.
- /api/auth/me- for getting the current user.
- /api/books- GET request for getting all the books records. *requires authoriztion to access*
- /api/books/:id- GET request for accessing a specific record. *requires authoriztion to access*
- /api/books- POST request for creating a new record. *requires authoriztion to access*
- /api/books/:id- PUT request for updating a specific record. *requires authoriztion to access*
- /api/books/:id- DELETE request for deleting a specific record. *requires authoriztion to access*


## Technologies
- The api is built with Express js using Typescript.
- The data is stored in a MongoDB shared cluster. The in-app queries are managed using the `mongoose` ODM.
