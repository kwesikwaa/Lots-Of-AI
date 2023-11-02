
import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView, Button } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function App() {
  return (
	//<SafeAreaView>
		<View className='flex justify-center items-center bg-slate-100'>
			<Text>Running offline hopefully it runs well oh yes t does!</Text>
			<TouchableOpacity className="bg-red-200 p-4 rounded-md my-4">
				<Text>BUTTONO</Text>
			</TouchableOpacity>
			<TouchableOpacity className="bg-red-200 p-4 rounded-md my-4">
				<MaterialIcons name='delete' />
			</TouchableOpacity>
		</View>
	//</SafeAreaView>
  );
}


// npm i react-navigation


//  expo install react-native-gesture-handler react-native-reanimated

// npm i react-navigation-stack