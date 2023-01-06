import React, {useState} from 'react'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import Modal from '../Modal/Modal'

import './ListItem.scss'

const ListItem = ( { gridToList, todo, onEditTodos, onDeleteTodos } ) => {
    const {title, date, content} = todo
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(title)
    const [editContent, setEditContent] = useState(content)

    
    const editTodo = () => {
        setEdit(true)
    }

    const closeModal = () => {
        setEdit(false)
    }

    const deleteTodo = () =>{
        onDeleteTodos(todo.id)
    }
    const editTodoClose = () => {
        if(editTitle && editContent) {
            onEditTodos(todo.id, editTitle, editContent)
            setEdit(false)
            setEditTitle(editTitle)
            setEditContent(editContent)
        }else {
            alert('Заполните все поля')
        }
    }
 
    
  return (
<>
        <div className='list'>
        <div className={gridToList ? 'list__wrapper active' : 'list__wrapper'}>
            <h2 className='list__title'>{title}</h2>
            <p className='list__date'>{date}</p>
        </div>
        <p className='list__description'>{content}</p>
        <div className='list__btns'>
            <button onClick={editTodo}>
                <GlobalSvgIcons id='edit' />
                <span>РЕДАКТИРОВАТЬ</span>
            </button>
            <button onClick={deleteTodo}>
                <GlobalSvgIcons id='trash' />
                <span>УДАЛИТЬ</span>
            </button>
        </div>
    </div>
    <Modal 
        text='изменить'
        openModal={edit}
        title={editTitle}
        setTitle={setEditTitle}
        content={editContent}
        setContent={setEditContent}
        addAndEdit={editTodoClose}
        close={closeModal}
    />
</>
  )
}

export default ListItem