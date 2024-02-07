import { createBrowserRouter } from "react-router-dom";
import { Layout }              from "./components/layout";

//pages
import { Home }                from "./pages/home";
import {History}               from './pages/history'
import { Characters }          from "./pages/characters";
import { Inspiration }         from "./pages/inspiration";
import { News }                from "./pages/news";


export const router = createBrowserRouter(

    [

        {
            element: <Layout/>,
            children:[
                {
                    path   : '/',
                    element: <Home/>
                },
                {
                    path   :'/history',
                    element:<History/>
                },
                {
                    path   :'/characters',
                    element: <Characters/>
                },
                {
                    path   :'/inspirations',
                    element: <Inspiration/>
                },
                {
                    path   :'/news',
                    element: <News/>
                }
            ]
        }

    ]
)