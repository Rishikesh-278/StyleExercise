import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ ColorName, hexCode }) => {
    const boxColor = {
        backgroundColor: hexCode,
    };
    return (
        <View style={[styles.box, boxColor]}>
            <Text style={styles.boxText}>
                {ColorName} : {hexCode}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
        borderRadius: 3,
    },
    boxText: {
        color: "white",
        fontWeight: "bold",
    }
})

export default ColorBox;