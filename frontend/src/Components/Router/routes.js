import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LeaderboardPage from '../Pages/LeaderboardPage';

import AlgoGamePage from '../Pages/AlgoGamePage';
import AlgoIntroPage from '../Pages/AlgoIntroPage'
import ModuloGamePage from '../Pages/ModuloGamePage';
import ModuloIntroPage from '../Pages/ModuloIntroPage'
import GamePage from '../Pages/GamePage';

import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import Logout from '../Logout/Logout';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/leaderboardPage': LeaderboardPage,
	'/new': NewPage,
  '/game/algo': AlgoGamePage,
  '/game/modulo': ModuloGamePage,
  '/game/algoIntro': AlgoIntroPage,
  '/game/moduloIntro': ModuloIntroPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/logout': Logout,
};

export default routes;
