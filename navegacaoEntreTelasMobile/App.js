import {View, Text , StyleSheet, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PilhasTelas = createNativeStackNavigator()

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

function telaIFC({route, navigation}){
    
}



