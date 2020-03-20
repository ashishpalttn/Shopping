import { SafeAreaView ,StyleSheet,Text, View,Image} from 'react-native';
import  React  from "react";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
class Home extends React.Component{
render(){
    var value={uri:'https://img.icons8.com/ios/2x/user-male-circle.png'}
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={{width:"100%",backgroundColor:'#dbdbd9'}}>
               <View style={{flexDirection:"row",backgroundColor:'blue',height:135}}>
                   <View style={{flex:1,backgroundColor:'white' ,justifyContent:'center'}}>
                       <Text style={styles.welcome}>Welcome!</Text>
                       <Text style={styles.sign}>SIGN IN  |  JOIN</Text>
                    </View>
                       
                   <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
                       <Image style={{width:60,height:60,alignSelf:"flex-end",marginRight:30}} source={value}></Image>
                   </View>
                </View>
                <View style={{width:'100%',height:18,backgroundColor:'#dbdbd9'}}></View>
                <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/order-on-the-way.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>Track Order</Text>
                        </View>
                        <View>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/resize-diagonal.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>Size Chart</Text>
                        </View>
                        <View>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/appointment-reminders.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>Notifications</Text>
                        </View>
                        <View>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/location-off.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>Store Location</Text>
                        </View>
                        <View>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <View style={{width:'100%',height:18,backgroundColor:'#dbdbd9'}}></View>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/order-on-the-way.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>Country</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/color/2x/kuwait.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>AED</Text>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/translation.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>Language</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.track_txt}>ENG</Text>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/user.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>About Us</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/help.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>FAQ</Text>
                        </View>
                        <View>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/product.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>Shipping &amp; Return </Text>
                        </View>
                        <View>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.track_item}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/online-support.png'}}> 
                            </Image>
                            <Text style={styles.track_txt}>Support</Text>
                        </View>
                        <View>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
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
        backgroundColor:"white"
    },
    welcome:{
        marginLeft:20,
        fontSize:20
    },
    sign:{
        backgroundColor:'#ffffd4',
        marginLeft:20,
        marginTop:10,
        width:120,
        padding:5
    },
    track:{
        width:'100%',
        height:60,
        backgroundColor:'white',
        borderBottomColor:'#dbdbd9',
        borderBottomWidth:.5,
        alignItems:'center',
        justifyContent:"space-between",
        flexDirection:'row'
   
    },
    track_item:{
        flexDirection:'row',
        // alignItems:'center',
    },
    icon:{
        width:30,
        height:30,
        marginLeft:20
    },
    track_txt:{
        marginLeft:20,
        marginTop:3,
        fontSize:20
    }
    
})
export default Home;