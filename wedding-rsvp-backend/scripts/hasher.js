import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;
export const hashPassword = (password) => {
    return bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePasswords = async (incoming, stored) => {
    return await bcrypt.compare(incoming, stored);
};
