import express from 'express';
import path from 'path';
import { getDirectories } from './utils';

const exercisesKeys = getDirectories(path.resolve(__dirname, './clientjs')).map(
  directory => path.parse(directory).name,
);

const app = express();

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, './clientjs')));
app.use(express.static(path.resolve(__dirname, './styles')));

app.get('/', (req, res) => res.redirect('/01'));

app.get('/:key', (req, res) =>
  res.render('index', {
    exercise: {
      key: req.params.key,
    },
    exercisesKeys,
  }),
);

app.listen(3000, () => {
  console.log('Example app listening on http://localhost:3000!');
});
