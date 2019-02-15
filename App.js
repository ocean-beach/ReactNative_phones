/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPhones} from "./actions/phones";

import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationService from './services/NavigationService';

import PhoneListContainer from './components/PhoneListContainer';
import PhoneDetailComponent from './components/PhoneDetailComponent';

const TopLevelNavigator = createStackNavigator(
    {
        Phones: PhoneListContainer,
        Phone: PhoneDetailComponent
    },
    {
        initialRouteName: "Phones"
    }
);

const AppContainer = createAppContainer(TopLevelNavigator);

type Props = {};
class App extends Component<Props> {

    componentDidMount() {
        this.props.getPhones();
    }

    render() {
        return (
            <AppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);