import { 
    Text, 
    View, 
  } from 'react-native';
import { StyleSheet } from 'react-native';
  
export default ItemPrimary = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#212A3E',
      borderRadius: 15,
      borderWidth: 3,
      borderStyle: 'solid',
    },
    title: {
      fontSize: 16,
    },
  });