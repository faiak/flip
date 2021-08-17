import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_WHITE,
    marginBottom: 8,
    borderRadius: 6,
    flexDirection: 'row',
    borderLeftWidth: 6,
  },
  content: {
    flex: 1,
    paddingBottom: 14,
    paddingRight: 10,
    paddingTop: 12,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 4,
  },
  wrapText: {
    paddingVertical: 4,
  },
});

export default styles;
