import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import lotus from "../../assets/lotus-no-stem.png";
import CeremonyDetails from "../../sections/CeremonyDetails/CeremonyDetails";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Accommodation from "../../sections/Accommodation/Accommodation";
import { translation } from "../../helpers/translation";

const homeText = {
    headerHeading: {
        PL: "Martyna i Pierre biorą ślub",
        EN: "Pierre and Martyna are getting married",
    },
    headerDescription: {
        PL: "A wy jestście zaproszeni!",
        EN: "Lucky you, you're invited",
    },
};

const Home = () => {
    const navigate = useNavigate();

    const { data: currentUser } = useAuth();
    return (
        <>
            <Header
                headingTxt={translation(
                    currentUser?.language,
                    "headerHeading",
                    homeText,
                )}
                desc={translation(
                    currentUser?.language,
                    "headerDescription",
                    homeText,
                )}
            />
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
                        <h3 className="text-4xl text-green-moss font-parisienne">
                            {currentUser?.language === "EN"
                                ? "When and where"
                                : "Kiedy i gdzie"}
                        </h3>
                        <p>
                            {currentUser?.language === "EN"
                                ? "Tuesday, the 2nd of March 2027"
                                : "Wtorek, 2 Marca 2027"}
                        </p>
                        <p>Le Meridien Khao Lak Resort & Spa</p>
                        <p>
                            {currentUser?.language === "EN"
                                ? "Thailand"
                                : "Tajlandia"}
                        </p>
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
                <Accommodation currentUser={currentUser} />
            </main>
        </>
    );
};

export default Home;
