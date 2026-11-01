import AccommodationCard from "../../components/AccommodationCard/AccommodationCard";
import Button from "../../components/Button/Button";

interface HotelData {
    imgSrc: string;
    description: string;
    hotelName: string;
    link: string;
    btnTxt: string;
}
interface AccommodationProps {
    hotelData: HotelData[];
    headingTxt: string;
    subHeading1: string;
    desc1: string;
    subHeading2: string;
    btnTxt: string;
}

const Accommodation = ({
    hotelData,
    headingTxt,
    subHeading1,
    desc1,
    subHeading2,

    btnTxt,
}: AccommodationProps) => {
    return (
        <section
            className="bg-lotus-pollen p-16 text-center"
            id="accommodation-getting-there"
        >
            <h3 className="text-4xl text-green-ink font-parisienne mb-12">
                {headingTxt}
            </h3>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="text-2xl text-green-ink">{subHeading1}</h4>
                    <p>{desc1}</p>
                    <Button
                        variant="Secondary"
                        onClick={() =>
                            window.open(
                                "https://www.viator.com/en-AU/Khao-Lak-tours/Private-Drivers/d23786-g15-c32762",
                                "_blank",
                            )
                        }
                    >
                        {btnTxt}
                    </Button>
                </div>
                <div>
                    <h4 className="text-2xl text-green-ink p-4">
                        {subHeading2}
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
                                    btnTxt={h.btnTxt}
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
