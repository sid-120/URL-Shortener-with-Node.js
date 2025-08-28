# URL-Shortener-with-Node.js

## A fully functional basic project written in JavaScript.

This project is a basic project that was built with these features

- This project is built using Basic Node.js, Express.js, and MongoDB connected to the local machine(client)
- This project is a basic practice project that can be useful in college project assignments.
- This project included Server side rendering With EJS(Embedded JavaScript) and Node.js
- This project keeps track of the number of clicks/searches using a short URL.

## How to tweak this project for your own use

Since this is a basic project, I'd encourage you to clone and rename this project to use your own purposes.

## How to run this project.

- Run the program using the command `npm start` in the terminal.
- Go to your favorite browser and type `http://localhost:8001/signup`.
- Fill all the fields and sign up; it redirects to the login page.
- Enter all the fields (Email and password) and Login, it will redirect to the URL-Shortener home page.
- Enter your original URL and click on the `Generate` button.
- It generates the link, and copy the link.
- Enter it into your browser, and it redirects to the original website, which means your project of generating a short URL is done.
- Now you come to link `http://localhost:8001/`. You will find a table that shows the details of your activity.

- > **_Don't start with `http://localhost:8001/` it redirects to Login page before Sign up._**

## To see Users and URL details

- Open a new terminal, type the command `mongosh` MongoDB starts locally.
- Run the command `show dbs` to list of databases as output.
- You switch the database `test` to `your database name`, which you mentioned in the `index.js` file. Example: `"mongodb://localhost:27017/short-url"` where `short-url` is a database name.
- Now run the command `show collections` to list of collections as output.
- Run the command `db.users.find({})` to see the all users details.
- Run the command `db.urls.find({})` to see the all urls details.

## Find a bug?

If you found an issue or would like to submit on improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR(Pull Request) with a fix, reference the issue you created.

I would like to encourage to contribute UX/UI for this project.

**_This project is still ongoing.._**
