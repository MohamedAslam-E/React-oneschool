import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Students from "./views/students/Students";
import Staff from "./views/Staff";
import Library from "./views/Library";
import Accounts from "./views/Accounts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/students",
        element: <Students />,
    },
    {
        path: "/staff",
        element: <Staff />,
    },
    {
        path: "/library",
        element: <Library />,
    },
    {
        path: "/account",
        element: <Accounts />,
    },
]);

export default router;