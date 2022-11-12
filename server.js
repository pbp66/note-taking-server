import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
});