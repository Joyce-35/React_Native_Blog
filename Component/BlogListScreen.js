import React from 'react';
import { FlatList, View } from 'react-native';
import BlogItem from './BlogItem';

const BlogListScreen = ({navigation}) => {
  const blogData = [
    {
      id: 1,
      image: require('../assets/Blog1.png'),
      title: 'Does Dry is January Actually Improve Your Health',
      writer: {
        image: require('../assets/Author.jpeg'),
        name: 'Joyce Adzokatse',
      },
      minutes: 4,
      blog:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        id: 2,
        image: require('../assets/Blog2.png'),
        title: 'How to Seem Like You Always Have Your Shot Together',
        writer: {
          image: require('../assets/Author.jpeg'),
          name: 'Joyce Adzokatse',
        },
        minutes: 4,
        blog:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 3,
        image: require('../assets/Blog3.png'),
        title: 'Does Dry is January Actually Improve Your Health',
        writer: {
          image: require('../assets/Author.jpeg'),
          name: 'Joyce Adzokatse',
        },
        minutes: 4,
        blog:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
      {
        id: 4,
        image: require('../assets/Blog4.png'),
        title: 'You do hire a designer to make something. Your hire them',
        writer: {
          image: require('../assets/Author.jpeg'),
          name: 'Joyce Adzokatse',
        },
        minutes: 4,
        blog:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      },
    // Add more blog items here...
  ];

  return (
    <View>
      <FlatList
        data={blogData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BlogItem
            image={item.image}
            title={item.title}
            writer={item.writer}
            minutes={item.minutes}
            blog = {item.blog}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default BlogListScreen;
