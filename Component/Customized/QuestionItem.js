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
  
export default QuestionItem = ({id, title, page}) => (
    <View style={styles.item}>
        <Text style={[styles_general.appText, styles_general.textDark]}>{title}</Text>

        {(page=="SubmitQuiz") ? 

            <RadioButtonRN
                box={false}
                textStyle={styles.optionItem}
                activeColor='#FFD24C'
                data={data}
                selectedBtn={(e) => console.log(e.id, id)}
                />

            :
            
            <>
            
                <RadioButtonRN
                    box={false}
                    textStyle={styles.optionItem}
                    activeColor='#FFD24C'
                    initial={3}
                    data={data}
                    />
                
                <Text style={styles.correctAnswer}>
                    Correct answer: Option 3
                </Text>
            </>
        }
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
        color: '#251749',
        fontSize: 16,
    },
    correctAnswer: {
        marginVertical: 10,
        fontSize: 16,
        paddingVertical: 5,
        backgroundColor: '#FFD24C',
        color: '#251749',
        borderRadius: 10,
        fontWeight: 'bold',
    },
  });