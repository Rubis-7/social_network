import React from 'react';
import {PostsDataType, StateType} from './state';

type addMessageActionType = ReturnType<typeof updateNewMessageBodyCreator>
type sendMessageType = ReturnType<typeof sendMessageCreator>

 let sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}
 let updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY', body: body
    } as const
}

const dialogsReducer = (state: any, action: any) => {

    if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.dialogsPage.newMessageBody = action.body

    } else if (action.type === 'SEND_MESSAGE') {
        let body = state.dialogsPage.newMessageBody
        state.dialogsPage.newMessageBody = '';
        state.dialogsPage.messagesData.push({id: 6, message: body})

    }
    return state
};

export default dialogsReducer;