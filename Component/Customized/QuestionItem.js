import { 
    Text, 
    View, 
  } from 'react-native';
import { StyleSheet } from 'react-native';
import styles_general from '../../Styles/styles_general';
import RadioButtonRN from 'radio-buttons-react-native';

const data = [
    {
      id: '1',
      label: 'Option 1'
     },
     {
      id: '2',
      label: 'Option 2'
     },
     {
      id: '3',
      label: 'Option 3'
     },
     {
      id: '4',
      label: 'Option 4'
     }
    ];
  
export default QuestionItem = ({id, title}) => (
  <View style={styles.item}>
    <Text style={[styles_general.appText, styles_general.textDark]}>{title}</Text>

    <RadioButtonRN
        box={false}
        textStyle={[styles_general.textDark,styles_general.appText, styles.optionItem]}
        activeColor='#FFD24C'
        data={data}
        selectedBtn={(e) => console.log(e.id, id)}
        />
  </View>
);

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 20,
      marginVertical: 15,
      marginHorizontal: 20,
      borderColor: '#212A3E',
      borderRadius: 15,
      borderWidth: 3,
      borderStyle: 'solid',
    },
    optionItem: {
        marginVertical: 5,
    },
  });