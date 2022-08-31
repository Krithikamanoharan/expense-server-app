const express=require('express')
const dotenv = require("dotenv");
const dbConnect=require("./config/dbConnect");
const {registerUser} = require("./controllers/users/usersController");
const { errorHandler,notFound } = require('./middlewares/errorMiddleware');


const userRoute=require("./routes/users/usersRoute");

const app = express()

dotenv.config();
dbConnect();

//middleware
app.use(express.json());

//routes
app.use('/api/users',userRoute);

app.use(notFound);
app.use(errorHandler);



module.exports=app;