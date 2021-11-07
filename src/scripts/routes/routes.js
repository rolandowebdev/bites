import Outlet from '../views/pages/outlet';
import DetailOutlets from '../views/pages/detail';
import Home from '../views/pages/home';
import Food from '../views/pages/food';

const routes = {
	'/': Home,
	'/food': Food,
	'/outlet': Outlet,
	'/detail/:id': DetailOutlets,
};

export default routes;
