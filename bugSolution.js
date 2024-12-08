const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong!');
} 