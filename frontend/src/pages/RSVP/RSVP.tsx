import { useForm } from "react-hook-form";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input/Input";
import Paper from "../../components/Paper/Paper";
import useAuth from "../../hooks/useAuth";
import { schema, type RSVPForm } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Form/Dropdown/Dropdown";
import RSVPResponse from "../../components/RSVPResponse/RSVPResponse";
import type { RSVPPayload } from "../../services/rsvp";
import { useRSVP } from "../../hooks/useRSVP";
import { translation } from "../../helpers/translation";
import { useEffect, useState } from "react";

const rsvpText = {
    heading: {
        PL: "Potwierdź przybycie",
        EN: "RSVP",
    },
    desc: {
        EN: " You can RSVP using the form below or by calling or texting",
        PL: "Prosimy o potwierdzenie przybycia za pomocą formularza poniżej lub telefonicznie",
    },
    subHeading: {
        EN: "Your Responses",
        PL: "Twoje Odpowiedzi",
    },
    dropdownOpts: {
        EN: ["YES", "NO"],
        PL: ["TAK", "NIE"],
    },
    formBtn: {
        EN: "Submit",
        PL: "Wyślij odpowiedź",
    },
    emailLabel: {
        EN: "Email Address",
        PL: "Adres Email",
    },
    dietaryLabel: {
        EN: "Do you have any dietary requirements?",
        PL: "Czy masz jakieś restrykcje żywieniowe?",
    },
    attendLabel: {
        EN: "Will you be attending?",
        PL: "Czy weźmiesz udział na naszym ślubie?",
    },
    nameLabel: {
        EN: "Guest name",
        PL: "Imię gościa",
    },
};

const RSVP = () => {
    const { data: currentInvite } = useAuth();
    const { mutate: rsvpMutation, isError, isSuccess, isPending } = useRSVP();
    const methods = useForm<RSVPForm>({ resolver: zodResolver(schema) });
    const fullName = methods.watch("fullName");
    const isAttending = methods.watch("isAttending");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
        if (isSuccess) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setModalTitle(
                currentInvite?.language === "EN" ? "RSVP Sent" : "RSVP wysłane",
            );
            setModalMessage(
                currentInvite?.language === "EN"
                    ? "Your RSVP has been submitted successfully. Thank you!"
                    : "Twoja odpowiedź została pomyślnie wysłana. Dziękujemy!",
            );
            setModalOpen(true);
        }
    }, [isSuccess, currentInvite?.language]);

    useEffect(() => {
        if (isError) {
            setModalTitle(
                currentInvite?.language === "EN"
                    ? "Submission Failed"
                    : "Niepowodzenie przesyłania",
            );
            setModalMessage(
                currentInvite?.language === "EN"
                    ? "Unable to submit your RSVP. Please try again."
                    : "Nie udało się wysłać odpowiedzi. Spróbuj ponownie.",
            );
            setModalOpen(true);
        }
    }, [isError, currentInvite?.language]);

    const handleFormSubmit = (values: RSVPForm) => {
        const { fullName, ...rest } = values;
        const rsvpData: RSVPPayload = {
            ...rest,
            isAttending:
                values.isAttending === "YES" || values.isAttending === "TAK"
                    ? true
                    : false,
            firstName: fullName.split(" ")[0],
            lastName: fullName.split(" ")[1],
            inviteCode: currentInvite?.inviteCode || "",
        };

        if (fullName.includes("Plus One")) {
            rsvpData.lastName = "Plus One";
        }

        console.log(rsvpData, "RSVP data");
        rsvpMutation(rsvpData);
    };
    return (
        <main className=" bg-green-pond md:px-25 px-6 pb-12 flex flex-col gap-10 min-h-screen">
            {isPending && (
                <div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-pond"></div>
                        <p className="text-gray-700 font-medium">
                            {currentInvite?.language === "EN"
                                ? "Submitting..."
                                : "Przesyłanie odpowiedzi..."}
                        </p>
                    </div>
                </div>
            )}
            {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
                        <div className="p-8 text-center">
                            <h2 className="text-2xl font-semibold mb-4">
                                {modalTitle}
                            </h2>
                            <p className="text-gray-700 mb-8">{modalMessage}</p>
                            <Button
                                variant="Secondary"
                                type="button"
                                onClick={() => setModalOpen(false)}
                            >
                                {currentInvite?.language === "EN"
                                    ? "Close"
                                    : "Zamknij"}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            <div className="text-lotus-cream text-center ">
                <h1 className="text-4xl font-parisienne text-center text-lotus-pollen pb-8 pt-18">
                    {translation(currentInvite?.language, "heading", rsvpText)}
                </h1>

                <p>{translation(currentInvite?.language, "desc", rsvpText)}</p>
                <div className="flex flex-col md:flex-row md:gap-24 justify-center font-bold p-6">
                    <p>PIERRE +61 433 532 218</p>
                    <p>MARTYNA +61 424 802 218</p>
                </div>

                <h3 className="text-xl text-center pb-8 pt-12 ">
                    {translation(
                        currentInvite?.language,
                        "subHeading",
                        rsvpText,
                    )}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center w-full flex-wrap items-stretch">
                    {currentInvite?.guests.map((g, i) => {
                        return (
                            <RSVPResponse
                                key={i}
                                firstName={g.firstName}
                                lastName={g.lastName}
                                isAttending={g.isAttending}
                                dietaryRequirements={g.dietaryRequirements}
                                language={currentInvite?.language}
                            />
                        );
                    })}
                </div>
            </div>
            <Paper>
                <h3 className="text-xl text-mist-golddark  text-center">
                    {currentInvite?.language === "EN"
                        ? "RSVP Form"
                        : "Potwierdź przybycie"}
                </h3>
                <Form onSubmit={handleFormSubmit} methods={methods}>
                    <Dropdown
                        dropdownOptions={
                            currentInvite?.guests.map(
                                (g) => `${g.firstName} ${g.lastName}`,
                            ) || []
                        }
                        register={methods.register}
                        name="fullName"
                        label={translation(
                            currentInvite?.language,
                            "nameLabel",
                            rsvpText,
                        )}
                    />
                    {fullName && fullName.includes("Plus One") && (
                        <Input
                            name="plusOneName"
                            register={methods.register}
                            label="Plus One Name"
                        />
                    )}
                    <Input
                        name="email"
                        register={methods.register}
                        label={translation(
                            currentInvite?.language,
                            "emailLabel",
                            rsvpText,
                        )}
                        error={methods.formState.errors.email?.message}
                    />
                    <Dropdown
                        dropdownOptions={translation(
                            currentInvite?.language,
                            "dropdownOpts",
                            rsvpText,
                        )}
                        name="isAttending"
                        register={methods.register}
                        label={translation(
                            currentInvite?.language,
                            "attendLabel",
                            rsvpText,
                        )}
                        error={methods.formState.errors.isAttending?.message}
                    />

                    {(isAttending === "YES" || isAttending === "TAK") && (
                        <Input
                            name="dietaryRequirements"
                            register={methods.register}
                            label={translation(
                                currentInvite?.language,
                                "dietaryLabel",
                                rsvpText,
                            )}
                        />
                    )}

                    <Button variant="Primary" type="submit">
                        {currentInvite?.language === "PL"
                            ? "Prześlij odpowiedź"
                            : "Submit RSVP"}
                    </Button>
                </Form>
            </Paper>
        </main>
    );
};

export default RSVP;
