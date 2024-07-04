import {View, Text , StyleSheet, Button, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Table, Row, Rows } from 'react-native-table-component';

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
                    navigation.navigate("TelaEscolherCurso")
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

              <PilhaTelas.Screen
              name="TelaEscolherCurso"
              component={TelaEscolherCurso}
              options={{title:"Tela Para Ecolher O Curso"}}></PilhaTelas.Screen>

                <PilhaTelas.Screen
              name="OutraTela"
              component={TelaIFC}
              options={{title:"Tela sobre o IFC - Campus Ibirama"}}></PilhaTelas.Screen>

              <PilhaTelas.Screen
              name="TelaAdmintracao"
              component={TelaAdmintracao}
              options={{title:"Tela sobre o curso de Administração"}}
              ></PilhaTelas.Screen>

                <PilhaTelas.Screen
              name="TelaVestuario"
              component={TelaVestuario}
              options={{title:"Tela sobre o curso de Vestuário"}}
              ></PilhaTelas.Screen>

          </PilhaTelas.Navigator>
      </NavigationContainer>
    );
  }

  

function TelaIFC({route, navigation}){
    return(
        <View>
        <Text style={styles.titulo2}> IFC - Campus Ibirama </Text>
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

<<<<<<< Updated upstream
=======
// function Informática({route, navigation}){
//     tabela = {
//         tableHead: ['Matéria', 'Professor'],
//         tableData: [
//           ['Tiago Funk', 'Fundamentos da informática' ],
//           ['Tiago Funk', 'Engenharia de Software'],
//           ['Tiago Funk', 'Web Design'],
//           ['Tiago Funk', 'Programação 2'],
//           ['Tiago Funk', 'Programação Mobile'],
//         ['Rodrigo Nogueira', 'Projeto Integrador 1']
//         ['Rodrigo Nogueira', 'Projeto Integrador 3']
//         ['Rodrigo Nogueira', 'Banco de Dados']
//         ['', '']    
//         ['', '']
//         ['', '']
//         ]
//       }
//     return(
//         <View>
// <Text style={styles.tituloInfo}> Informática</Text>
// <Image
// style={styles.imagemInfo}
// source={require('.imagens/informática.png')}
// />
// <Text>O curso Técnico em Informática Integrado ao Ensino Médio oferta disciplinas técnicas relacionadas com a área de TECNOLOGIA DA INFORMAÇÃO (TI) integradas às disciplinas tradicionais do ENSINO MÉDIO. Das 3400 horas de curso, 1050 horas destinam-se a unidades curriculares da área técnica. No entanto, o curso visa à interseção entre as áreas técnica e comum, com ênfase na prática profissional e com possibilidade de realização de estágios não obrigatórios.</Text>
// {/* <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//           <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//           <Rows data={state.tableData} textStyle={styles.text}/>
//         </Table> */}
// </View>
//     )
// }
>>>>>>> Stashed changes

function TelaEscolherCurso( route, navigation){
    return( 
        <View style={styles.container}>
            <Text style={styles.titulo}>Escolha um curso</Text>
            <Button 
                title="Adminstração"
                color="blue"
                onPress={function(){
<<<<<<< Updated upstream
                    navigation.navigate('TelaAdmintracao',{
                        
=======
                    navigation.navigate('TelaAdmintração',{
                        descricao:"O curso Técnico em Informática Integrado ao Ensino Médio oferta disciplinas técnicas relacionadas com a área de TECNOLOGIA DA INFORMAÇÃO (TI) integradas às disciplinas tradicionais do ENSINO MÉDIO. Das 3400 horas de curso, 1050 horas destinam-se a unidades curriculares da área técnica. No entanto, o curso visa à interseção entre as áreas técnica e comum, com ênfase na prática profissional e com possibilidade de realização de estágios não obrigatórios.",

>>>>>>> Stashed changes
                    })
                }}
            ></Button>

            <Button 
                title="Informática"
                color="green"
                onPress={function(){
                    navigation.navigate('TelaInformatica',{
                        nome:"Informática",
 imagem: require('./imagens/informática.png/'),
                        descricao:"O curso Técnico em Informática Integrado ao Ensino Médio oferta disciplinas técnicas relacionadas com a área de TECNOLOGIA DA INFORMAÇÃO (TI) integradas às disciplinas tradicionais do ENSINO MÉDIO. Das 3400 horas de curso, 1050 horas destinam-se a unidades curriculares da área técnica. No entanto, o curso visa à interseção entre as áreas técnica e comum, com ênfase na prática profissional e com possibilidade de realização de estágios não obrigatórios.",
                       
                    })
                }}
            ></Button>

            <Button 
                title="Vestuário"
                color="pink"
                onPress={function(){
<<<<<<< Updated upstream
                    navigation.navigate('TelaVestuario',{
                        
=======
                    navigation.navigate('TelaVestuário',{
                        descricao:"O curso Técnico em Informática Integrado ao Ensino Médio oferta disciplinas técnicas relacionadas com a área de TECNOLOGIA DA INFORMAÇÃO (TI) integradas às disciplinas tradicionais do ENSINO MÉDIO. Das 3400 horas de curso, 1050 horas destinam-se a unidades curriculares da área técnica. No entanto, o curso visa à interseção entre as áreas técnica e comum, com ênfase na prática profissional e com possibilidade de realização de estágios não obrigatórios.",

>>>>>>> Stashed changes
                    })
                }}
            ></Button>
        </View>
    )
}


<<<<<<< Updated upstream
// function TelaAdmintracao (route, navigation){
//     return(
//         <View>
//         <Text style={styles.titulo2}> Adminstração </Text>
//        <Image 
//        style={styles.adm}
//        source={require('./imagens/adm.png')} 
//        />
//        <Text> O Curso Técnico em Administração tem por objetivo proporcionar aos estudantes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando ao domínio dos conhecimentos científicos e tecnológicos da administração, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho. </Text>
//        <Button 
//        title='Voltar'
//        color="white"
//        onPress={function(){ navigation.navigate(TelaEscolherCurso) }}
//        />
//        </View>
       
//     )
// }

// function TelaVestuario (route, navigation){
//     return(
//         <View>
//         <Text style={styles.titulo2}> Vestuario </Text>
//        <Image 
//        style={styles.vest}
//        source={require('./imagens/vestuario.png')} 
//        />
//        <Text> O curso Técnico em Vestuário Integrado ao Ensino Médio objetiva proporcionar aos discentes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando o domínio dos conhecimentos científicos e tecnológicos, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho, com foco na formação e a qualificação de profissionais com visão técnica para atuarem na área de confecção do vestuário, aptos a gerenciar e operacionalizar as diversas etapas do processo de produção do vestuário, em empresas da área industrial e de prestação de serviços. </Text>
//        <Button 
//        title='Voltar'
//        color="white"
//        onPress={function(){ navigation.navigate(TelaEscolherCurso) }}
//        />
//        </View>
       
//     )
// }
=======


function TelaCurso({route, navigation} ){
    return(
        <View style={styles.container2}>
            <Text style={styles.titulo}>{route.params.nome}</Text>
            <Image style={styles.imagensifc}> {route.params.imagem}</Image>
        <Text>{route.params.descricao}</Text>
 
        </View>
    )
}




>>>>>>> Stashed changes

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
    },
    titulo2: {
        width: '90%',
        fontSize: 40,
        
    },
    imagemifc: {
    width: '95%',
    height: 270
    },
    adm: {
        width: '95%',
        height: 270
    },
    vest: {
        width: '95%',
        height: 270
    }
  });
