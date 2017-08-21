import React from 'react';
import { Components, Location } from 'expo';

import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Switch,
    Dimensions,
} from 'react-native';

import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import { FontAwesome } from '@expo/vector-icons';

class WelcomeScreen extends React.Component {
static route = {

}
}
const styles = StyleSheet.create({
    imageContainer: {
        flex:1,
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems:'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
    },
    title: {
        color: '#000000',
        alignItems:'center',
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 20
    },
    button: {
        backgroundColor: '#006400',
        opacity: 0.8,
        paddingVertical: 15,
        marginVertical: 15,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#006400',
        borderStyle: 'solid',
        borderWidth: 1,
        shadowColor: "000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset:{
            height:1,
            width:0
        }
    },
    buttonText: {
        color: '#B8860B',
        fontSize:18,
        fontWeight:'700',
        textAlign:'center'
    },
    wrapper: {
        paddingTop: 50,
        paddingHorizontal: 15,
        marginLeft: 20,
        justifyContent: 'center'
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 15,
        textAlign:'center',
    },
})
