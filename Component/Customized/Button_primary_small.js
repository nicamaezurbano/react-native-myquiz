import { 
    Text, 
    TouchableOpacity,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import styles_general from '../../Styles/styles_general';
import { getWindowWidth } from '../../utils/Constants';

const windowWidth = getWindowWidth();
  
export default ButtonPrimarySmall = ({title, navigation, navigateTo}) => (
  <TouchableOpacity style={styles.item}
  onPress={()=>{navigation.navigate(navigateTo)}}>
    <Text style={[styles.title, styles_general.textDark]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFD24C',
      padding: 15,
      width: (windowWidth/2)-28,
      borderRadius: 15,
      alignItems: 'center',
      elevation: 5,
    },
    title: {
      fontSize: 16,
    },
  });