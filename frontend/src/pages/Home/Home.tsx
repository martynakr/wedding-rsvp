import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import lotus from "../../assets/lotus-no-stem.png";
import CeremonyDetails from "../../sections/CeremonyDetails/CeremonyDetails";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Accommodation from "../../sections/Accommodation/Accommodation";
import { translation } from "../../helpers/translation";
import leMeridien from "../../assets/le-meridien.jpg";
import haadson from "../../assets/haadson.jpg";

const homeText = {
    headerHeading: {
        PL: "Martyna i Pierre biorą ślub",
        EN: "Pierre and Martyna are getting married",
    },
    headerDescription: {
        PL: "A wy jesteście zaproszeni!",
        EN: "Lucky you, you're invited",
    },
    detailsHeading: {
        PL: "Plan uroczystości",
        EN: "Celebration Timeline",
    },

    details: {
        PL: [
            {
                time: "16:00",
                event: "Przybycie na miejsce ceremonii",
            },
            {
                time: "16:15",
                event: "Rozpoczęcie ceremonii",
            },
            {
                time: "16:50",
                event: "Składanie życzeń",
            },
            {
                time: "17:00",
                event: "Zdjęcia grupowe",
            },
            {
                time: "18:30",
                event: "Rozpoczęcie przyjęcia",
            },
            {
                time: "22:00",
                event: "Zakończenie przyjęcia",
            },
        ],
        EN: [
            { time: "4.00pm", event: "Arrive at the ceremony lawn" },
            { time: "4.15pm", event: "Ceremony starts" },
            { time: "4.50pm", event: "Guests congratulations" },
            { time: "5.00pm", event: "Group photos" },
            { time: "6.30pm", event: "Reception starts" },
            { time: "10.00pm", event: "Reception ends" },
        ],
    },
    accommodationHeading: {
        PL: "Jak dotrzeć na miejsce i noclegi",
        EN: "Getting There And Accommodation",
    },
    accommodationSub1: {
        PL: "Najbliższe Lotnisko - Phuket International Airport (HKT)",
        EN: "Closest Airport - Phuket International Airport (HKT)",
    },

    accommodationSub2: {
        PL: "Noclegi",
        EN: "Accommodation",
    },
    accommodationBtnTxt: {
        PL: "Zarezerwuj transport",
        EN: "Book transport",
    },
    hotelData: {
        EN: [
            {
                imgSrc: leMeridien,
                hotelName: "Le Meridien Khao Lak Resort & SPA",
                link: "https://travefy.com/website/martynapierre-ywtar32qcuhh3q2",
                description:
                    "This is the hotel the wedding is taking place at. You can book with our wedding planner to receive a discounted rate. To do so, click the button below, it will take you to a landing page with a link to a booking form.",
                btnTxt: "Book here",
            },

            {
                imgSrc: haadson,
                hotelName: "Haadson Resort",
                link: "https://booking.com/hotel/th/haadson-resort-khaolak-phangnga.en-gb.html?label=haadson-resort-khaolak-phangnga-NcezixeU6mTFiHMAUJ0lrQS392948301814%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395231936458%3Akwd-11499478868%3Alp9071436%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXORK0YJiVoOxcWODxYDaAA&sid=bee37827a3895e13cf39b03ecfb0132d&gclid=Cj0KCQjwv-LOBhCdARIsAM5hdKdglNd26KP3XmoI-UU44XsmN6dSAMUCU9pCIp26iLu_WsPBR_tDlekaAhJ6EALw_wcB&aid=311984&ucfs=1&arphpl=1&dest_id=-3236318&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=bb753980d006089a&srepoch=1775808646&from=searchresults",
                description:
                    "If you prefer to stay somewhere else, this is a hotel  located a 2 min drive/27 min walk away from the wedding resort. It has beach access and good ratings.",
                btnTxt: "Book here",
            },
        ],
        PL: [
            {
                imgSrc: leMeridien,
                hotelName: "Le Meridien Khao Lak Resort & SPA",
                link: "https://travefy.com/website/martynapierre-ywtar32qcuhh3q2",
                description:
                    "To jest hotel, w którym odbędzie się wesele. Możesz dokonać rezerwacji przez naszą organizatorkę ślubu, aby otrzymać zniżkową cenę. W tym celu kliknij przycisk poniżej - zostaniesz przeniesiony na stronę z linkiem do formularza rezerwacji.",
                btnTxt: "Zarezerwuj tutaj",
            },
            {
                imgSrc: haadson,
                hotelName: "Haadson Resort",
                link: "https://booking.com/hotel/th/haadson-resort-khaolak-phangnga.en-gb.html?label=haadson-resort-khaolak-phangnga-NcezixeU6mTFiHMAUJ0lrQS392948301814%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395231936458%3Akwd-11499478868%3Alp9071436%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXORK0YJiVoOxcWODxYDaAA&sid=bee37827a3895e13cf39b03ecfb0132d&gclid=Cj0KCQjwv-LOBhCdARIsAM5hdKdglNd26KP3XmoI-UU44XsmN6dSAMUCU9pCIp26iLu_WsPBR_tDlekaAhJ6EALw_wcB&aid=311984&ucfs=1&arphpl=1&dest_id=-3236318&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=bb753980d006089a&srepoch=1775808646&from=searchresults",
                description:
                    "Jeśli wolisz zatrzymać się w innym miejscu, ten hotel znajduje się 2 minuty jazdy (lub 27 minut spacerem) od miejsca wesela. Oferuje dostęp do plaży i ma bardzo dobre opinie.",
                btnTxt: "Zarezerwuj tutaj",
            },
        ],
    },
    accommodationDesc1: {
        EN: "Khao Lak is about one hour drive from the airport. You can book a private driver using the button below, or by emailing our wedding planner at info@thaitheknotweddings.com.au",
        PL: "Khao Lak znajduje się około godzinę jazdy od lotniska. Możesz zarezerwować prywatnego kierowcę, korzystając z przycisku poniżej.",
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
                            {currentUser?.language === "EN"
                                ? "RSVP"
                                : "Potwierdź przybycie"}
                        </Button>
                    </div>
                </section>

                <CeremonyDetails
                    details={translation(
                        currentUser?.language,
                        "details",
                        homeText,
                    )}
                    headingTxt={translation(
                        currentUser?.language,
                        "detailsHeading",
                        homeText,
                    )}
                />
                <Accommodation
                    hotelData={translation(
                        currentUser?.language,
                        "hotelData",
                        homeText,
                    )}
                    headingTxt={translation(
                        currentUser?.language,
                        "accommodationHeading",
                        homeText,
                    )}
                    subHeading1={translation(
                        currentUser?.language,
                        "accommodationSub1",
                        homeText,
                    )}
                    desc1={translation(
                        currentUser?.language,
                        "accommodationDesc1",
                        homeText,
                    )}
                    subHeading2={translation(
                        currentUser?.language,
                        "accommodationSub2",
                        homeText,
                    )}
                    btnTxt={translation(
                        currentUser?.language,
                        "accommodationBtnTxt",
                        homeText,
                    )}
                />
            </main>
        </>
    );
};

export default Home;
