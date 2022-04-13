import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {StateType} from '../../redux/state';

type dataStateType={
    dataState:StateType
}

export const Dialogs = (props:dataStateType) => {

    let dialogsElements = props.dataState.dialogsPage.dialogsData.map((d)=><DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dataState.dialogsPage.messagesData.map((m)=><Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};
function mapStateToProps(state:StateType) {
    return {
        dataState: state
    }
}
