const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://swarajpanmand:oK46GmvipjLqaUY6@nodeexpress.mbjqsnc.mongodb.net/temp?retryWrites=true&w=majority&appName=NodeExpress');
        
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;