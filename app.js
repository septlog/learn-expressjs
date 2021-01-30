const express = require('express');
const app = express();
const port = 3000;
app.get('/get', (req, res) => {
  // res.send('Hello World!');
  res.send('你好世界');
});

app.post('/post', (req, res) => {
  res.send('POST 请求');
});

app.put('/put', (req, res) => {
  res.send('收到 PUT 请求');
});

app.delete('/delete', (req, res) => {
  res.send('收到 DELETE 请求');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
