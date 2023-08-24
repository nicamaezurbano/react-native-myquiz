import { 
    Text, 
    View, 
    TouchableOpacity,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import styles_general from '../../Styles/styles_general';
  
export default ButtonSecondaryLarge = ({title, navigation, navigateTo}) => (
  <TouchableOpacity style={styles.item}
  onPress={()=>{navigation.navigate(navigateTo)}}>
    <Text style={[styles.title, styles_general.textDark]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#FFD24C',
      borderRadius: 15,
      borderWidth: 3,
      borderStyle: 'solid',
      alignItems: 'center',
      elevation: 5,
    },
    title: {
      fontSize: 24,
    },
  });