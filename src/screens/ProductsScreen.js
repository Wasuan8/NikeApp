import { StyleSheet, Text, View,FlatList,Image,Pressable } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/ProductsSlice';

const ProductsScreen = ({navigation}) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  return (
    <FlatList
    data={products}
    renderItem={({ item }) => (
      <Pressable onPress={() =>{ 
        dispatch(productsSlice.actions.setSelectedProduct(item.id));

        navigation.navigate('Products Details');
      }} 
      style={styles.itemcontainer}>
        <Image source={{ uri: item.image }} style={styles.Image} />

      </Pressable>
      
    )}
    numColumns={2}
  />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    itemcontainer:{
        width:'50%',
        padding: 1,
    
    
      },
      Image: {
        width: "100%",
        aspectRatio: 1
      }
})