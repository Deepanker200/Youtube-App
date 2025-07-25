import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomComment, generateRandomName } from '../utils/helper';


const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");


    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //API Polling
            // console.log("API POLLING");

            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomComment()
            })
            );

        }, 1000);


        return () => clearInterval(i)
    }, [])

    return (
        <>
            <div className='w-full h-[350px] md:h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {chatMessages.map((c, i) =>
                    <ChatMessage key={i} name={c.name} message={c.message} />
                )}

            </div>

            <form className='w-full p-2 ml-2 border border-black'
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Form Submit: ", liveMessage);
                    dispatch(addMessage({
                        name: "Deepanker",
                        message: liveMessage
                    }))
                    setLiveMessage("");
                }}>
                <input className='w-80 border border-black rounded-lg' type='text' value={liveMessage} onChange={(e) => {
                    setLiveMessage(e.target.value);
                }} />
                <button className='px-2 mx-2 bg-green-100'>Send</button>
            </form>
        </>
    )
}

export default LiveChat