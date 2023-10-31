import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  return (
	//<SafeAreaView>
		<View style={styles.container}>
      
			<Text>Running offline hopefully it runs well oh yes t does!</Text>
			<TouchableOpacity className="bg-red-200 p-4 rounded-md my-4">
				<Text>BUTTONO</Text>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	//</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
