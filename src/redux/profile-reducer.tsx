import React from 'react';
import {PostsDataType} from './state';

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export let updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: newText
    } as const
}

const profileReducer = (state: any, action: any) => {

    if (action.type === 'ADD-POST') {
        const newPost: PostsDataType = {
            id: new Date().getTime(),
            message: state.profilePage.newPostText,
            counts: 0
        }
        state.profilePage.postsData.push(newPost)
        state.profilePage.newPostText = ''

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.profilePage.newPostText = action.newText
    }
    return state
}

export default profileReducer;