import { Users } from "@/generated/prisma/client";

export const hiddenPassword = (user: Users) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { password, ...result } = user;
	return result;
};
