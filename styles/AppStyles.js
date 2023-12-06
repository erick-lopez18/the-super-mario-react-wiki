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
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: appColors.text,
  },
  button: {
    marginBottom: 10,
},
characterItem: {
  marginBottom: 12,
  color: appColors.text,
},
});
