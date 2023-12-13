
import {NavigationContainer} from '@react-navigation/native'
import { SafeAreaView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';S
// import { SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';


import TextToImage from './routes/textToImage';
import Chatgpt from './routes/chatgpt';
import Transcriptor from './routes/transcriptor';
import Translator from './routes/translator';
import ImageToText from './routes/imageToText';
import { Icon } from 'react-native-paper'


export default function App() {

	
	const Tab = createBottomTabNavigator()
	// const Stack = createNativeStackNavigator();

  return (
	<>
		<NavigationContainer>
			<Tab.Navigator initialRouteName='translator'
				screenOptions={({route,navigation})=>({
					tabBarIcon:({color, focused, size})=>{
						let iconName;
						if(route.name === "text_to_image"){
							iconName = focused?"image-edit":"image-edit-outline"
						}
						else if(route.name === "chatgpt"){
							iconName = focused?"comment-text-multiple":"comment-text-multiple-outline"
						}
						else if(route.name === "transcriptor"){
							iconName = focused?"home":"home-outline"
						}
						else if(route.name === "translator"){
							iconName = focused?"home":"home-outline"
						}
						else if(route.name === "image_to_text"){
							iconName = focused?"notebook-edit":"notebook-edit-outline"
						}
						return <Icon source={iconName} size={25} />

					},
					tabBarActiveTintColor: "red",
					// tabBarInactiveTintColor: "gray"
					tabBarShowLabel: false
				})}
			>
				<Tab.Screen name="text_to_image"  component={TextToImage} />
				<Tab.Screen name="chatgpt" component={Chatgpt} />
				<Tab.Screen name="image_to_text" component={ImageToText} />
				<Tab.Screen name="transcriptor" component={Transcriptor} />
				<Tab.Screen name="translator" component={Translator} />
				
			</Tab.Navigator> 
		</NavigationContainer> 
	
	</>
  );
}

