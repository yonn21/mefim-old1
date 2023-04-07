const express = require('express');
const app = express();

// Route

const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server is started at: http://localhost:${PORT}`);
});