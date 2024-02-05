import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext/AuthProvider";

export default function ProtectedRoute() {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user === null) {
            navigate('/signin', {replace: true});
        } else {
            navigate('/dashboard', {replace: true});
        }
    }, [navigate, user]);

    return <Outlet />;
}