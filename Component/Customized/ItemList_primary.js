import { 
    Text, 
    TouchableOpacity, 
  } from 'react-native';
import { StyleSheet } from 'react-native';
import { getWindowWidth } from '../../utils/Constants';

const windowWidth = getWindowWidth()
  
export default ItemPrimary = ({ id, title, navigation, navigateTo}) => (
  <TouchableOpacity style={styles.item} 
  onPress={()=>{navigation.navigate(navigateTo, {id: {id}})}}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
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
      width: windowWidth-40,
    },
    title: {
      fontSize: 16,
    },
  });