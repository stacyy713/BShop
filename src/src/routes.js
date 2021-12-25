//По этим маршрутам может переходить только авторизованый пользователь
import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import BookPage from "./pages/BookPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

//По этим маршрутам может переходить любой пользователь
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    }
]
