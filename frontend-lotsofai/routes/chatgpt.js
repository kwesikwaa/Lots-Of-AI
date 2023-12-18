import { View, Text, FlatList, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import {useRef} from 'react'
import { signal } from '@preact/signals-react';
import { tochatai } from '../api/openaicall';

import { chats } from '../data';
import InputText from '../component/InputText';



export default function Chatgpt() {
    const flviewRef = useRef()

    const send = (val)=>{
        if(val.trim().length>0){
            Keyboard.dismiss()
            chats.value.push({'content':val.trim(),'key':chats.value.length+1,'role':'user'})
            // make api call
            tochatai(val.trim())
            scrollup()
        }
    }

    console.log('rendering.......to.........checking needless rendering........like useState does..............')

    //made this function to be called cos of the ref var it cannot be used diretly. hence the need for it to be in a fxn
    const scrollup =()=>{
        // to avoid the error:  'Cannot read property 'scrollToEnd' of null'
        // i added ?
        setTimeout(()=>flviewRef?.current?.scrollToEn,400)
    }
    scrollup()

    return (
        
        <View className="flex flex-col p-1 h-full w-full justify-between">
        <View className=" flex-1 mb-4">
            <FlatList data={chats.value} keyExtractor={(item)=>item.key} ref={flviewRef} 
                renderItem={({item})=>{
                    if (item.role==="assistant") {
                        return <View className="flex-row">
                                    <View className="flex-col my-1 min-w-max" style={{maxWidth:'85%'}}>
                                    <View className="bg-zinc-800 h-0.5 w-1"></View>
                                        <View className="bg-zinc-800 rounded-b-md rounded-r-md" >
                                            <Text className="p-2 text-white">{item.content}</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                    }
                    else if(item.role==="user") return <View className="flex-row justify-end">
                                    <View className="flex-col items-end my-1 min-w-max" style={{maxWidth:'85%'}}>
                                        <View className="bg-zinc-800 rounded-t-md rounded-l-md" >
                                            <Text className="p-2 text-white">{item.content}</Text>
                                        </View>
                                        <View className="bg-zinc-800 h-0.5 w-1"></View>
                                    </View>
                                </View>
                    
                }
                }
            />
            </View>
        <InputText send={send} />
        </View>
)
}