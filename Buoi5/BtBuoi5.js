import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BtBuoi5 = () => {
    const [backgroundColor, setBackgroundColor] = useState('Color')

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>{backgroundColor.toUpperCase()}</Text>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => setBackgroundColor('blue')}>
                <Text style={styles.buttonText}>BLUE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={() => setBackgroundColor('brown')}>
                <Text style={styles.buttonText}>BROWN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => setBackgroundColor('yellow')}>
                <Text style={styles.buttonText}>YELLOW</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => setBackgroundColor('red')}>
                <Text style={styles.buttonText}>RED</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={() => setBackgroundColor('black')}>
                <Text style={styles.buttonText}>BLACK</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    button: {
        width: '80%',
        paddingVertical: 15,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BtBuoi5;