import Paper from "../Paper/Paper";

interface RSVPResponseProps {
    firstName: string;
    lastName: string;
    isAttending?: boolean;
    dietaryRequirements?: string;
}
const RSVPResponse = ({
    firstName,
    lastName,
    isAttending,
    dietaryRequirements,
}: RSVPResponseProps) => {
    return (
        <div className="text-black">
            <Paper className="w-72 min-h-[100px] h-full text-black flex flex-col justify-center">
                <h3 className="text-bold text-green-ink text-xl">
                    {firstName} {lastName}
                </h3>
                {(isAttending === null || isAttending === undefined) && (
                    <p>You haven't responded yet</p>
                )}

                {(isAttending === true || isAttending === false) && (
                    <>
                        <p>
                            <span className="text-bold text-green-ink">
                                Will you be attending?{" "}
                            </span>
                            {isAttending === true ? "YES" : "NO"}
                        </p>
                        <p>
                            <span className="text-bold text-green-ink">
                                Dietary Requirements:
                            </span>
                            {dietaryRequirements === null ||
                            dietaryRequirements === undefined ||
                            dietaryRequirements === ""
                                ? " None"
                                : ` ${dietaryRequirements}`}
                        </p>
                    </>
                )}
            </Paper>
        </div>
    );
};

export default RSVPResponse;
