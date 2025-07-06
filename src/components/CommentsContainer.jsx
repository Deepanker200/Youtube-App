import React from 'react'

const commentsData = [
    {
        name: "Deepanker Tiwari",
        text: "Subscribed the channel",
        replies: [
            {
                name: "Deepanker Tiwari",
                text: "Subscribed the channel",
                replies: [],
            },
            {
                name: "Deepanker Tiwari",
                text: "Subscribed the channel",
                replies: [],
            },
            {
                name: "Deepanker Tiwari",
                text: "Subscribed the channel",
                replies: [
                    {
                        name: "Deepanker Tiwari",
                        text: "Subscribed the channel",
                        replies: [],
                    },
                ]
            }
        ],
    },
    {
        name: "Vansh Jain",
        text: "I also subscribed",
        replies: [
            {
                name: "Deepanker Tiwari",
                text: "Subscribed the channel",
                replies: [],
            },
        ]
    },
     {
        name: "Lakshay Gupta",
        text: "I also subscribed X 100",
        replies: [
            {
                name: "Deepanker Tiwari",
                text: "Subscribed the channel",
                replies: [],
            },
        ]
    }
];

const Comment = ({ data }) => {

    const { name, text, replies } = data;

    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img
                alt='user'
                className='h-12'
                src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>

            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) =>
    (
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies}/>   
                      {/* //Recursion in Components */}
            </div>
        </div>
    ));
}

const CommentsContainer = () => {

    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            {/* <Comment data={commentsData[0]} /> */}
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer