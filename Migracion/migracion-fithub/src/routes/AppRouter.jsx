import Home from "../pages/home/Home";
import Places from "../pages/places/Places";
import Promotions from "../pages/promotions/Promotions";
import Us from "../pages/us/Us";

export let AppRouter = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/us',
        element: <Us/>
    },
    {
        path: '/sedes',
        element: <Places/>
    },
    {
        path: '/promociones',
        element: <Promotions/>
    }
]