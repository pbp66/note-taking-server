import express from "express";
import fs from 'fs/promises';
import path from 'path';
import routes from './routes/index.js';

const dbPath = path.resolve('./db/db.json'); 

// Generate db if it does not exist:
try {
    const fileStats = await fs.lstat(dbPath);
} catch (err) {
    if (err.code === "ENOENT") {
        const { dir } = path.parse(dbPath);
        await fs.mkdir(dir, {recursive: true});
        await fs.open(dbPath, 'w');
        console.log(`Created database: ${dbPath}`);
    } else {
        console.log(`Caught Error: ${err.code}\nFull error log:`);
        console.log(err);
    }
}

const app = express();
const PORT = process.env.PORT || 3000

app
    .use(express.static('public'))
    .use(express.json())
    .use(routes);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
});