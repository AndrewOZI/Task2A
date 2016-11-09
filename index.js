import express from'express';
<<<<<<< HEAD
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2A', (req, res) => {
=======

const app = express();

app.get('/', (req, res) => {
>>>>>>> 4d08028928d20edbed2219a3bf51ed9f205ae63e
	var a = +(req.query.a);
	var b = +(req.query.b);
    if (isNaN(+req.query.a)){
    	a = 0;
    };
	if (isNaN(+req.query.b)){
<<<<<<< HEAD
      	b = 0;
    };
	const summ = a + b;
	res.send(summ.toString());
=======
    	b = 0;
    };
	var summ = a + b;
	res.json({
 	summ,
   });
>>>>>>> 4d08028928d20edbed2219a3bf51ed9f205ae63e
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});