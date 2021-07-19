const { Console } = require('console');
const express = require('express')


const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Displays all characters
app.get('/api/notes', (req, res) => {
    console.log("GET notes request");
    
}
));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

