import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input/Input";
import Paper from "../../components/Paper/Paper";
import { type LoginForm, schema } from "./validation.ts";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
    const methods = useForm<LoginForm>({
        resolver: zodResolver(schema),
    });

    return (
        <div className="bg-lotus-bg bg-cover bg-center h-screen w-screen opacity-80 flex flex-col flex-col items-center justify-center">
            <Paper>
                <h1 className="text-4xl text-green-ink font-parisienne">
                    Martyna's & Pierre's Wedding
                </h1>
                <p>Please enter the password from your invitation</p>
                <Form
                    onSubmit={() => console.log("submitting form")}
                    methods={methods}
                >
                    <Input name="passcode" register={methods.register} />
                    <Button
                        variant="Primary"
                        onClick={() => console.log("click")}
                    >
                        Login
                    </Button>
                </Form>
            </Paper>
        </div>
    );
};
export default Login;
