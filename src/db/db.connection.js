const mongoose= require('mongoose') 
const url = "mongodb://127.0.0.1:27017/mongoose-task";
// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
