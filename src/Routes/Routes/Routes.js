import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagori from "../../Pages/Catagory/Catagori";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";


export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/' ,
                element:<Home></Home>
            },
            {
                path:'/catagory/:id' ,
                element:<Catagori></Catagori>
            },
            {
                path:'/news/:id',
                element:<News></News>
            }

        ]
    }


])