import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ColorCircle = () => {
    return (
        <View>
            <View style={styles.circleStyle}>
                <Text>This is a text</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#f5f5dc"
    },
    circleStyle: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "green"
    }
})

export default ColorCircle;