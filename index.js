const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
    const remoteAddress = req.connection.remoteAddress;
    const remotePort = req.connection.remotePort;
    const localAddress = req.connection.localAddress;
    const localPort = req.connection.localPort;

    res.send(`Hello World! Simple web server port:${localPort}, remote:${remoteAddress}, local:${localAddress}`);
});

app.listen(port, () => {
    console.log(`Sample app listening on port ${port}`);
});
