import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const ProtectedRoute = () => {
    const { data: currentInvite, isError, isLoading } = useAuth();

    if (isLoading) return <div>Loading...</div>;

    if (isError || !currentInvite) return <Navigate to="/login" replace />;
    return (
        <>
            <Nav language={currentInvite?.language} />
            <Outlet />
            <Footer language={currentInvite?.language} />
        </>
    );
};

export default ProtectedRoute;
