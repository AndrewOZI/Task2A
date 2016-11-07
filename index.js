import express from'express';

const app = express();

app.get('/', (req, res) => {
	var a = +(req.query.a);
	var b = +(req.query.b);
    if (isNaN(+req.query.a)){
    	a = 0;
    };
	if (isNaN(+req.query.b)){
    	b = 0;
    };
	var summ = a + b;
	res.json({
 	summ,
   });
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});