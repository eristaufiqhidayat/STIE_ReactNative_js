import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

const Developer = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{
                uri: 'https://media.licdn.com/dms/image/v2/C5603AQED86t9ujMfKA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517268560491?e=2147483647&v=beta&t=oWSJlgn3oQukzzDgZnzzaa3EL3gdjoy_gCEimJPhsY0',
            }} style={styles.image} resizeMode='contain' />
            <View style={styles.container}>

                <View style={styles.body}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Arafah Creative</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Email:</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>eristaufiq@gmail.com</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Telepon :</Text>
                        <Text style={styles.infoText}>+628118684222</Text>
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
        width: 200,
        borderRadius: 100,
        borderColor: "navy",
        borderWidth: 3
    },
    container: {
        paddingTop: 10,
        alignItems: "center",
        flex: 0,
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

export default Developer;