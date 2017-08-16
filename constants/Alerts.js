import { Stylesheet } from 'react-native';
import Colors from './Colors';

export default {
    error: Stylesheet.create({
        container: {
            backgroundColor: Colors.errorBackground,
        },
        text:{
            color:Colors.errorText,
        },
    }),
    warning: Stylesheet.create({
        container: {
            backgroundColor: Colors.warningBackground,
        },
        text: {
            color: Colors.warningText,
        },
    }),
    notice: Stylesheet.create ({
        container: {
            backgroundColor: Colors.noticeBackground,
        },
        text: {
            color: Colors.noticeText,
        },
    }),
};