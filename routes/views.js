import {Router as router} from "express";
import path from "path";

router
    .get('/notes', (req, res) => {
        res.sendFile(path.resolve('../public/notes.html'))
    })
    .get('*', (req, res) => {
        res.sendFile(path.resolve("../public/index.html"))
    });

export default router;