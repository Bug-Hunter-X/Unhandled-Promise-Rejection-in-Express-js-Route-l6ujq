const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling missing here
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Something went wrong');
}