import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AuthScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const isLogin = route.name === "Login";

  useEffect(() => {
    setIsDisabled(email.length < 3 || password.length < 3);
  }, [email, password]);


  const handleAuth = () => {
    if (isLogin) {
      navigation.navigate("Explorer");
    } else {
      console.log("sign up", email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Sign in" : "Sign up"}</Text>
      <Text style={styles.lable}>Email ID</Text>
      <TextInput style={styles.input} placeholder="Enter your email here!" value={email} onChangeText={setEmail} />
      <Text style={styles.lable}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter your password here!" value={password} onChangeText={setPassword} secureTextEntry />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <TouchableOpacity style={[styles.button, isDisabled && styles.buttonDisabled]} onPress={handleAuth} disabled={isDisabled}>
        <Text style={styles.buttonText}>{isLogin ? "Sign in" : "Sign up"}</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={() => console.log("Google Sign In")}>
          <FontAwesome name="google" size={24} color="white" />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={() => console.log("Facebook Sign In")}>
          <FontAwesome name="facebook" size={24} color="white" />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.switchAuthButton} onPress={() => navigation.navigate(isLogin ? "Register" : "Login")}>
        <View style={styles.switchAuthContainer}>
          <Text style={styles.switchAuthText}>{isLogin ? "Not yet a member?" : "Already have an account"}</Text>
          <TouchableOpacity onPress={() => navigation.navigate(isLogin ? "Register" : "Login")}>
            <Text style={styles.link}>{isLogin ? "Sign up" : "Sign in"}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  lable: { fontSize: 18, alignSelf: "flex-start", marginBottom: 5 },
  forgotPassword: { fontSize: 14, fontWeight: "bold", alignSelf: "flex-end", color: "orange", marginBottom: 10 },
  input: { width: "100%", height: 50, borderWidth: 1, borderColor: "gray", borderRadius: 10, paddingHorizontal: 15, marginBottom: 10 },
  button: { backgroundColor: "orange", padding: 15, borderRadius: 10, width: "100%", alignItems: "center" },
  orText: { fontSize: 15, fontWeight: "bold", marginTop: 20 },
  socialContainer: { flexDirection: "row", marginTop: 20 },
  socialButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 15, borderRadius: 5, marginHorizontal: 10, width: "45%" },
  googleButton: { backgroundColor: "#DB4437" },
  facebookButton: { backgroundColor: "#4267B2" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  socialText: { color: "white", fontSize: 16, fontWeight: "bold", marginLeft: 10 },
  link: { marginLeft: 5, color: "blue", fontWeight: "bold" },
  switchAuthButton: { marginTop: 20 },
  switchAuthContainer: { flexDirection: "row", alignItems: "center" },
  switchAuthText: { fontSize: 16, color: "gray" },
  buttonDisabled: { backgroundColor: "gray", },
});

export default AuthScreen;
