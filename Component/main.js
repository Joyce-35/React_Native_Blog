import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BlogListScreen from './BlogListScreen';

const Main = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Ionicons name="search" size={35} color="#27273b" />
            </View>
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="options" size={35} color="#27273b" />
            </View>
          ),
        });
      }, []);
    return (
        <View style={styles.container} >
           <BlogListScreen  navigation={navigation}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        width:"96%",
        flex:1,
        marginTop:20,
        backgroundColor:'#dadae3',
    },
  });
export default Main;
