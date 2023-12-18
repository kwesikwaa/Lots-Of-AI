import { View, Text,Image, FlatList, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import {useRef} from 'react'
import { signal } from '@preact/signals-react';

import { todalle } from '../api/openaicall';

import { aigenimages } from '../data';
import InputText from '../component/InputText';


export default function TextToImage() {
    const flviewRef = useRef()
    

    const send =(val)=>{
        if(val.trim().length>0){
            Keyboard.dismiss()
            aigenimages.value.push({'prompt':val.trim(),'key':aigenimages.value.length+1,'images':''})
            
            todalle(val.trim(),aigenimages.value.length-1)
            scrollup()   
        }   
    }

    const scrollup =()=>{
        // to avoid the error:  'Cannot read property 'scrollToEnd' of null'
        // i added ?
        setTimeout(()=>flviewRef?.current?.scrollToEnd(),400)
    }
    scrollup()
    
    console.log('parent rubuilind...')
    return (
    <View className="flex flex-col p-1 h-full w-full justify-between">
        <View className="flex-1 mb-4">
            <FlatList data={aigenimages.value} keyExtractor={(item)=>item.key} ref={flviewRef}
                renderItem={({item})=>(
                    <View className="bg-zinc-800 flex flex-col items-end rounded-b-md rounded-r-md w-full my-2 px-2 pb-4  min-h-max">
                        <Text className=" my-2 text-right text-white">{item.prompt}</Text>
                        <View className="bg-zinc-600 h-72 w-11/12">
                            {/* {item.image && <Image source={item.image} className = " w-full h-full object-contain" />} */}
                        </View>
                    </View>
                )}
            />
        </View>
        <InputText send={send} />
    </View>
    )
}