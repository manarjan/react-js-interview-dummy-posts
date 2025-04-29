import { URL } from "../constants/URL";
import { User } from "../models/User";
import axios from "axios";

export const RequestService = axios.create();

RequestService.interceptors.request.use((req) => {
	const user = localStorage.getItem("user");
	if (user) {
		if (req.url !== URL.LOGIN) {
			const userObj = JSON.parse(user) as User;

			req.headers.set("Authorization", `Bearer ${userObj.accessToken}`);
		}
	}

	return req;
});
