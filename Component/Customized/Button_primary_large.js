import { 
    Text, 
    TouchableOpacity,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import styles_general from '../../Styles/styles_general';
  
export default ButtonPrimaryLarge = ({title, navigation, navigateTo}) => (
  <TouchableOpacity style={styles.item}
  onPress={()=>{navigation.navigate(navigateTo)}}>
    <Text style={[styles.title, styles_general.textDark]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFD24C',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 15,
      alignItems: 'center',
      elevation: 5,
    },
    title: {
      fontSize: 24,
    },
  });