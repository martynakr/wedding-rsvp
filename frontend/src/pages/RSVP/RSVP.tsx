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

const RSVP = () => {
    const { data: currentInvite } = useAuth();
    const { mutate: rsvpMutation } = useRSVP();
    const methods = useForm<RSVPForm>({ resolver: zodResolver(schema) });
    const fullName = methods.watch("fullName");
    const isAttending = methods.watch("isAttending");

    const handleFormSubmit = (values: RSVPForm) => {
        const { fullName, ...rest } = values;
        const rsvpData: RSVPPayload = {
            ...rest,
            isAttending: values.isAttending === "YES" ? true : false,
            firstName: fullName.split(" ")[0],
            lastName: fullName.split(" ")[1],
            inviteCode: currentInvite?.inviteCode || "",
        };
        rsvpMutation(rsvpData, {
            onSuccess: () => {
                methods.reset();
            },
        });
    };
    return (
        <main className=" bg-green-pond md:px-25 px-6 pb-12 flex flex-col gap-10 min-h-screen">
            <div className="text-lotus-cream text-center ">
                <h1 className="text-4xl font-parisienne text-center text-lotus-pollen pb-8 pt-18">
                    RSVP
                </h1>

                <p>
                    You can RSVP using the form below or by calling or texting
                </p>
                <div className="flex gap-24 justify-center font-bold p-6">
                    <p>PIERRE 0433 532 218</p>
                    <p>MARTYNA 0424 802 218</p>
                </div>

                <h3 className="text-xl text-center pb-8 pt-12 ">
                    Your Responses
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
                            />
                        );
                    })}
                </div>
            </div>
            <Paper>
                <h3 className="text-xl text-mist-golddark  text-center">
                    RSVP Form
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
                        label="Name"
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
                        label="Email address"
                        error={methods.formState.errors.email?.message}
                    />
                    <Dropdown
                        dropdownOptions={["YES", "NO"]}
                        name="isAttending"
                        register={methods.register}
                        label="Will you be attending?"
                        error={methods.formState.errors.isAttending?.message}
                    />

                    {isAttending === "YES" && (
                        <Input
                            name="dietaryRequirements"
                            register={methods.register}
                            label="Do you have any dietary requirements?"
                        />
                    )}

                    <Button variant="Primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Paper>
        </main>
    );
};

export default RSVP;
