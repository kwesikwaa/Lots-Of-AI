import APIKEY from '../env.js'

const header = {
    "Authorization": `Bearer ${APIKEY}`,
    "Content-Type": "application/json"
}
const chaturl =''
const dalleurl =''

messages:[
    {"role":"system",
        "content":'You are an assistant. You give brief and straightforward responses. You make your responses feel human, a bit jovial sometimes but mostly conscise'}
]

export const tochatai = async(prompt)=>{
    messages.push = {"role":"user","content":prompt.trim()}
    try{

        const res = await fetch(chaturl,
            {
                headers:header,
                method: "POST",
                body: JSON.stringify({
                    "model": 'gpt-3.5-turbo',
                    "messages":messages
                })
            }
        )
        result = await res.json()
        unwrap = result.choices[0].message.content
        messages.push({"role":"assistant","content":unwrap})
        return unwrap
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
                    "prompt":prompt,
                    "n":1,
                    "size":'1024*1024'
                })
            }    
        )

        result = await res.json()
        unwrap = result.data.data[0].url
        dallearray.push({prompt:prompt,result:unwrap})
        // push this unto the dalle set stack and save locally
    }
    catch(error){
        console.log(error)
    }
}