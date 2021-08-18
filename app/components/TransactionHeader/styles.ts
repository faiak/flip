import { colors } from 'app/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapViewLeftContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapViewIcSearch: { paddingRight: 8 },
  wrapViewRightContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapTextSort: { paddingRight: 2 },
  textMediumGrey: { fontSize: 12, color: colors.COLOR_GREY },
  textBoldOrange: { fontSize: 12, textTransform: 'uppercase' },
  input: { textDecorationLine: 'underline' },
});

export default styles;
