import Paper from "../../components/Paper/Paper";

const details = [
    {
        time: "4.00pm",
        event: "Arrive at the ceremony lawn",
    },
    {
        time: "4.20pm",
        event: "Ceremony starts",
    },
    {
        time: "4.50pm",
        event: "Guests congratulations",
    },

    {
        time: "5.00pm",
        event: "Group photos",
    },

    {
        time: "6.30pm",
        event: "Reception starts",
    },
    {
        time: "10.00pm",
        event: "Reception ends",
    },
    {
        time: "10.00pm",
        event: "Afterparty at Beach Club",
    },
    {
        time: "12.00am",
        event: "Afterparty ends",
    },
];

const CeremonyDetails = () => {
    return (
        <section className="bg-lotus-bg bg-cover bg-center opacity-80 w-full flex justify-center p-16">
            <Paper>
                <h3 className="text-4xl text-green-ink font-parisienne">
                    Celebration Timeline
                </h3>

                <div className="text-center">
                    {details.map((d, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center gap-4"
                        >
                            {idx !== 0 && (
                                <div className="h-[15px] w-[1px] bg-green-ink mt-3"></div>
                            )}
                            <div className="text-left">
                                <span className="font-bold text-green-ink">
                                    {d.time}
                                </span>
                                <span className="text-gray-700">
                                    {" "}
                                    - {d.event}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Paper>
        </section>
    );
};

export default CeremonyDetails;
