import routes from '~/Config/routes';
import Cinema from '~/Pages/Cinema';
import Contact from '~/Pages/Contact';
import Film from '~/Pages/Film';
import Home from '~/Pages/Home';
import News from '~/Pages/News';
import Tickets from '~/Pages/Tickets';

const PublicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.buyticket, component: Tickets },
    { path: routes.film, component: Film },
    { path: routes.contact, component: Contact },
    { path: routes.news, component: News },
    { path: routes.cinema, component: Cinema },
];

export { PublicRoutes };
