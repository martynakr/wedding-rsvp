import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RSVP from "./pages/RSVP/RSVP";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/rsvp" element={<RSVP />} />
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
