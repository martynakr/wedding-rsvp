import {
    type UseFormRegister,
    type FieldValues,
    type Path,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
    label?: string;
    name: Path<T>;
    error?: string;
    register: UseFormRegister<T>;
}

const Input = <T extends FieldValues>({
    label,
    name,
    error,
    register,
    ...props
}: InputProps<T>) => {
    return (
        <div className="flex flex-col gap-1">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                type="text"
                {...register(name)}
                className="border rounded-sm p-1 "
                {...props}
            />
            {error && <small>{error}</small>}
        </div>
    );
};

export default Input;
