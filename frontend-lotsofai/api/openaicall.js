import {APIKEY} from '../env.js'
import { chats } from '../routes/chatgpt.js'
import { aigenimages } from '../routes/textToImage.js'

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