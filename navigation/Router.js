import { createRouter } from '@expo/ex-navigation';

import RootNavigation from './RootNavigation';
//IMPORT SCREENS FOR ROUTER
// import HomeScreen from '../screens/HomeScreen';

export default createRouter(() => ({

    home: () => HomeScreen,

}));