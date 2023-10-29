import React from 'react'
// import component 
import PostItem from './post_item'
function getPostItem(input){
    return input.map(ele =>{
        return <PostItem ele={ele}/>
    })
}
function PostsList(props){
    return React.createElement(
                                'div',
                                {
                                    className:'posts-list'
                                },
                                getPostItem(props.input)
                                )
}
export default PostsList
