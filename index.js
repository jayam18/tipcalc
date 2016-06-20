const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
  console.log('server is listening');
});

app.get('/tipcalc', function(req, res) {
    res.render('tipcalc');
});

app.post('/tipcalc', function(req, res) {
  const amount = req.body.amount * 1;
  const percent = req.body.percent;

  let result = 1;
  switch (percent) {
    case '5%':
      result = amount * 0.05;
      break;
    case '10%':
      result = amount * 0.10;
      break;
    case '15%':
      result = amount * 0.15;
      break;
    case '20%':
      result = amount * 0.20;
      break;
  }

  res.render('tipcalc', {amount,percent,result});
});
