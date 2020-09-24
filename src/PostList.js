import React, { Component } from 'react'
import PostData from './data/example.json'

class PostList extends Component {
    render() {
        return (
            <div>
                <h1 class="title">Skill Tree</h1>
                {PostData.map((postDetail, index) => {
                    return <div>
                        <h4>User name : {postDetail._id}</h4>
                        <h4>ID : {postDetail.userId}</h4>
                    </div>
                })}
            </div>
        )
    }
}

export default PostList