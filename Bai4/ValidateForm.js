import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import home from '../buoi8/home';
import { useNavigation } from '@react-navigation/native';

const ValidateForm = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('')

    const validatePhoneNumber = (number) => {

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(number)) {
            setError('Số điện thoại không hợp lệ');
            return false;
        }

        setError('');
        return true

    }

    const handleContinue = () => {
        alert(`Đăng nhập thành công`);
        navigation.navigate('home');
    };

    const isPhoneNumberValid = phoneNumber.length >= 10;

    return (
        <View style={styles.container}>
            {/* Tiêu đề */}
            <Text style={styles.title}>Đăng nhập</Text>

            {/* Mô tả */}
            <Text style={styles.subtitle}>Nhập số điện thoại</Text>
            <Text style={styles.description}>
                Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại DoManhCuong
            </Text>

            {/* Ô nhập số điện thoại */}
            <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại của bạn"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={(text) => {
                    setPhoneNumber(text);
                    validatePhoneNumber(text);
                }}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            {/* Nút Tiếp tục */}
            <TouchableOpacity
                style={[styles.buttonContainer, isPhoneNumberValid ? styles.buttonActive : styles.buttonDisabled]}
                onPress={handleContinue}
                disabled={!isPhoneNumberValid}
            >
                <Text style={styles.buttonText}>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
        position: 'absolute',
        top: 70,
        left: 20,
        fontSize: 32,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left',
        width: '100%',
    },
    description: {
        fontSize: 14,
        color: '#6e6e6e',
        marginBottom: 20,
        textAlign: 'left',
        width: '100%',
    },
    input: {
        height: 50,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '100%',
    },
    buttonContainer: {
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonActive: {
        backgroundColor: '#007BFF',
    },
    buttonDisabled: {
        backgroundColor: '#D3D3D3',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        width: '100%',
        textAlign: 'left',
    }
});

export default ValidateForm;