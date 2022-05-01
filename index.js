const express = require('express');
const app = express();
const envelopeRouter = require('./server/routes/envelope_routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/envelopes', envelopeRouter);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
