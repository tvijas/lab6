const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
    })
);

// Routes
const errorRoutes = require('./routes/error');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

app.use('/user', userRoutes);
app.use('/', bookRoutes);
app.use('*', errorRoutes);

// Error Controller
const errorController = require('./controllers/error');

// Server
app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
