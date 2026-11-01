import type { SelectHTMLAttributes } from "react";
import {
    type UseFormRegister,
    type FieldValues,
    type Path,
} from "react-hook-form";

interface DropdownProps<T extends FieldValues> extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "name"
> {
    label?: string;
    name: Path<T>;
    error?: string;
    register: UseFormRegister<T>;
    dropdownOptions: string[];
}

const Dropdown = <T extends FieldValues>({
    label,
    name,
    error,
    register,
    dropdownOptions,
    ...props
}: DropdownProps<T>) => {
    return (
        <div className="flex flex-col gap-1 items-start w-full">
            {label && (
                <label htmlFor={name} className="font-bold text-green-ink">
                    {label}
                </label>
            )}
            <select
                id={name}
                {...register(name)}
                className="border rounded-sm p-1 w-full"
                {...props}
            >
                {dropdownOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <small className="text-red-500">{error}</small>}
        </div>
    );
};

export default Dropdown;
