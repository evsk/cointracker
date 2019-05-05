const app = require('./server');
const db = require('../database/index');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
