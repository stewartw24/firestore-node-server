'use strict';

const express = require('express');
const cors = require('cors');
const config = require('./config');
const contactRoutes = require('./routes/contact-routes');
const feedbackRoutes = require('./routes/feedback-routes');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'https://portfolio--charming-boba-83a35f.netlify.app',
    credentials: true,
  }),
);

app.use('/api', contactRoutes.routes);
app.use('/api', feedbackRoutes.routes);

app.listen(process.env.PORT || 3000);
