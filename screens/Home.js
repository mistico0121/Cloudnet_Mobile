import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, Modal, Alert } from 'react-native';
import * as Device from 'expo-device';
import {api_calls, images} from "../constants"



const HandlePressEvent = () => console.log("Text pressed")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8e6f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})

const Home = ({navigation}) =>{
  const [model, setModel] = React.useState("")
  const showAlert = () =>
  Alert.alert(
    "Error",
    "Dispositivo no encontrado en el catalogo",
    [
      {
        text: "Cerrar",
        style: "cancel",
      },
    ],
    {
      cancelable: true
    }
  );

  
  const go_to_device_page = () =>{
    setModel( Device.modelName )
    console.log(model);
    api_calls.match_device(model).
    then(data => {

      if (data){
        navigation.navigate("Product", {
          data})
        }
        else{
          console.log("NO ESTA")
          showAlert()
        }
      }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={{
          height: 100,
          width: 100
        }}
        source={require('../assets/cloudnet-logo.png')}
      />
      <Text onPress={HandlePressEvent}>Modelo del dispositivo: {model}</Text>
      <Button 
        title="Obtener información del dispositivo" 
        onPress={showAlert}>
      </Button>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


export default Home;