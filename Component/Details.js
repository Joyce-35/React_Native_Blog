import { AntDesign, Feather } from '@expo/vector-icons';
import React, { useEffect, } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Details = ({navigation, route}) => {
    console.log(route.params)
    const { image, title, minutes, blog, writerName , writerImage } = route.params;
    
    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <View style={styles.headerContainer}>
              <Feather name="headphones" size={24} color="black" style={styles.icon}/>
              <AntDesign name="hearto" size={24} color="black"style={styles.icon} />
              <Feather name="share-2" size={24} color="black"style={styles.icon} />
            </View>
          ),
        });
      }, []);
    return (
        <View style={styles.container}>
            <Image source={image}  style={styles.blogImage}/>
            <Text style={styles.header}>{title}</Text>
            <View style={styles.Info}>
                <Image source={writerImage}  style={styles.Image}/>
                <Text style={styles.writerName}>{writerName}</Text>
                <Text style={styles.postedTime}>{minutes} mins ago</Text>
            </View>
            <Text style={styles.posted}>{blog}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        alignItems:'center',
        width:"96%",
        flex:1,
        marginTop:10,
    },
    headerContainer: {
      marginRight: 10,
      flexDirection:'row',
    },
    icon:{
        marginLeft:15
    },
    icon1:{
        marginRight:10,
    },
    blogImage:{
        width:"90%"
    },
    header:{
        fontSize:20,
        textAlign:'left',
        fontWeight:'bold',
        marginHorizontal:20,
        marginVertical:10,
    },
    Info:{
        flexDirection:'row',
        alignSelf:'flex-start',
        marginHorizontal:20,
        alignItems:'center',
        marginVertical:10
    },
    Image:{
        width:40,
        height:40,
        borderRadius:20,
        marginRight:15
    },
    writerName: {
        fontSize: 14,
        marginRight: 5,
        fontWeight:'500'
        
      },
      postedTime: {
        fontSize: 12,
        color: 'gray',
        marginLeft:70
      },
      posted: {
        fontSize: 12,
        color: 'gray',
        marginHorizontal:15,
        textAlign:'left'
        
      },
  });

export default Details;
