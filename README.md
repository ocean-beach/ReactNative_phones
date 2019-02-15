# NativePhones

React native (Front end) part of test task.

## Requirements

Supported target operating systems are >= Android 4.1 (API 16) and >= iOS 9.0.
You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS by default.

## Prerequisites

- Node > 7 and npm (Recommended: Use [nvm](https://github.com/creationix/nvm))
- Watchman `brew install watchman`
- React Native CLI `npm install -g react-native-cli`
- XCode > 9
- [JDK > 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)

## Base dependencies
  - [axios](https://github.com/axios/axios) for networking.
  - [PropTypes](https://github.com/facebook/prop-types) to type-check our components exposed properties.
  - [React-Native-Config](https://github.com/luggit/react-native-config) to manage envionments.
  - [React-Navigation](https://reactnavigation.org/) navigation library.
  - [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
  - [Redux](https://redux.js.org/) for state management.
  - [Redux-Persist](https://github.com/rt2zz/redux-persist) as persistance layer.
  - [Redux-Thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
  - [Reselect](https://github.com/reactjs/reselect) the selector library for redux.
  - [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing.

## Getting Started

  To launch this project start backend project first.


## Installing

```shell
git clone

cd project_name

npm i

react-native upgrade
```

To launch this project on ios-simulator or device use x-code or next command:
```shell
react-native run-ios
```

if this error occurs: `Null is not an object (evaluating 'RNGestureHandlerModule.State')`,
try to insert next commands:
```shell
npm install
npm install --save react-navigation
npm install --save react-native-gesture-handler
react-native link
```
