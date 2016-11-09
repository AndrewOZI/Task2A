import express from'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2A', (req, res) => {
	var a = +(req.query.a);
	var b = +(req.query.b);
    if (isNaN(+req.query.a)){
    	a = 0;
    };
	if (isNaN(+req.query.b)){
      	b = 0;
    };
	const summ = a + b;
	res.send(summ.toString());
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});