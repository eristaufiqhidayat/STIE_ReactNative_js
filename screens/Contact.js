import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

const Contact = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{
                uri: 'https://stei.ac.id/wp-content/uploads/2022/06/STEI-1.png',
            }} style={styles.image} resizeMode='contain' />
            <View style={styles.container}>

                <View style={styles.body}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Sekolah Tinggi Ilmu Ekonomi</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Indonesia Jakarta</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Email:</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>info@stei.ac.id</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Location:</Text>
                    </View>
                    <View style={styles.infoContainer}>

                        <Text style={styles.infoText}>Jl. Kayu Jati Raya 11A, Rawamangun, Jakarta Timur, 13220</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Telepon :</Text>
                        <Text style={styles.infoText}>(021) 4750321</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>instagram:</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>https://www.instagram.com/stieindonesiajakarta</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        paddingTop: 200,
        height: 160,
        width: 170,
    },
    container: {
        paddingTop: 10,
        alignItems: "center",
        flex: 0,
        backgroundColor: '#ECF0F3',
    },
    body: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarContainer: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 0.16,
    },
    avatar: {
        fontSize: 72,
        fontWeight: '700',
    },
    nameContainer: {
        marginTop: 0,
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666666',
        marginRight: 8,
    },
    infoText: {
        fontSize: 16,
    },
});

export default Contact;