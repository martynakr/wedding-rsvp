import Button from "../Button/Button";

interface AccommodationCardProps {
    hotelName: string;
    description: string;
    link: string;
    imgSrc: string;
}

const AccommodationCard = ({
    hotelName,
    description,
    link,
    imgSrc,
}: AccommodationCardProps) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 text-left md:mx-24">
            <img
                src={imgSrc}
                alt="hotel image"
                className="w-full lg:w-92 h-auto "
            />
            <div className="flex flex-col  justify-center gap-6 lg:items-start">
                <h3 className="text-green-ink text-xl">{hotelName}</h3>
                <p>{description} </p>
                <Button
                    variant="Secondary"
                    onClick={() => window.open(link, "_blank")}
                >
                    Book here
                </Button>
            </div>
        </div>
    );
};

export default AccommodationCard;
