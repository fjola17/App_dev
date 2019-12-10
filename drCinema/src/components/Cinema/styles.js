import { StyleSheet, Dimensions } from "react-native";
import { cinDark, cinWhite, cinLighterDark } from "../../styles/colors";

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: winWidth * 0.9,
    flexGrow: 0.9,
    alignItems: 'center',
    backgroundColor: cinLighterDark,
  },
  toolBarText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: cinWhite,
    alignItems: 'center',
  },
});
