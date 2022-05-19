"use strict";

const express = require("express");
const cors = require("cors");
const config = require("./config");
const contactRoutes = require("./routes/contact-routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", contactRoutes.routes);

/// app.get('/', (req, res) => {
//     res.status(200).send(`Hello from the server side.`);
// });

// app.post('/api/v1/contact', (req, res)=>{
//     console.log(req.body);
//     res.send('done');
// })

/// app.listen(config.port, ()=> {
//     console.log(`The app is listening on port ${config.port}`)
// })
app.listen(process.env.port || 3000);
