import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Hung Nguyen",
        job: "Mobile Developer",
        exp: "I have above years of experience in native mobile app development, now I am learning React Native."
    });

    const logout = () => {
        setUser(null); // Xóa thông tin người dùng khi đăng xuất
    };

    return (
        <UserContext.Provider value={{ user, logout }}>
            {children}
        </UserContext.Provider>
    );
};
