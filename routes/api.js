import { Router } from 'express';
import path from 'path';
import fs from 'fs/promises';

const router = Router();

const dbPath = path.resolve('./db/db.json');

router
    .get('/notes', (req, res) => {
        // read db.json contents
        fs.readFile(dbPath, 'utf-8', function (err, data) {
            if (err) {
                res.status(500).json(err);
                return;
            }
            const json = JSON.parse(data);
            // respond with the parsed array
            res.json(json);
        });
    })
    
    .post('/notes', (req, res) => {
        // Add new note to db.json
        console.log("API Route: POST /notes");
    })

    .delete('/notes', (req, res) => {
        // Add new note to db.json
        console.log("API Route: DELETE /notes");
    })



export default router;