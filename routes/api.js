import { Router } from 'express';
import path from 'path';
import fs from 'fs/promises';
import Note from "../lib/note.js";

const router = Router();
const dbPath = path.resolve('./db/db.json'); 
let notes = [];

router
    .get('/notes', async (req, res) => {
        // Check if notes array is loaded. Load it if it isn't
        if (notes.length === 0) {
            console.log("Loadings notes from file...");
            await fs.readFile(dbPath, 'utf-8', function (err, data) {
                if (err) {
                    res.status(500).json(err);
                    return;
                }
                console.log(`Data: ${data}`);
                const json = JSON.parse(data);
                console.log(`JSON: ${json}`);
                notes = json.map(element => {
                    const tempNode = new Note(element.title, element.text)
                    tempNode.setID(element.id);
                    return tempNode;
                });
            });
        }
        console.log(notes);
        res.json(JSON.stringify(notes));
    })
    .post('/notes', async (req, res) => {
        const { title, text } = req.body;
        notes.push(new Note(title, text));
        await fs.writeFile(dbPath, JSON.stringify(notes), {flag: "w"});
    })

    .delete('/notes', (req, res) => {
        // Add new note to db.json
        console.log("API Route: DELETE /notes");
    })

export default router;