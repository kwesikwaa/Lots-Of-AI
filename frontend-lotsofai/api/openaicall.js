import {APIKEY,GAPI} from '../env.js'
import { aigenimages,chats } from '../data';

import { GoogleGenerativeAI, HarmBlockThreshold,HarmCategory } from '@google/generative-ai'

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_UNSPECIFIED,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    }
]

const header = {
    "Authorization": `Bearer ${APIKEY}`,
    "Content-Type": "application/json"
}
const chaturl ='https://api.openai.com/v1/chat/completions'
const dalleurl ='https://api.openai.com/v1/images/generations'

export const tochatai = async(prompt)=>{
    console.log(prompt)
    // chats.value.push = {"role":"user","content":prompt.trim()}
    console.log(chats.value)
    try{

        const res = await fetch(chaturl,
            {
                headers:header,
                method: "POST",
                body: JSON.stringify({
                    "model": 'gpt-3.5-turbo',
                    "messages":chats.value
                })
            }
        )
        result = await res.json()
        unwrap = result.choices[0].message.content
        console.log(unwrap)
        chats.value.push({"role":"assistant","content":unwrap,key:chats.value.length+1})
    }
    catch(error){
        console.log(error)
        
    }
}


// use the index to point to match the exact prompt
export const todalle = async(prompt,index)=>{

    try{
        const res = await fetch(dalleurl,
            {
                headers:header,
                method:"POST",
                body:JSON.stringify({
                    "model":'dall-e-3',
                    "prompt":prompt,
                    "n":1,
                    "size":'1024*1024'
                })
            }    
        )

        result = await res.json()
        unwrap = result.data.data[0].url
        aigenimages.value[index].images=unwrap
    }
    catch(error){
        console.log(error)
    }
}


// akan voice => akan to english => make openai or gemini api call => save that and use akan TTS
export const audioToLocalLang= async(audio,language='tw')=>{
    // make call to convert to english
    // return result
    const url = `https://translation-api.ghananlp.org/asr/v1/transcribe?language=${language}`
    const roam = await fetch(url,{
        method: "POST",
        headers:{
            "Content-Type":"audio/mpeg"
        },
        body: 
    })
    return roam.json()
}

export const pushToGemini= async (result)=>{
    const model = genAI.getGenerativeModel({ model: "gemini-pro", safetySettings});
    const query = 'tell me a little bit about kwame nkrumah'
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = response.text();
    // console.log(text);
    // now make the call
    await resultToLocalLang(text)
}

export const resultToLocalLang=async(fromGemini)=>{
    const url = "https://translation-api.ghananlp.org/v1/translate"
    const totranslate = {"in":fromGemini,"lang":"en-tw"}
    
    const roam = await fetch(url,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(totranslate)
    })
    return roam.json()
}

export const localLangTTS= async(text,lang='tw')=>{
    const url = "https://translation-api.ghananlp.org/tts/v1/tts"
    const toconvert = {"text":text, "language":lang}

    const roam = await fetch(url,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(toconvert)
    })
    return roam.json()

}