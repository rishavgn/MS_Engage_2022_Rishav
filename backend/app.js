const express = require('express');
const app = express();
const errorMiddleware= require('./middleware/error')
const cookieParser = require("cookie-parser");
app.use(express.json());
//route imports
app.use(cookieParser());

const user = require('./Routes/UserRoute');
// const bookmark = require('./Routes/UserfavRoute');
app.use('/api/v1/',user);
// app.use('/api/v1/bookmark',bookmark);

//middleware for error
app.use(errorMiddleware);
module.exports = app;
// app is exported to ierver.js