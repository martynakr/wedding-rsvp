import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Paper from "../components/Paper/Paper";
import lotus from "../assets/lotus-no-stem.png";
import CeremonyDetails from "../sections/CeremonyDetails/CeremonyDetails";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <Header />
            <main>
                <section className="relative w-full flex justify-center py-20 overflow-hidden bg-lotus-cream">
                    <img
                        src={lotus}
                        alt="lotus"
                        className="absolute w-[65%] md:w-[40%] z-0 pointer-events-none left-[-40%] md:left-[-10%] bottom-[-5%]"
                    />
                    <img
                        src={lotus}
                        alt="lotus"
                        className="absolute md:right-[-10%] md:w-[40%] w-[65%] z-0 pointer-events-none transform scale-x-[-1] right-[-35%] bottom-[-5%]"
                    />
                    <div className="flex flex-col items-center justify-center text-center z-10 gap-3">
                        <h3 className="text-4xl text-green-ink font-parisienne">
                            When and where
                        </h3>
                        <p>Tuesday, the 2nd of March 2027</p>
                        <p>Le Meridien Khao Lak Resort & Spa</p>
                        <p>Thailand</p>
                        <Button
                            variant="Primary"
                            onClick={() => {
                                navigate("/rsvp");
                            }}
                        >
                            RSVP
                        </Button>
                    </div>
                </section>

                <CeremonyDetails />
                <section className="bg-lotus-pollen p-16 text-center">
                    <h3 className="text-4xl text-green-ink font-parisienne">
                        Accommodation & Getting there
                    </h3>
                </section>
            </main>
        </>
    );
};

export default Home;
