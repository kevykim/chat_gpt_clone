import {  useState } from 'react'


import  './chat.css'

function Chat() {
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    // const list = []

    const onSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true)

        setTimeout(() => {
            setSubmitted(false)
        }, 5000)
    }

    // useEffect(() => {
    //     list.push(message)
    // }, [message, list])


    return (
        <>
        <form onSubmit={onSubmit} id="chat_container">
            <div>Questions??</div>
            <input type='text' placeholder='Type your question...' value={message} onChange={(event) => setMessage(event.target.value)}></input>
            <button type='submit'>Send</button>
        </form>
        {submitted === true ? <div>{message}</div> : <div></div>}
        </>
    )
}


export default Chat 