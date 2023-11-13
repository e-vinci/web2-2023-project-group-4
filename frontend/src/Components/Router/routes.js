import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import AlgoGamePage from '../Pages/AlgoGamePage';
import ModuloGamePage from '../Pages/ModuloGamePage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/game/algo': AlgoGamePage,
  '/game/modulo': ModuloGamePage
};

export default routes;
