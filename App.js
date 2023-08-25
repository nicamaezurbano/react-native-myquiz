import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Component/Authentication/Login';
import Register from './Component/Authentication/Register';
import Home from './Component/Home/Home';
import EditName from './Component/Home/EditName';
import ChangePassword from './Component/Home/ChangePassword';

import JoinQuiz from './Component/AnswerQuiz/JoinQuiz';
import StartQuiz from './Component/AnswerQuiz/StartQuiz';
import SubmitQuiz from './Component/AnswerQuiz/SubmitQuiz';
import QuizResult from './Component/AnswerQuiz/QuizResult';
import DisplayAnswers from './Component/AnswerQuiz/DisplayAnswers';

import DisplayQuizzes from './Component/ManageQuiz/DisplayQuizzes';
import CreateQuiz from './Component/ManageQuiz/CreateQuiz';

import DisplayQuestions from './Component/ManageQuestion/DisplayQuestions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="EditName" component={EditName} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
        
        <Stack.Screen name="JoinQuiz" component={JoinQuiz} options={{ headerShown: false }} />
        <Stack.Screen name="StartQuiz" component={StartQuiz} options={{ headerShown: false }} />
        <Stack.Screen name="SubmitQuiz" component={SubmitQuiz} options={{ headerShown: false }} />
        <Stack.Screen name="QuizResult" component={QuizResult} options={{ headerShown: false }} />
        <Stack.Screen name="DisplayAnswers" component={DisplayAnswers} options={{ headerShown: false }} />

        <Stack.Screen name="DisplayQuizzes" component={DisplayQuizzes} options={{ headerShown: false }} />
        <Stack.Screen name="CreateQuiz" component={CreateQuiz} options={{ headerShown: false }} />

        <Stack.Screen name="DisplayQuestions" component={DisplayQuestions} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}