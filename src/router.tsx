import { createBrowserRouter } from "react-router-dom";
import Categories from "./pages/Categories";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Categories/>
    }
])