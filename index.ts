import express from 'express';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
  });
});

app.listen(port);
