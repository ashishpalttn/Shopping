import { SafeAreaView ,StyleSheet,Text, View,Image,Modal} from 'react-native';
import React, {Component}  from "react";
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import {DATA,ABOUT_DATA} from './flateListData'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            modalVisible:false,
            value:require('./assets/dp.png')
        }
    }
    IMAGE_DATA=[
        {imageId:require('./assets/pic.jpg'), name:"Ankit"},
        {imageId:require('./assets/pic10.jpeg'), name:"Monu"},
        {imageId:require('./assets/pic2.jpeg'), name:"Ajay"},
        {imageId:require('./assets/pic3.jpeg'), name:"Sachin"},
        {imageId:require('./assets/pic4.jpeg'), name:"Rahul"},
        {imageId:require('./assets/pic5.jpeg'), name:"Ankur"},
        {imageId:require('./assets/pic6.jpeg'), name:"Aman"},
        {imageId:require('./assets/pic7.jpeg'), name:"Alok"},
        {imageId:require('./assets/pic8.jpeg'), name:"Shubham"},
        {imageId:require('./assets/pic9.jpg'), name:"Sonu"}
        ]
    ImageItem=({title})=>{
        console.log(title)
        return(
            <View style={{flexDirection:'row',margin:10}}>
                <TouchableOpacity onPress={()=>{this.setState({value:title.imageId,modalVisible:false})}}>
                    <Image
                    style={{width:80,height:80}}
                    source={title.imageId}
                    >
                    </Image>
                </TouchableOpacity>
                <Text style={{alignSelf:'center',marginLeft:20}}>
                    {title.name}
                </Text>
        </View>
        )
    }

    Item({ title,id }) {
        return (
            <TouchableOpacity>
            <View style={styles.track}>
                <View style={styles.trackItem}>
                    <Image style={styles.icon} source={{uri:id}}> 
                    </Image>
                    <Text style={styles.trackText}>{title}</Text>
                </View>
                <View>
                    <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                    </Image>
                </View>
            </View>
       </TouchableOpacity>
        );
      }
    render(){
        
        // console.log(this.item)
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={{width:"100%",backgroundColor:'#dbdbd9'}}>
                     <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        }}
                        >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Select profile pic!</Text>
                            <FlatList data={this.IMAGE_DATA}
                            renderItem={({item})=><this.ImageItem title={item}/>}>

                            </FlatList>

                            <TouchableOpacity
                            
                            onPress={() => {
                                this.setState({modalVisible:false});
                            }}
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                        </Modal>
                <View style={styles.welcomeParentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcome}>Welcome!</Text>
                        <Text style={styles.sign}>SIGN IN  |  JOIN</Text>
                    </View>
                        
                    <View style={styles.imageContainer}>
                       <TouchableOpacity onPress={()=>{this.setState({modalVisible:true})}}>
                            <Image style={styles.profileImage} source={this.state.value}></Image>
                       </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.gap}></View>
                <FlatList
                    data={DATA}
                    renderItem={({item})=><this.Item title={item.title} id={item.id}/>}
                    keyExtractor={item=>item.id}
                />
               <View style={styles.gap}></View>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.trackItem}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/order-on-the-way.png'}}> 
                            </Image>
                            <Text style={styles.trackText}>Country</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/color/2x/kuwait.png'}}> 
                            </Image>
                            <Text style={styles.trackText}>AED</Text>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.track}>
                        <View style={styles.trackItem}>
                            <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/2x/translation.png'}}> 
                            </Image>
                            <Text style={styles.trackText}>Language</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.trackText}>ENG</Text>
                            <Image style={[styles.icon ,{marginRight:15}]} source={{uri:'https://img.icons8.com/ios/2x/more-than.png'}}> 
                            </Image>
                        </View>
                    </View>
               </TouchableOpacity>
               <FlatList
                    data={ABOUT_DATA}
                    renderItem={({item})=><this.Item title={item.title} id={item.id}/>}
                    keyExtractor={item=>item.id}
                />
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
    welcomeParentContainer:{
        flexDirection:"row",
        backgroundColor:'blue',
        height:135
    },
    welcomeContainer:{flex:1,
        backgroundColor:'white' ,
        justifyContent:'center'
    },
    welcome:{
        marginLeft:20,
        fontSize:20
    
    },
    imageContainer:{flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },
    sign:{
        backgroundColor:'#ffffd4',
        marginLeft:20,
        marginTop:10,
        width:120,
        padding:5
    },
    profileImage:{
        width:60,
        height:60,
        alignSelf:"flex-end",
        marginRight:30,
        borderRadius:30

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
    trackItem:{
        flexDirection:'row',
        // alignItems:'center',
    },
    icon:{
        width:30,
        height:30,
        marginLeft:20
    },
    trackText:{
        marginLeft:20,
        marginTop:3,
        fontSize:20
    },
    gap:{
        width:'100%',
        height:18,
        backgroundColor:'#dbdbd9'
    },    
    centeredView: {
        flex: 1,
        justifyContent: "center",
    },
    modalView: {
        margin: 80,
        backgroundColor: "#d7d9d7",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowOpacity: .25,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
export default Home;