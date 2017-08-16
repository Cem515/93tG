import React from 'react';
import { Stylesheet, View } from 'react-native';
import { Notifications } from 'expo';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem,
} from '@expo/vector-icons';
import { fontAwesome } from '@expo/vector-icons';

import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import registerForPushNotificationsAsync
from '../api/registerForPushNotificationsAsync';

export default class RootNavigation extends React.Component {
    componentDidMount() {
        this._notificationSubscription = this._registerForPushNotifications();
    }
    componentWillUnmount() {
        this._notificationSubscription && this._notificationSubscription.remove();
    }
    render() {
        return (
            <TabNavigation tabBarHeight={56} initialTab="home">
</TabNavigation>
        );
    }
_renderIcon(name,isSelected) {
    return (
<FontAwesome
name= {name}
size={32}
color={isSelected ? Colors.tabIconSelected : tabIconDefault}
/>
    );
}
_registerForPushNotifications() {
    registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(
this._handleNotification
    );
}
_handleNotification = ({ origin, data }) => {
this.props.navigator.showLocalAlert(
'Push note ${origin} with data: ${JSON.stringify(data)}',
Alerts.notice
);
};
}
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor:'#fff',
     },
        selectedTab: {
            color: Colors.tabIconSelected,
        },
 });
