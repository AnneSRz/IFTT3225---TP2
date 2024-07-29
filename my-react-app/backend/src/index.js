// dependencies
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
// routes
const userRoute = require('./routes/user.route');
const recipeRoute = require('./routes/recipe.route');
const categoryRoute = require('./routes/category.route');
const authenticationRoute = require('./routes/authentication.route');
// middleware
const responseLogger = require('./middleware/res_logger.middleware');
const { authenticateToken } = require('./middleware/authenticator.middleware');

dotenv.config();
//
//npm 
//
//
const corsOptions = {
  origin: true, // all addresses for now
  optionsSuccessStatus: 200
};
//
const app = express();
app.use(cors(corsOptions));
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
app.use('/auth', authenticationRoute );
app.use('/api/user',authenticateToken, userRoute);
app.use('/api/recipe',authenticateToken, recipeRoute);
app.use('/api/category', categoryRoute);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
