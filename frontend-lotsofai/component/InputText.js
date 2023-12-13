import { useState } from "react"
import { TextInput, TouchableOpacity, View, Text } from "react-native"


// this component is necessary. cos the rerendering only happens here which is more efficient
// than allowing it to force an entire tree to rebuuild

export default function InputText({send}){
    const [text,setText] = useState('')

    return (
        <View className=" flex flex-row justify-between mb-4 space-x-1 items-end rounded-md w-full bg-neutral-800 shadow-md">
            <TextInput value= {text} placeholder='Enter Prompt' placeholderTextColor="white" multiline className=" text-white w-5/6 py-1.5 px-1.5"  onChangeText={setText}/>
            <TouchableOpacity className="p-1.5 border border-zinc-300" onPress={()=>{if(text)send(text);setText()}}>
                <Text className=" text-white text-xl"> send</Text>
            </TouchableOpacity>
        
        </View>
    )
}
