import Paper from "../../components/Paper/Paper";

interface Detail {
    time: string;
    event: string;
}

interface CeremonyDetailsProps {
    details: Detail[];
    headingTxt: string;
}
const CeremonyDetails = ({ details, headingTxt }: CeremonyDetailsProps) => {
    return (
        <section
            className="bg-lotus-bg bg-cover bg-center opacity-80 w-full flex justify-center p-16 lg:px-62"
            id="celebration-timeline"
        >
            <Paper>
                <h3 className="text-4xl text-green-ink font-parisienne">
                    {headingTxt}
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
