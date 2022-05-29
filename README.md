# Microsoft Engage 2022 Project

### Problem Statement
Demonstrate through your app the different kinds of algorithms that a web-streaming app (like Netflix) or an audio-streaming app (like Spotify) may use for their Recommendation Engine.

## Solution 
## Binge Play  :white_check_mark:
**A website which Recommends movies by analysing the sentiments of user**

## Overview
_The need to filter, prioritise, and efficiently transmit important information on the Internet, where the quantity of options is overwhelming, in order to ease the problem of information overload, which has created a potential problem for many Internet users. Recommender systems address this issue by looking through a large volume of dynamically created data to deliver personalised content and services to users._
_This Project helps to solve one of the domain in which there is huge user engagement through Recommendations provided to them by sentiments of the user for that particular movie_


# Installation and Environment Setup

## 1. Clone This Repo
  
     $ [https://github.com/rishavgn/MS_Engage_2022_Rishav/.git](https://github.com/rishavgn/MS_Engage_2022_Rishav.git)
  
  
## 2. Install packages
###     For Frontend setup
     
            1. open terminal and  move to the clients directory (cd clients)
            2. npm install
               
      
###     For Backend setup
            ```
             $ cd backend
             $ npm install
            ```
###    For Python setup for api 
             $ cd pymodel
             $ pip install virtualenv
             $ virtualenv env
             $ .\env\Scripts\activate
             $ pip install requirements.txt
             
###     Add dataset from google drive link provided 
          Add movies_similarity.csv file to pymodel befor running
          
          
# Running the Application Locally 
 (make sure you performed the above steps)

  ### For frontend   
       $ npm start
  ### For Backend
       $ nodemon index.js
   ### For python api
       $ python app.py
       make sure you activate the virtual envionment
                         

# Tech Stack Used

   ### Programming Language used
       Javascript
       Python
       
   ### Recommendation Engine
       Jupyter Notebook
       
   ### Frameworks and Libraries
       Reactjs
       Nodejs
       Expressjs
       JWT
       Bcrypt
       Redux
       
   ### Database 
        MongoDB
        
        
        
# Features And Working of Application

 | Description |    UI     |
 | ----------  | --------- |
 | User Registration page Enter the Credentials here  | --------- |

 | ----------- | ----------|
 | user Signin |        |
 |Enter your correct credentials or you will be notified with alert |      |
 
 # Recommendation Engine
   ### Based on collaborative Filtering (Item to Item based)
   _Collaborative filtering is a technique to predict user sentiments and find probable matches for them from a
   large set of informations and data.  takes into account that if user A and user B have a certain 
   sentiments for some data then they might have the same opinion for others item too._
        
   #### Using pearson corrleation
  _The Pearson correlation method that assigns -1/0/1 values, where 0 has no correlation, 1 has total
   positive correlation and -1 has total negative correlation.This is interpreted as follows: a correlation
   value of 0.7 between two variables would indicate that a significant and positive relationship 
   exists between the two. A positive correlation signifies that if variable A goes up, then B 
   will also go up, whereas if the value of the correlation is negative, then if A increases, B
   decreases._
       
   
 

