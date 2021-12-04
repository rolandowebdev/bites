import Outlet from '../views/pages/outlet';
import DetailOutlets from '../views/pages/detail';
import Home from '../views/pages/home';
import Food from '../views/pages/food';
import Favorite from '../views/pages/favorite';

const routes = {
	'/': Home,
	'/food': Food,
	'/outlet': Outlet,
	'/detail/:id': DetailOutlets,
	'/favorite': Favorite,
};

export default routes;
