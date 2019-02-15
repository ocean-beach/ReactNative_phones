import React, { Component } from 'react';
import {
    FlatList,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {getPhones} from "../actions/phones";

import NavigationService from '../services/NavigationService';

const extractKey = () => `${Math.random()}`;

class PhoneListContainer extends Component {
    constructor(props) {
        super(props);
    }

    renderItem = ({item}) => {
        return(
            <TouchableHighlight onPress={() => NavigationService.navigate('Phone', {Phone: item})}>
                <Text style={styles.row}>
                    {item.name}
                </Text>
            </TouchableHighlight>
        );
    };

    render() {
        const {phones, getPhones, isLoading} = this.props;

        return (
            <FlatList
                style={styles.container}
                data={phones}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
                onRefresh={getPhones}
                refreshing={isLoading}
            />
        );
    }
}

const mapStateToProps = ({reducer}) => {
    return reducer;
};

const mapDispatchToProps = dispatch => {
    return {
        getPhones: () => {
            dispatch(getPhones())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'white',
    },
});
