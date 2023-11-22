import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';

import AlgoGamePage from '../Pages/AlgoGamePage';
import ModuloGamePage from '../Pages/ModuloGamePage';
import GamePage from '../Pages/GamePage';

import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import Logout from '../Logout/Logout';

const routes = {
  '/': HomePage,
  '/game': GamePage,
	'/new': NewPage,
  '/game/algo': AlgoGamePage,
  '/game/modulo': ModuloGamePage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/logout': Logout,
};

export default routes;
