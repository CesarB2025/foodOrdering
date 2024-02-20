import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '../../../assets/data/products';

const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source = {{uri: product.image}} style= {styles.image}/>
      <Text style = {styles.title }>{product.name}</Text>
      <Text style = {styles.prices}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius:20,
  },
  image:{
    width:'100%',
    aspectRatio:1,
  },
  title:{
    fontSize: 20, 
    fontWeight: '700'},
  prices:{
    color: Colors.light.tint,
  }
});