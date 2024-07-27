// dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
// routes
const userRoute = require('./routes/user.route');
const recipeRoute = require('./routes/recipe.route');
const categoryRoute = require('./routes/category.route');
// middleware
const responseLogger = require('./middleware/res_logger.middleware');

dotenv.config();
//
//npm 
//
//
const app = express();
const port = process.env.PORT || "3000";

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error('Connection error:', error));
db.once('open', () => console.log('Connected to the Database.'));

// Middleware
app.use(express.json()); // Parse JSON bodies for API requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Middleware
app.use(responseLogger); // will print the return values in the console

// Routers
app.use('/api/user', userRoute);
app.use('/api/recipe', recipeRoute);
app.use('/api/category', categoryRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
