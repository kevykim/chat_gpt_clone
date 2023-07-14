import {  useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

import  './chat.css'

function Chat() {
    const [message, setMessage] = useState('')
    const [result, setResult] = useState()
    const [submitted, setSubmitted] = useState(false)
    
    // const list = []

    const apiKey = import.meta.env.VITE_API_KEY

    
    async function onSubmit(event) {
        event.preventDefault();
        setSubmitted(true)
        const chatgpt = new OpenAIApi(new Configuration({
            apiKey: apiKey
        }))
    
        await chatgpt.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: message}]
        }).then((res) => {
        setResult(res.data.choices[0].message.content)
        })
        
        // setTimeout(() => {
        //     setSubmitted(false)
        // }, 5000)
    }

    // useEffect(() => {
    //     list.push(message)
    // }, [message, list])


    return (
        <div className='chat_div'>
        <form onSubmit={onSubmit} className='chat_form'>
            <div>Questions??</div>
            <div>
            <input type='text' placeholder='Type your question...' value={message} onChange={(event) => setMessage(event.target.value)}></input>
            <button type='submit'>Send</button>
            </div>
        {submitted === true ? <div>{result}</div> : <div></div>}
        </form>
        </div>
    )
}


export default Chat 