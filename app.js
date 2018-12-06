const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'Hello, world!'
    });
});

if (require.main === module) {
    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Listening on localhost:${PORT}`);
    })
}

module.exports = app;
