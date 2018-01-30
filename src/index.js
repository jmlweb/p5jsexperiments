import express from 'express';
import path from 'path';

const app = express();

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, './clientjs')));
app.use(express.static(path.resolve(__dirname, './styles')));

app.get('/:key', (req, res) =>
  res.render('index', {
    exercise: {
      key: req.params.key,
    },
  }),
);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
