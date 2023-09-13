import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BlogItem = ({ image, title, writer, minutes , blog, navigation}) => {
    console.log(writer.name)
    
  return (
<TouchableOpacity onPress={() => {
  navigation.navigate("Beauty", {
    image: image,
    title: title,
    minutes: minutes,
    blog: blog,
    writerImage : writer.image,
    writerName : writer.name

  });
}}>

    <View style={styles.container}>
        <View style={styles.imageCon} >
      <Image source={image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <Image source={writer.image} style={styles.writerImage} />
          <Text style={styles.writerName}>{writer.name}</Text>
          <Text style={styles.postedTime}>{minutes} mins ago</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection:'row',
    width:"98%",
    alignSelf:'center',
    backgroundColor:'white',
    height:152,
    marginTop:0,
  },
  image: {
    width: 120,
    height: 140,
    paddingVertical:5,

  },
  imageCon: {
    width: 120,
    height: 150,
    marginRight: 20,
    paddingHorizontal:5,
    paddingVertical:5,
  },
  content: {
    flex: 1,
  },
  title: {
    marginTop:30,
    fontSize: 18,
    fontWeight: 'bold',
 

  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
  },
  writerImage: {
    width: 25,
    height: 25,
    borderRadius: 15,
    marginRight: 5,
  },
  writerName: {
    fontSize: 12,
    marginRight: 5,
  },
  postedTime: {
    fontSize: 12,
    color: 'gray',
    marginLeft:5
  },
});

export default BlogItem;
