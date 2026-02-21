import { verifyToken } from "../auth/verifyToken";

export const handler = async (event) => {
    try {
        // const payload = await verifyToken(event);

        // console.log(payload);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: event }),
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: e.message }),
        };
    }
};
