import config from '../config';

// Layouts
import { NoSidebar } from '../layouts';

// Pages
import Home from '../pages/Home';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: NoSidebar },
    { path: config.routes.login, component: Home, layout: null },
    { path: config.routes.test, component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
