import { createBrowserRouter } from "react-router-dom";
import { Layout }              from "./components/layout";

//pages
import { Home }  from "./pages/home";
import {History} from './pages/history'


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
                }
            ]
        }

    ]
)