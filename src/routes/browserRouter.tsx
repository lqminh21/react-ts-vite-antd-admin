import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import BaseLayout from "@/layouts/BaseLayout";

import SignIn from "@/pages/Authentications/SignIn";

import UnknowError from "@/pages/Errors/UnknowError";
import NotFound from "@/pages/Errors/NotFound";

import Dashboard from "@/pages/Dashboard";

import ExcelTable from "@/pages/CustomComponents/Tables/ExcelTable";

import {
    FileUnknownOutlined, 
} from '@ant-design/icons';


const privateRoutes = [
    {   
        path: '/',
        element: <ProtectedRoute />,
        errorElement: <UnknowError />,
        children: [
            {
                element: <BaseLayout />, 
                children: [
                    {
                        path: 'dashboard',
                        exact: true,
                        element: <Dashboard />, 
                    },
                    {
                        path: 'custom-components',
                        children: [
                            {
                                path: 'tables',
                                children: [
                                    {
                                        path: 'excel',
                                        exact: true,
                                        element: <ExcelTable />
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        key: '3',
                        icon: <FileUnknownOutlined />,
                        label: 'Nothing',
                        path: 'nothing',
                    },
                ]
            },

        ]
    },
    { path: "/signin", element: <SignIn /> },
    { path: "*", element: <NotFound /> }
];

export {
    privateRoutes
}