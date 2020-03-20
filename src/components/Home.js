import { SafeAreaView ,StyleSheet,Text, View,Image} from 'react-native';
import  React  from "react";
import { ScrollView } from 'react-native-gesture-handler';
class Home extends React.Component{
render(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={{backgroundColor:'pink',width:"100%"}}>
               <View style={{flexDirection:"row",backgroundColor:'blue',height:120}}>
                   <View style={{flex:1,backgroundColor:'green' ,justifyContent:'center'}}>
                       <Text style={styles.welcome}>Welcome!</Text>
                       <Text style={styles.sign}>SIGN IN  |  JOIN</Text>
                       </View>
                       
                   <View style={{flex:1,backgroundColor:'red',justifyContent:'center'}}>
                       <Image style={{width:60,height:60,alignSelf:"flex-end",marginRight:30}} source={{uri:'https://img.icons8.com/ios/2x/user-male-circle.png'}}></Image>
                   </View>
               </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"yellow"
    },
    welcome:{
        marginLeft:20,
        fontSize:20
    },
    sign:{
        backgroundColor:'yellow',
        marginLeft:20,
        marginTop:10,
        width:110
    }
    
})
export default Home;