import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import Login from "./pages/Login/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                {/* <Nav /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
