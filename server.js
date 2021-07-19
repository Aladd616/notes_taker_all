
const express = require('express');


const { v4: uuidv4 } = require('uuid');

const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routing/api_routes')(app);
require('./routing/html_routes')(app);




app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

