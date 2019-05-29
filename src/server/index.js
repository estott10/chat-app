require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');

const userController = require('./user_controller')

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    }).catch( err => console.log(err) );

// const {addUser} = userController;

app.post('/api/register', userController.addUser)

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})