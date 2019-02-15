import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

import MyImage from './TestImageComp.js';

export default class PhoneDetailComponent extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const Phone = navigation.getParam('Phone', {
            name: 'DefaultName'
        });

        const {width, height} = Dimensions.get('window');

        return <ScrollView
            contentContainerStyle={styles.container}>
            <Text style={styles.name}>{Phone.name}</Text>
            <View style={{...styles.imgContainer, height:height/2}}>
                <MyImage uri={Phone.photo}/>
            </View>
            <View style={styles.infoBlock}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Price: </Text><Text style={styles.infoValue}>{Phone.price || '---'} USD</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Color: </Text><Text style={styles.infoValue}>{Phone.color || '---'}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Weight: </Text><Text style={styles.infoValue}>{Phone.weight || '---'}g</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoText}>Screen: </Text><Text style={styles.infoValue}>{Phone.screenSize || '---'}"</Text>
                </View>
            </View>

            <View style={styles.description}>
                <Text style={styles.descriptionText}>{Phone.description}</Text>
            </View>

        </ScrollView>
    }
}

PhoneDetailComponent.propTypes = {
    phone: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 4
    },
    imgContainer: {
        height: '40%',
        width: '80%',

        marginTop: 10,
        marginBottom: 10,

        borderRadius: 10,
        overflow: 'hidden'
    },
    name: {
        fontSize: 30,
        textAlign: 'center',
    },
    infoBlock: {
        width: '100%',
        borderRadius: 5,
        margin: 3,
        padding: 7
    },
    infoItem: {
        flexDirection: 'row',
    },
    infoText: {
        fontWeight: 'bold',
        color: 'black',
    },
    infoValue: {
        color: 'darkgrey'
    },
    description: {
        width: '100%',
        borderRadius: 5,
        margin: 3,
        padding: 4
    },
    descriptionText: {
        color: 'darkgrey',
        textAlign: 'center'
    }
});