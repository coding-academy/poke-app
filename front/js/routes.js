import home from './pages/home.js'
import about from './pages/about.js'
import poke from './pages/poke.js'

const routes = [
    {path: '/', component: home},
    {path: '/about', component: about},
    {path: '/poke', component: poke}
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;