import {View, Text , StyleSheet, Button, Image} from "react-native";
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
    return(
        <View>
        <Text style={styles.titulo}> IFC - Campus Ibirama </Text>
       <Image 
       style={styles.imagemifc}
       source={require('./imagens/ifc.png')} 
       />
       <Text> O Instituto Federal Catarinense - Campus Ibirama, oferece três cursos de tecnico integrado ao ensino médio. Nascido em 2011, o instituto conta com diversos servidores e alunos </Text>
       <Button 
       title='Voltar'
       color="white"
       onPress={function(){ navigation.navigate(TelaInicio) }}
       />
       </View>
       
    )
}



