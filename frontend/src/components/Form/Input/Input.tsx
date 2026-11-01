import type { InputHTMLAttributes } from "react";
import {
    type UseFormRegister,
    type FieldValues,
    type Path,
} from "react-hook-form";

interface InputProps<
    T extends FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
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
        <div className="flex flex-col gap-1 items-start">
            {label && (
                <label htmlFor={name} className="font-bold text-green-ink">
                    {label}
                </label>
            )}
            <input
                id={name}
                type="text"
                {...register(name)}
                className="border rounded-sm p-1 w-full"
                {...props}
            />
            {error && <small className="text-red-500">{error}</small>}
        </div>
    );
};

export default Input;
