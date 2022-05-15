import {ChangeEvent} from 'react';

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
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType,
    _rerenderEntireTree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => StateType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}
type AddPostActionType = {
    type: 'ADD-POST',
}
type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

let store: StoreType = {
    _state: {
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
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                counts: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        }
    }
}

export default store
