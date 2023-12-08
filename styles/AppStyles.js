import { StyleSheet } from 'react-native';

export const appColors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  background: '#e0e0e0',
  text: '#2c3e50',
};

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 80,
    fontFamily: 'Catamaran_500Medium',
  },
  icon: {
    width: 150,
    height: 150,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    color: appColors.text,
    paddingTop: 20,
    letterSpacing: 0.1,
    marginBottom: 10,
    fontFamily: 'Catamaran_900Black'
  },
  button: {
    padding: 10,
    marginBottom: 10,
  },
  characterItem: {
    marginBottom: 12,
    color: appColors.text,
  },
  motd: {
    fontSize: 16,
    color: appColors.text,
    textAlign: 'center',
    fontFamily: 'Catamaran_500Medium',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  table: {
    marginTop: 20,
  },
});
