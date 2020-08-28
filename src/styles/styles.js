import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  app: {
    backgroundColor: '#ADF',
    flex: 1,
    justifyContent: 'space-between',
    padding: 50,
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "#20232a",
    borderRadius: 7,
    backgroundColor: "#50dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold"
  },
  buttonView: {
    flexDirection: 'row',  
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
});
