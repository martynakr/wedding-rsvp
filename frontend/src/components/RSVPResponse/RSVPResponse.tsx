import Paper from "../Paper/Paper";
import { translation } from "../../helpers/translation";

interface RSVPResponseProps {
    firstName: string;
    lastName: string;
    isAttending?: boolean;
    dietaryRequirements?: string;
    language?: "PL" | "EN";
}

const responseText = {
    noResponse: {
        EN: "You haven't responded yet",
        PL: "Nie odpowiedziałeś jeszcze",
    },
    attendingLabel: {
        EN: "Will you be attending?",
        PL: "Czy weźmiesz udział na naszym ślubie?",
    },
    dietaryLabel: {
        EN: "Dietary Requirements:",
        PL: "Restrykcje żywieniowe:",
    },
    none: {
        EN: "None",
        PL: "Brak",
    },
    yes: {
        EN: "YES",
        PL: "TAK",
    },
    no: {
        EN: "NO",
        PL: "NIE",
    },
};

const RSVPResponse = ({
    firstName,
    lastName,
    isAttending,
    dietaryRequirements,
    language = "EN",
}: RSVPResponseProps) => {
    return (
        <div className="text-black">
            <Paper className="w-72 min-h-[100px] h-full text-black flex flex-col justify-center">
                <h3 className="text-bold text-green-ink text-xl">
                    {firstName} {lastName}
                </h3>
                {(isAttending === null || isAttending === undefined) && (
                    <p>{translation(language, "noResponse", responseText)}</p>
                )}

                {(isAttending === true || isAttending === false) && (
                    <>
                        <p>
                            <span className="text-bold text-green-ink">
                                {translation(
                                    language,
                                    "attendingLabel",
                                    responseText,
                                )}{" "}
                            </span>
                            {isAttending === true
                                ? translation(language, "yes", responseText)
                                : translation(language, "no", responseText)}
                        </p>
                        {isAttending === true && (
                            <p>
                                <span className="text-bold text-green-ink">
                                    {translation(
                                        language,
                                        "dietaryLabel",
                                        responseText,
                                    )}
                                </span>

                                {dietaryRequirements === null ||
                                dietaryRequirements === undefined ||
                                dietaryRequirements === ""
                                    ? ` ${translation(language, "none", responseText)}`
                                    : ` ${dietaryRequirements}`}
                            </p>
                        )}
                    </>
                )}
            </Paper>
        </div>
    );
};

export default RSVPResponse;
