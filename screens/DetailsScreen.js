// screens/DetailsScreen.js
import React from 'react';
import { Button, View, Text } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go back to Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export default DetailsScreen;
