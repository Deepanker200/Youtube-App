import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({ info }) => {
    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const isMenuOpen = useSelector((state) => state.app.isMenuOpen)


    return (
        <div className={'p-2 m-2 shadow-lg rounded-lg md:w-[400px]' + (isMenuOpen ? ' w-[300px]' : ' w-[300px]')}>
            <img className='rounded-lg md:w-[400px]'
                src={thumbnails.medium.url} />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export const AdVideoCard = ({ info }) => {
    return (
        <div className='p-1 m-1 border border-red-900'>
            <label className="absolute bg-red-500 text-white p-2">Promoted</label>

            <VideoCard info={info} />
        </div>
    )
};

export default VideoCard