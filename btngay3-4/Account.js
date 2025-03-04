import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "./UserContext";

const Account = ({ navigation }) => {

    const { user, logout } = useContext(UserContext);

    if (!user) {
        // Nếu người dùng đã đăng xuất, quay về màn hình Login
        navigation.replace("Login");
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Account</Text>
            <View style={styles.content}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.job}>{user.job}</Text>
                <Text style={styles.exp}>{user.exp}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Sign Out" onPress={() => navigation.replace("Login")} color="orange" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0",

    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: "#f1f1f1",
        width: "100%",
        marginBottom: 10,
    },

    content: {
        flex: 1,
        borderRadius: 10,
        padding: 20,
        alignItems: "center", // Căn giữa các thành phần theo chiều ngang
        justifyContent: "center", // Căn giữa theo chiều dọc
        alignSelf: "center", // Đưa toàn bộ khối vào giữa màn hình
    },
    name: {
        fontSize: 25,
        fontWeight: "600",
        marginBottom: 5,
        color: "black",
    },
    job: {
        fontSize: 16,
        color: "blue",
        marginBottom: 10,
    },
    exp: {
        fontSize: 14,
        textAlign: "center",
        color: "#444",
        marginBottom: 20,
    },
    buttonContainer: {
        width: "30%",
        borderRadius: 5,
        overflow: "hidden",
    },
});

export default Account;
