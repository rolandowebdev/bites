import Outlet from '../views/pages/outlet';
import DetailOutlets from '../views/pages/detail';
import Home from '../views/pages/home';
import Food from '../views/pages/food';
import Favorite from '../views/pages/favorite';
import NotFound from '../views/pages/notfound';

const routes = {
	'/': Home,
	'/food': Food,
	'/outlet': Outlet,
	'/detail/:id': DetailOutlets,
	'/favorite': Favorite,
	'/404': NotFound,
};

export default routes;
