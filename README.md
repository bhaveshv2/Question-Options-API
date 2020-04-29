# Question-Options-API

Question and its Options API

For setiing up in your local system:

1. Install Dependencies viz. 
    1.1. npm install express
    1.2. npm install mongoose
    1.3. npm install nodemon
2. Start the server on : http://localhost:8000 using command "npm start"
3. For hitting API I have used Postman GUI, you can any front framework.


About API:
The API consist of Question and its options. It consist of functionality of CRD in questions and options both. 
The file structure is consist models, controllers and routes. 
There is question collection and option collection schemas are defined seperately and in question collection there is options array which keeps the ids of option associated with it. 
There is functionality of increase the votes dynamically.
