import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard ,{AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json();
    // console.log(json.items);
    setVideos(json?.items);
  }


  if (!videos[0]) return null;


  return (
    <div className='flex flex-wrap justify-around'>
      { videos[0] &&<AdVideoCard info={videos[0]}/>}
      {videos.map((video) =>
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      )}
    </div>
  )
}


export default VideoContainer