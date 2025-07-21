import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <>
            <div className='mt-24 px-5 w-full'>
                <div className='flex flex-col sm:flex-row'>
                    <div>
                        <iframe className='w-full h-[240px] md:w-[900px] md:h-[600px]'
                            src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className='w-full order-2 mt-8 md:mt-0'>
                        <LiveChat />
                    </div>
                </div>
                <CommentsContainer />
            </div>
        </>
    )
}

export default WatchPage