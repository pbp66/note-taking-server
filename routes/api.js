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
            try {
                const data = await fs.readFile(dbPath, 'utf-8');
                const json = JSON.parse(data);
                notes = json.map(element => {
                    const tempNode = new Note(element.title, element.text)
                    tempNode.setID(element.id);
                    return tempNode;
                });
            } catch (err) {
                res.status(500).json(err);
                return;
            }
        }
        res.json(notes);
    })
    .post('/notes', async (req, res) => {
        const { title, text } = req.body;
        notes.push(new Note(title, text));
        res.json(notes);
        await fs.writeFile(dbPath, JSON.stringify(notes), {flag: "w"});
    })

    .delete('/notes/:id', async (req, res) => {
        const id = req.params.id;
        const filteredNotes = notes.filter(element => element.id !== id);
        res.json(filteredNotes);
        notes = filteredNotes;
        await fs.writeFile(dbPath, JSON.stringify(filteredNotes), {flag: "w"});
    })

export default router;