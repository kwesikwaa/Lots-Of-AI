from decouple import config
import openai


APIKEY= config('APIKEY')
API_KEY = config('API_KEY')

openai.api_key = APIKEY
audiomodel = 'whisper-1'


history = [
    {"role":"system","content":'You are an assistant. You give brief and straightforward responses. You make your responses feel human, a bit jovial sometimes but mostly conscise'}
]


def chatassistant(quest: str):
    question = history.append({"role":"user", "content":quest})
    
    queryresult = openai.ChatCompletion.create(
        model= 'gpt-3.5-turbo',
        messages = question
    )
    result = queryresult.choices[0].message.content
    question.append({"role":"assistant", "content": result})
    
    return result


def textToIMage(prompt: str):
    response = openai.Image.create(
        prompt = prompt,
        n=1,
        size = '1024x1024'
    )
    imagelink = response.data[0].url
    


