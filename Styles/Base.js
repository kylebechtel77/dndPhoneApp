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
  card: {
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: 10,
  },
  card2: {
    flexDirection: 'column',
    margin: 10,
  },

  // LabledNumber Styles
  labeledNumberContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 45,
    minHeight: 45,
  },
  labeledNumberValue: {
    fontSize: 24,
    alignItems: 'center',
    textAlign: 'center',
  },
  labeledNumberLabel: {
    fontSize: 10,
    alignItems: 'center',
    textAlign: 'center',
  },

  // LabeledText Styles
  flexDefault: {
    flex: 1,
  },
  labeledTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  labeledTextValue: {
    fontSize: 24,
  },
  labeledTextLabel: {
    fontSize: 10,
  },

  // General Layout Styles
  baseScreen: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  backgroundImage: {
    position: 'absolute',
  },
  smallSpacer: {
    width: 10,
    height: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowDivider: {
    borderTopWidth: 1,
    borderTopColor: '#bbb',
    marginBottom: 10,
    marginTop: 10,
    height: 0,
  },

  // Button Styles
  diceRollButton: {
    backgroundColor: '#eee',
    borderColor: '#bbb',
    borderRadius: 5,
    paddingBottom: 3,
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: 2,
    marginRight: 2,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
  },
});
