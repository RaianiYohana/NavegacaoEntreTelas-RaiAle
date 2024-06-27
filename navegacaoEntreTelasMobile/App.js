import {View, Text , StyleSheet, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PilhaTelas = createNativeStackNavigator()

function TelaInicio( {route, navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Selecione um botão: </Text>
            <Button 
                title="Detalhes do Campus IFC"
                color="#07da5c"
                onPress={function(){
                    navigation.navigate("OutraTela")
                }}
            ></Button>
            <Button 
                title="Página de cursos"
                color="#07da5c"
                onPress={function(){
                    navigation.navigate("SelecionarCurso")
                }}
            ></Button>

        </View>
    )
}



export default function App() {
  
    return (
      <NavigationContainer>
          <PilhaTelas.Navigator initialRouteName='PrimeiraTela'>
              <PilhaTelas.Screen
                  name="TelaInicio"
                  component={TelaInicio}
                  options={{title:"Tela inicial"}}
              />
          </PilhaTelas.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'top',
      width: '100%'
    },
    titulo: {
      marginTop: '10%',
      fontSize: 20
    }
  });
function telaIFC({route, navigation}){
    
}



