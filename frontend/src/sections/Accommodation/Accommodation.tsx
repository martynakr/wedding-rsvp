import type { InviteDetails } from "../../services/currentInvite";
import leMeridien from "../../assets/le-meridien.jpg";
import haadson from "../../assets/haadson.jpg";
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard";
import Button from "../../components/Button/Button";

const hotelData = [
    {
        imgSrc: leMeridien,
        hotelName: "Le Meridien Khao Lak Resort & SPA",
        link: "https://travefy.com/website/martynapierre-ywtar32qduxv2q2",
        description:
            "This is the hotel the wedding is taking place at. You can book with our wedding planner to receive a discounted rate. To do so, click the button below, it will take you to a landing page with a link to a booking form.",
    },

    {
        imgSrc: haadson,
        hotelName: "Haadson Resort",
        link: "https://booking.com/hotel/th/haadson-resort-khaolak-phangnga.en-gb.html?label=haadson-resort-khaolak-phangnga-NcezixeU6mTFiHMAUJ0lrQS392948301814%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2395231936458%3Akwd-11499478868%3Alp9071436%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXORK0YJiVoOxcWODxYDaAA&sid=bee37827a3895e13cf39b03ecfb0132d&gclid=Cj0KCQjwv-LOBhCdARIsAM5hdKdglNd26KP3XmoI-UU44XsmN6dSAMUCU9pCIp26iLu_WsPBR_tDlekaAhJ6EALw_wcB&aid=311984&ucfs=1&arphpl=1&dest_id=-3236318&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=bb753980d006089a&srepoch=1775808646&from=searchresults",
        description:
            "If you prefer to stay somewhere else, this is a hotel  located a 2 min drive/27 min walk away from the wedding resort. It has beach access and good ratings.",
    },
];
interface SectionProps {
    currentUser?: InviteDetails;
}

const Accommodation = ({ currentUser }: SectionProps) => {
    return (
        <section
            className="bg-lotus-pollen p-16 text-center"
            id="accommodation-getting-there"
        >
            <h3 className="text-4xl text-green-ink font-parisienne mb-12">
                {currentUser?.language === "EN"
                    ? "Accommodation and getting there"
                    : "Noclegi i jak dotrzeć na miejsce"}
            </h3>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="text-2xl text-green-ink">
                        Closest Airport: Phuket International Airport (HKT)
                    </h4>
                    <p>
                        Khao Lak is about one hour drive from the airport. You
                        can book a private driver using the button below.
                    </p>
                    <Button
                        variant="Secondary"
                        onClick={() =>
                            window.open(
                                "https://www.viator.com/en-AU/Khao-Lak-tours/Private-Drivers/d23786-g15-c32762",
                                "_blank",
                            )
                        }
                    >
                        Book airport transfers
                    </Button>
                </div>
                <div>
                    <h4 className="text-2xl text-green-ink p-4">
                        Accommodation
                    </h4>
                    <div className="flex flex-col gap-6">
                        {hotelData.map((h) => {
                            return (
                                <AccommodationCard
                                    key={h.hotelName}
                                    hotelName={h.hotelName}
                                    imgSrc={h.imgSrc}
                                    description={h.description}
                                    link={h.link}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
