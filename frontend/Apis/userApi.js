import axios from "axios";
import { URL_USERS_SVC } from "../config";
import { STATUS_CODE_OK } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";


// create account
export async function createUser(user) {
    try {
        const response = await axios.post(`${URL_USERS_SVC}/create`, user);
        if (response.status !== STATUS_CODE_OK) {
        console.error(response);
        throw new Error("Failed to create account");
        }
        const newAccount = response.data;
        // console.log("newAccount:", newAccount);
        if (newAccount.token) {
            const token = newAccount.token;
            await AsyncStorage.setItem("token", token);
        }
        return newAccount;
    } catch (error) {
        console.error("Failed to create account:", error.message);
    }
}

// login
export async function login(email, password) {
    try {
        // console.log("email:", email);
        // console.log("password:", password);
        const response = await axios.post(`${URL_USERS_SVC}/login`, { email, password });
        if (response.status !== STATUS_CODE_OK) {
        console.error(response);
        throw new Error("Failed to login");
        }
        const account = response.data;
        if (account.token) {
            await AsyncStorage.setItem("token", account.token);
            // console.log("account:", account);
        }
        
        return account;
    } catch (error) {
        console.log(error)
        console.error("Failed to login:", error.message);
    }
}

// Get account by id
export async function getUserById(token) {
    try {
        console.log("token:", token);
        const response = await axios
            .get(`${URL_USERS_SVC}/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        // console.log("response:", response.data);
        if (response.status !== STATUS_CODE_OK) {
        console.error(response);
        throw new Error("Failed to get account");
        }
        const account = response.data;
        console.log("account:", account);
        return account;
    } catch (error) {
        console.log("error:", error)
        console.error("Failed to get account:", error.message);
    }
}