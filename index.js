const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res, next) => {
    res.send('Hello world!');
});

app.use(router);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});