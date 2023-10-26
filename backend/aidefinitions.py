# only a test file
from decouple import config
from PIL import Image
import openai
import pyttsx3
import easyocr

APIKEY= config('APIKEY')
API_KEY = config('API_KEY')

openai.api_key = APIKEY
audiomodel = 'whisper-1'


history = [
    {"role":"system","content":'You are an assistant. You give brief and straightforward responses. You make your responses feel human, a bit jovial sometimes but mostly conscise'}
]


# frontend inputs audio, the audio is transcribed via audioToText function, results sent to chatassistant, results from chatassistant sent to speaktheresult function
# keep chat records by appending questions to database...could be helpful


def chatassistant(quest: str):
    question = history.append({"role":"user", "content":quest})
    
    queryresult = openai.ChatCompletion.create(
        model= 'gpt-3.5-turbo',
        messages = question
    )
    result = queryresult.choices[0].message.content
    question.append({"role":"assistant", "content": result})
    
    return result


def audioToText(audiofile: str):
    mediafile = open(audiofile,'rb')

    result = openai.Audio.transcribe(
        api_key= API_KEY,
        model= audiomodel,
        file = mediafile,
        # response_format='text'
    )
    return result.text


def audioTranslate(audiototranslate: str):
    mediafile = open(audiototranslate,'rb')
    translate = openai.Audio.translate(
        api_key=API_KEY,
        model=audiomodel,
        file=mediafile,
        
        # prompt='the file is in german'
    )
    return translate['text']


def textToIMage(prompt: str):
    response = openai.Image.create(
        prompt = prompt,
        n=1,
        size = '1024x1024'
    )
    imagelink = response.data[0].url
    print(imagelink)


easyread = easyocr.Reader(['en'],gpu=True)

def imageToText(image: str):
    text = easyread.readtext(image)



# imagegenerate('3d render. a little african girl. white dreadlocks. smiling. holding ice cream. standing in the street. bright background out of depth medium shot. sylized. hyperealistic render. cinematic scene')




def speaktheresult(result: str):
    ts = pyttsx3.init()
    # say = input('say something: ')
    print(result)
    ts.setProperty('voice',ts.getProperty('voices')[1].id)
    ts.say(result)
    # ts.save_to_file('savefilename.mp3')
    ts.runAndWait()

if __name__ == "__main__:":
    speaktheresult('Hey there, we are hear to ensure everything is going to work')
    # print(audioToText('speechtestfile.mp4'))
    # print(audioTranslate('portuguesefiletest.mp4'))
    # print(f'------>>>>>>>> DONE')
    # print(audioTranslate('germantestfile.mp4'))



