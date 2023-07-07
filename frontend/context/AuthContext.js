import React, { createContext, useState, useEffect } from "react";
import { getUserById } from "../Apis/userApi";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [user, setUser] = useState(null);

    const checkLogin = async () => {
        // AsyncStorage.clear();
        // Use this to clear the token from async storage
        const token = await AsyncStorage.getItem('token');
        console.log("Auth token:", token);
        if (token !== null) {
            setIsLoggedIn(true);
            const account = await getUserById(token);
            console.log("Auth account:", account);
            setUser(account);
        } else {
            setIsLoggedIn(false);
            setUser(null);
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);
        


    return (
        <AuthContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, user, setUser, checkLogin}}
        >
            {children}
        </AuthContext.Provider>
    )
}