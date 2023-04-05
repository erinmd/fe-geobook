import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#2B5F6B",
    justifyContent: "center",
    alignContent: "center",
  },

  header: {
    padding: 15,
    textAlign:'left',
  },
  headerText: {
    fontSize: 20,
    
  },

  avatarContainer: {
    top: -150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tinyImg: {
    margin: 10,
    paddingTop: 10,
    paddingBottom: 5,
    width: "100%",
    height: 100,
    maxWidth: 360,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
  },
  main: {
    margin: 0,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    // backgroundColor:'#132235',
    borderRadius: 5,
  },
  input: {
    alignItems: "center",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  submit: {
    backgroundColor: "#5CDB95",
    alignSelf: "stretch",
    borderRadius: 5,
    alignItems: "center",
    padding: 10,
  },
  error: {
    color: "red",
  },
});