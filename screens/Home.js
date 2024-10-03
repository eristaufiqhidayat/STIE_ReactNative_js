// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet, Image, Dimensions } from "react-native";

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;
const HomeScreen = ({ navigation }) => {
    return (
        <View style={[
            styles.box,
            {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'column', padding: 5
            },
        ]}>
            <View style={{
                flex: 0, paddingBottom: 5, alignItems: "center",
            }} >
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://stei.ac.id/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-04-at-08.25.15.jpeg',
                    }}
                />
            </View>
            <View style={{
                flex: 0, paddingBottom: 5, alignItems: "center",
            }} >
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://stei.ac.id/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-05-at-07.19.10.jpeg',
                    }}
                />
            </View>

            <View style={{
                flex: 0, paddingBottom: 10, alignItems: "center", padding: 5
            }} >
                <Image
                    style={{
                        alignItems: "center",
                        width: 400,
                        height: 90,
                        borderRadius: 10,
                        border: 2,
                        padding: 10
                    }}
                    source={{
                        uri: 'https://stei.ac.id/wp-content/uploads/2024/09/sambutan-ketua-stei-3.jpg',
                    }}
                />
            </View>
            <View style={{
                flex: 0, paddingBottom: 10, alignItems: "center", padding: 5
            }} >
                <Image
                    style={{
                        alignItems: "center",
                        width: 400,
                        height: 90,
                        borderRadius: 10,
                        border: 2,
                        padding: 10
                    }}
                    source={{
                        uri: 'https://stei.ac.id/wp-content/uploads/2024/09/sambutan-ketua-ypf-3j.jpg',
                    }}
                />
            </View>

            {/* <View style={{
                flex: 0, backgroundColor: 'white', borderRadius: 10,
                borderWidth: 1, padding: 10
            }} >
                <Text>Yayasan Pendidikan Fatahillah Jakarta sejak tahun 1969</Text> */}
            {/* <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
            /> */}
        </View>
        // </View >
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "top",
        alignItems: "center",
        textAlign: "center",
    },
    container: {
        paddingTop: 0,
        flex: 1,
        padding: 0,

    },
    box: {
        width: imageWidth,
        height: 400,
    },
    tinyLogo: {
        alignItems: "center",
        width: imageWidth,
        height: 140,
        borderRadius: 20,
        border: 2
    },
    logo: {
        width: 66,
        height: 58,
    },
});

export default HomeScreen;