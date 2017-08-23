'use strict';
var admin = require("firebase-admin");
var fireBasic = require('./fireBaseScripts/fireBasics')
var serviceAccount = require("./Group28-169033730663.json");


//This structure contains the login references 
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://group28-7216f.firebaseio.com/"
});




//console.log(fireBasic.myDateTime());

console.log('Initializing Firebase');

//This line enables advanced logging for the firebase database
//Usually unnecessary, but use in the case where there are error connecting to the database
//admin.database.enableLogging(true);

//fireBasic is a script library that will be used for the basic functionality of manipulating the fireBase database
//the upload_food module takes (Firebase_reference, food_name, food_weight[Grams], food_calories, food_protein, food_fat, food_category) as args

fireBasic.upload_user(admin, 'Seb', 'Hello World');
fireBasic.upload_user(admin, 'Ben', 'How are you class?');


//This logs when uploads to the database are handled
console.log('**********************');
console.log('**Completed uploads**');
console.log('**********************');

//This writes all foods and statistics to the console
//fireBasic.get_foods(admin);

//Returns food categories and minimised entries
//ireBasic.get_food_categories(admin);
var array = new Array();
array[0] = 'test';
array = fireBasic.search_user(admin, fireBasic.startServer);
//console.log(write[0]);

