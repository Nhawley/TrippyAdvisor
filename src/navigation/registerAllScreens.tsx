/* need to organize screen registration in a central point, */
/* here lies registerAllScreens -- ScreenRegistry */

import { Navigation } from 'react-native-navigation';

const screenName = componentObj => `TrippyAdvisor.${Object.keys(componentObj)[0]}`;

export default () => {
  // Navigation.registerComponent('Home', () => Home);
  // Navigation.registerComponent('Settings', () => Settings);
};
