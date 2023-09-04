import react from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import ColorBox from "../components/colorBox";

const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return (
        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={item => item.ColorName}
            renderItem={({ item }) =>
                <ColorBox ColorName={item.colorName} hexCode={item.hexCode} />}
            ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: "white",
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ColorPalette;