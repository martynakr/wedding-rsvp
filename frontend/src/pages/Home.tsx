import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Paper from "../components/Paper/Paper";
import lotus from "../assets/lotus-no-stem.png";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className="relative w-full flex justify-center py-20 overflow-hidden">
                    <img
                        src={lotus}
                        alt="lotus"
                        className="absolute w-[65%] md:w-[40%] z-0 pointer-events-none left-[-40%] lg:left-[-10%] bottom-[-5%]"
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
                        <Button variant="Primary" onClick={() => {}}>
                            RSVP
                        </Button>
                    </div>
                </section>

                <section className="bg-lotus-bg bg-cover bg-center opacity-80 w-full flex justify-center p-6">
                    <Paper>
                        <h3 className="text-4xl text-green-ink font-parisienne">
                            Day Schedule
                        </h3>

                        <div>
                            <p>
                                <span className="font-bold">4.00pm</span> -
                                Arrive at the Ceremony Lawn
                            </p>
                            <p>
                                <span className="font-bold">4.00pm</span> -
                                Arrive at the Ceremony Lawn
                            </p>
                            <p>
                                <span className="font-bold">4.00pm</span> -
                                Arrive at the Ceremony Lawn
                            </p>
                            <p>
                                <span className="font-bold">4.00pm</span> -
                                Arrive at the Ceremony Lawn
                            </p>
                        </div>
                    </Paper>
                </section>

                <section>
                    <h3 className="text-4xl text-green-ink font-monsieur">
                        Accommodation & Getting there
                    </h3>
                </section>
            </main>
        </>
    );
};

export default Home;
