const { Console } = require('console');
const { json } = require('express');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

module.exports = (app) => {
let notes = require("../db/db.json")

    app.get('/api/notes', (req, res) => {
        console.log("notes request");

        let Notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        console.log("retrieved note");

        res.json(Notes);
    });

    app.post('/api/notes', (req, res) => {
           let new_Note = req.body;

             new_Note.id = generateUniqueID();

             console.log("note taken");

             let Notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

             notes.push(new_Note);
             fs.writeFile('.db/db.json', JSON.stringify(notes,'\t'), err => {
                 if (err) throw err;
                 return true;
             });

             console.log("note written")

        res.json(Notes);
    });

    app.delete('/api/notes:id', (req, res) => { 
        let note_ID = request.params.id.toString();
        Console.log("ID", note_ID);

        let Notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        const keep_data = data.filter( )

        fs.writeFileSync('.db/db.json', JSON.stringify(keep_data));



    })
}