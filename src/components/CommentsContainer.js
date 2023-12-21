import React from 'react'

const commentsData = [
    {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
        replies:[
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
                    {
                        name:"Akshay Saini",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                        replies:[
                            {
                                name:"Akshay Saini",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                                replies:[
                        
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
                    {
                        name:"Akshay Saini",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                        replies:[
                            {
                                name:"Akshay Saini",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                                replies:[
                        
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
        replies:[
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
        ]
    },
    {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
        replies:[
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
        ]
    },
    {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
        replies:[
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
        ]
    },
   
]

const Comment = ({data}) => {
    const {name,text,replies} = data
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg  my-2'>
            <img className='w-12 h-12'  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="usericon" />

            <div className='px-3'>
                <p>{name}</p>
                <p>{text}</p>
            </div>


        </div>
    )



}


const CommentList = ({comments}) => {
    return comments.map((comment,index)=>(
        <div key={index}>
            <Comment  data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies}/>
            </div>
        </div>
        
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer