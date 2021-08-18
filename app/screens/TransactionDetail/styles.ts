import { colors } from 'app/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_BACKGROUND,
    flex: 1,
    // paddingVertical: 6,
  },
  row: {
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.COLOR_GREY_SOFT,
  },
  rowDetail: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.COLOR_GREY_SOFT,
    justifyContent: 'space-between',
  },
  rowContent: {
    paddingVertical: 14,
  },
  wrapperIdTxn: { paddingRight: 8 },
});

export default styles;
