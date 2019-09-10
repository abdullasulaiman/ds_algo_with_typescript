import * as express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello World Changed');
})

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})