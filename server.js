require('dotenv').config();
const express = require('express');
const PORT = 6000;
const app = express();

const apiRoutes = require("./routes/apiRoutes");
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

module.exports = app;