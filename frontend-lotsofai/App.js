import React from 'react'
import {View,Text} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator,} from '@react-navigation/material-bottom-tabs'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';


import TextToImage from './routes/textToImage';
import Chatgpt from './routes/chatgpt';
import Transcriptor from './routes/transcriptor';
import Translator from './routes/translator';
import ImageToText from './routes/imageToText';


export default function App() {

	// const Tab = createMaterialBottomTabNavigator();
	const Tab = createBottomTabNavigator()
	// const Stack = createNativeStackNavigator();

  return (
	<>
		<NavigationContainer>
			<Tab.Navigator initialRouteName='text_to_image'>
				<Tab.Screen name="text_to_image" component={TextToImage} 
					/*options={{tabBarIcon: "image-edit"}}*/ />
				<Tab.Screen name="chatgpt" component={Chatgpt}
					/*options={{tabBarIcon:"chat-plus"}}*/ />
				<Tab.Screen name="transcriptor" component={Transcriptor} 
					/*options={{tabBarIcon:"text-to-speech"}}*//>
				<Tab.Screen name="translator" component={Translator} 
					/*options={{tabBarIcon:"translate"}}*//>
				<Tab.Screen name="image_to_text" component={ImageToText} 
					/*options={{tabBarIcon:"image-text"}}*//>
			</Tab.Navigator> 
		</NavigationContainer> 
	
	</>
  );
}

