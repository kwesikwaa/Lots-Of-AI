
import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator,} from '@react-navigation/material-bottom-tabs'


import TextToImage from './routes/textToImage';
import Chatgpt from './routes/chatgpt';
import Transcriptor from './routes/transcriptor';
import Translator from './routes/translator';
import ImageToText from './routes/imageToText';


export default function App() {

	const Tab = createMaterialBottomTabNavigator();

  return (
	<>
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="text_to_image" component={TextToImage} 
					options={{tabBarIcon: "image-edit"}} />
				<Tab.Screen name="chatgpt" component={Chatgpt}
					options={{tabBarIcon:"chat-plus"}} />
				<Tab.Screen name="transcriptor" component={Transcriptor} 
					options={{tabBarIcon:"text-to-speech"}}/>
				<Tab.Screen name="translator" component={Translator} 
					options={{tabBarIcon:"translate"}}/>
				<Tab.Screen name="image_to_text" component={ImageToText} 
					options={{tabBarIcon:"image-text"}}/>
			</Tab.Navigator> 
		</NavigationContainer> 
		{/* <View><Text>Hi there</Text></View> */}
	</>

  );
}


// npm i react-navigation
// useRouter from 'expo-router'


//  expo install react-native-gesture-handler react-native-reanimated

// npm i react-navigation-stack