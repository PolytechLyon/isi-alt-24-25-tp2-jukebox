import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';

const FILE_NAME = 'storage-data.json';

const storage = {
    data: [],
};

fs.readFile(FILE_NAME, 'utf8', (err, data) => {
    if (!err) {
        storage.data = JSON.parse(data);
    }
});

const app = express()
    .use(express.json())
    .use(cors());

app.get('/', (_, res: Response) => {
    res.send(storage.data);
});

app.post('/', (req: Request, res: Response) => {
    storage.data = req.body;
    const json = JSON.stringify(storage.data);
    fs.writeFile(FILE_NAME, json, 'utf8', () => res.send());
});

export default app;
