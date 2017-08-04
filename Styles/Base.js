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
    marginLeft: 5,
    marginRight: 5,
    minWidth: 50,
    minHeight: 50,
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
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  rowDivider: {
    borderTopWidth: 1,
    borderTopColor: 'grey',
    marginBottom: 10,
    marginTop: 10,
    height: 0,
  },

  // Button Styles
  diceRollButton: {
    borderColor: '#bbb',
    borderRadius: 5,
    paddingBottom: 3,
    elevation: 2,
    shadowOffset: { width: 2, height: 2 },
  },
});
