import { 
    Text, 
    View, 
    TouchableOpacity,
  } from 'react-native';
import { StyleSheet } from 'react-native';
import styles_general from '../../Styles/styles_general';
import { getWindowWidth } from '../../utils/Constants';

const windowWidth = getWindowWidth();
  
export default ButtonSecondarySmall = ({title, navigation, navigateTo}) => (
  <TouchableOpacity style={styles.item}
  onPress={()=>{navigation.navigate(navigateTo)}}>
    <Text style={[styles.title, styles_general.textDark]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 15,
      width: (windowWidth/2)-28,
      borderColor: '#FFD24C',
      borderRadius: 15,
      borderWidth: 3,
      borderStyle: 'solid',
      alignItems: 'center',
      elevation: 5,
    },
    title: {
      fontSize: 16,
    },
  });