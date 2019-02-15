import React, {Component} from 'react';
import {
    Image,
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

const defaultLink = 'https://image.flaticon.com/icons/png/512/65/65680.png';

export default class MyImage extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            uri: props.uri || defaultLink,
            loading: false,
            ready: false
        }
    }

    render() {
        return <View style={styles.container}>
            <Image
                source={{uri:this.state.uri}}
                style={styles.image}
                onLoadStart={e => this.setState({loading: true, ready: false})}
                onLoadEnd={e => this.setState({loading: false, ready: false})}
                onLoad={e => this.setState({loading: false, ready: true})}
            />

            {this.state.loading && <View style={styles.spinner}>
                <ActivityIndicator size={'large'}/>
            </View>}
        </View>
    }
}

MyImage.propTypes = {
    uri: PropTypes.string
};

const styles = StyleSheet.create({
    container: {},
    image: {
        height: '100%',
        width: '100%',
    },
    spinner: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});