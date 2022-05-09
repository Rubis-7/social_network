

// let rerenderEntireTree = (state: StateType) => {
//     console.log('State changed')
// }

import {rerenderEntireTree} from '../index';

type MessagesDataType = {
    id: number
    message: string
}
type DialogsDataType = {
    id: number
    name: string
}
type PostsDataType = {
    id: number
    message: string
    counts: number
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export type StateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export let state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', counts: 15},
            {id: 2, message: 'It is my first post', counts: 18},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    },
}

export const addPost = () => {
    const newPost: PostsDataType = {
        id: 5,
        message: state.profilePage.newPostText,
        counts: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
