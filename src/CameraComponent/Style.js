import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  preview: {
    flex: 1.3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainerStyle:{
    flex: 0, 
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom:20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerstyle: {
    flex: 0.15,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop:1,
    justifyContent:'space-evenly'
  },
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#fe8c00"

  },
  headerSubText: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#666666"
  }
});

export default styles;