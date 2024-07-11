import {View, Text , StyleSheet, Button, Image, ScrollView} from "react-native";
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
              name="TelaCurso"
              component={TelaCurso}
              options={{title:"Tela sobre o curso de Administração"}}
              ></PilhaTelas.Screen>

                {/* <PilhaTelas.Screen
              name="TelaCurso"
              component={TelaCurso}
              options={{title:"Tela sobre o curso de Vestuário"}}
              ></PilhaTelas.Screen> */}

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


function TelaEscolherCurso( {route, navigation} ){
    return( 
        <View style={styles.container}>
            <Text style={styles.titulo}>Escolha um curso</Text>
            
            <Button 
            
                title="Adminstração"
                color="blue"
                onPress={function(){
                    navigation.navigate('TelaCurso',{
                        nome:"Adminstração",
                     imagem:require('./imagens/adm.png'),
                        descricao:"Assim, o profissional Técnico em Administração pode atuar nas instituições públicas, privadas e do terceiro setor que demandem atividades de gestão, trabalhando especialmente no suporte e apoio nos mais diversos setores.",
                        
                        tableHead: ['Professor', 'Matéria/as', ],
                        tableData: [
                            ['ANDRE LUIZ KOPELKE ', 'ECONOMIA, GESTÃO DA PRODUÇÃO E LOGÍSTICA, GESTÃO DE PESSOAS, RESPONSABILIDADE SOCIAL EMPRESARIAL.' ],
                            ['JETER LANG', 'FUNDAMENTOS DA ADMINISTRAÇÃO, GESTÃO DE SERVIÇOS, PROJETO INTEGRADOR I, PROJETO INTEGRADOR II, ADMINISTRAÇÃO E EMPREENDEDORISMO.'],
                            ['PAULO ROBERTO SILVEIRA MACHADO', 'MARKETING, ADMINISTRAÇÃO DA TECNOLOGIA DA INFORMAÇÃO, PROJETO INTEGRADOR III, GESTÃO DE ATELIER DE CONFECÇÃO.'],
                            ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                        ]       
                    })
                }}
            ></Button>

            <Button 
                title="Informática"
                color="green"
                onPress={function(){
                    navigation.navigate('TelaCurso',{
                        nome:"Informática",
                     imagem:require('./imagens/informatica.png'),
                        descricao:"O curso Técnico em Informática Integrado ao Ensino Médio oferta disciplinas técnicas relacionadas com a área de TECNOLOGIA DA INFORMAÇÃO (TI) integradas às disciplinas tradicionais do ENSINO MÉDIO. Das 3400 horas de curso, 1050 horas destinam-se a unidades curriculares da área técnica. No entanto, o curso visa à interseção entre as áreas técnica e comum, com ênfase na prática profissional e com possibilidade de realização de estágios não obrigatórios.",
                        tableHead: ['Professor', 'Matéria/as', ],
                        tableData: [
                            ['ANDRE LUIZ KOPELKE ', 'ECONOMIA, GESTÃO DA PRODUÇÃO E LOGÍSTICA, GESTÃO DE PESSOAS, RESPONSABILIDADE SOCIAL EMPRESARIAL.' ],
                            ['JETER LANG', 'FUNDAMENTOS DA ADMINISTRAÇÃO, GESTÃO DE SERVIÇOS, PROJETO INTEGRADOR I, PROJETO INTEGRADOR II, ADMINISTRAÇÃO E EMPREENDEDORISMO.'],
                            ['PAULO ROBERTO SILVEIRA MACHADO', 'MARKETING, ADMINISTRAÇÃO DA TECNOLOGIA DA INFORMAÇÃO, PROJETO INTEGRADOR III, GESTÃO DE ATELIER DE CONFECÇÃO.'],
                            ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                                ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                            ['TIAGO SOUZA ARAÚJO', 'EMPREENDEDORISMO'],
                        ]  
                    })
                }}
            ></Button>

        <Button 
                title="Vestuário"
                color="pink"
                onPress={function(){                        
                    navigation.navigate('TelaCurso',{
                        nome:"Vestuário",
                     imagem:require('./imagens/vestuario.png'),
                        descricao:"O curso Técnico em Vestuário Integrado ao Ensino Médio objetiva proporcionar aos discentes o desenvolvimento de sua autonomia enquanto cidadãos críticos e participativos, visando o domínio dos conhecimentos científicos e tecnológicos, para atuarem de maneira consciente e responsável diante das necessidades atuais no mundo do trabalho, com foco na formação e a qualificação de profissionais com visão técnica para atuarem na área de confecção do vestuário, aptos a gerenciar e operacionalizar as diversas etapas do processo de produção do vestuário, em empresas da área industrial e de prestação de serviços."

                    })
                }}
            ></Button>
            {/* 

            <

             */}
        </View>
    )
}


function TelaCurso({route, navigation} ){
    return(
    <ScrollView>
        <View >
            <Text style={styles.titulo}>{route.params.nome}</Text>
            <Image style={styles.imagensifc} source={route.params.imagem}/>
            <Text>{route.params.descricao}</Text>
            <Table style={styles.tabela}>
                <Row data={route.params.tableHead}/>
                <Rows data={route.params.tableData}/>
            </Table> 
        </View>
    </ScrollView>
    )
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
    },
    titulo2: {
        width: '90%',
        fontSize: 40,
        
    },
    imagemifc: {
    width: '95%',
    height: 270
    },
    imagensifc: {
        width: '95%',
        height: 270
    },
    tabela:{
        marginTop:50
    }
  });
