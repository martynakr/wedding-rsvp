import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input/Input";
import Paper from "../../components/Paper/Paper";
import { type LoginForm, schema } from "./validation.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import useLogin from "../../hooks/useLogin.tsx";

const Login = () => {
    const navigate = useNavigate();
    const { mutateAsync: loginMutation, isError } = useLogin();
    const methods = useForm<LoginForm>({
        resolver: zodResolver(schema),
    });

    const handleFormSubmit = async (values: LoginForm) => {
        await loginMutation(values);
        navigate("/");
    };

    return (
        <div className="bg-lotus-bg bg-cover bg-center h-screen w-screen opacity-80 flex flex-col flex-col items-center justify-center md:px-24 lg:px-72">
            <Paper>
                <h1 className="text-4xl text-green-ink font-parisienne">
                    Martyna & Pierre's Wedding
                </h1>
                <p>Please enter the details from your invitation</p>
                <Form onSubmit={handleFormSubmit} methods={methods}>
                    <Input
                        name="inviteCode"
                        register={methods.register}
                        label="Invite Code: "
                        placeholder="Enter invite code"
                        error={methods.formState.errors.inviteCode?.message}
                    />
                    <Input
                        name="password"
                        register={methods.register}
                        label="Password: "
                        placeholder="Enter password"
                        error={methods.formState.errors.password?.message}
                    />
                    <Button variant="Primary" type="submit">
                        Login
                    </Button>
                </Form>
                {isError && <p>Invalid login details</p>}
            </Paper>
        </div>
    );
};
export default Login;
