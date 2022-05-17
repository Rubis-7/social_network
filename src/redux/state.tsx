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
    newMessageBody: string
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
    dispatch: (action: AddPostActionType | ChangeNewTextActionType | addMessageActionType | sendMessageType) => void
}
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type ChangeNewTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type addMessageActionType = ReturnType<typeof updateNewMessageBodyCreator>
type sendMessageType = ReturnType<typeof sendMessageCreator>
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | addMessageActionType | sendMessageType

export let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export let updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY', body: body
    } as const
}
export let sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}
export let updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: newText
    } as const
}

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
            ],
            newMessageBody: ''
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
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._rerenderEntireTree()
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 6, message: body})
            this._rerenderEntireTree()
        }
    }
}

export default store
