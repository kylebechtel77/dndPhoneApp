import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

// We need some padding up top to keep the app from rendering under the toolbar.
// The color here may be impacted by any shading the OS performs, or overridden entirely.
// NOTE: The paddingTop may need to take Platform.OS into account, and set to 20 for 'ios'
const paddingTop = Constants.statusBarHeight;
const toolbarColor = '#666';

export default StyleSheet.create({
  tabBar: {
    borderTopWidth: paddingTop,
    borderTopColor: toolbarColor,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
