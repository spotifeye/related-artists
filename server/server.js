const app = require('./app.js');

const PORT = process.env.PORT || 3002;

app.listen(PORT, console.log(`App listening on port ${PORT}!`));