import React from "react";
import { Card , Title, Paragraph} from 'react-native-paper';
import {View, Text, StyleSheet} from "react-native";

function ReclamoCard(props){
    return (<Card onPress ={()=> {console.log("hola soy la card nro ", props.id)}}>
                <Card.Content style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{flex:2}}>
                        <Title style={styles.title}>Reclamo Nro {props.id}</Title>
                        <Paragraph>{props.title}</Paragraph>
                    </View>
                    <View style={{flex:1}}>
                        {Estado(props.estado)}
                        <Text style={styles.statusReclamoFecha}>Hace 3 días</Text>
                    </View>
                </Card.Content>
            </Card>)
}

function Estado(estado){
    if(estado === "pendiente"){
        return (<View style={{borderRadius:25, backgroundColor:"#ffc048", height:30, justifyContent:"center"}}>
        <Text style={styles.statusReclamoText}>Pendiente</Text>
        </View>)
    }
    else if(estado === "en curso"){
        return (<View style={{borderRadius:25, backgroundColor:"#ffc048", height:30, justifyContent:"center"}}>
        <Text style={styles.statusReclamoText}>En curso</Text>
        </View>)
    }
    else if(estado === "resuelto"){
        return (<View style={{borderRadius:25, backgroundColor:"#0ABE18", height:30, justifyContent:"center"}}>
        <Text style={styles.statusReclamoText2}>Resuelto</Text>
        </View>)
    }
    else if(estado === "rechazado"){
        return (<View style={{borderRadius:25, backgroundColor:"#e01a00", height:30, justifyContent:"center"}}>
        <Text style={styles.statusReclamoText2}>Rechazado</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
        fontSize:20,
        color:"#1f1f1f",
    },

    statusReclamoText:{
        color:  "#1f1f1f",
        fontWeight: "bold",
        textAlign:"center",
    },

    statusReclamoText2:{
        color:  "#FFFFFF",
        fontWeight: "bold",
        textAlign:"center",
    },

    statusReclamoFecha:{
        color:  "#000000",
        marginTop: 50,
        textAlign:"center",
        fontSize:10,
        fontWeight:"bold",
        color:"#707070",
    },

})

export default ReclamoCard;
