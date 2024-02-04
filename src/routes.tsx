import { createBrowserRouter } from "react-router-dom";
import { Layout }              from "./components/layout";
import { Home }                from "./pages/home";
import {History}               from './pages/history'
import { Characters }          from "./pages/characters";


export const router = createBrowserRouter(

    [

        {
            element: <Layout/>,
            children:[
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path:'/history',
                    element:<History/>
                },
                {
                    path:'/characters',
                    element: <Characters/>
                }
            ]
        }

    ]
)