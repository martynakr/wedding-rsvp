import type { FieldValues, UseFormReturn } from "react-hook-form";

interface FormProps<T extends FieldValues> {
    children: React.ReactNode;
    onSubmit: (data: T) => void;
    methods: UseFormReturn<T>;
}

const Form = <T extends FieldValues>({
    children,
    methods,
    onSubmit,
}: FormProps<T>) => {
    return (
        <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full md:w-[40%]"
        >
            {children}
        </form>
    );
};

export default Form;
