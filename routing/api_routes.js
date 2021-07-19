const { json } = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {


    app.get('/api/notes', (req, res) => {
        console.log("notes request");

        let Notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        console.log("retrieved note" + json.stringify(Notes));

        res.json(Notes);
    });

    app.post('/api/notes', (req, res) => {
           const new_Note = req.body;

             new_Note.id = uuidv4();

             let Notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

             Notes.push(newNote);
             fs.writeFileSync('.db/db.json', JSON.stringify(Notes));

        res.json(data);
    });

    app.delete('/api/notes:id', (req, res) => { 

    })
}