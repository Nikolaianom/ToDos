import React from 'react'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import "./ToDoNav.scss"
import Button from '../Button/Button'

const ToDoNav = ( {toggleGridToList , gridToList}) => {


  return (
    <div className='nav'>
        <h2 className='nav__title'>Все заметки</h2>
        {
        gridToList ? <Button click={toggleGridToList}>
            <GlobalSvgIcons  id="grid"/>
            <p className="nav__btn-text">Сетка</p>
        </Button>
        :
        <Button click={toggleGridToList}>
            <GlobalSvgIcons  id="list"/>
            <p className="nav__btn-text">Список</p>
        </Button>
        }
    </div>
  )
}

export default ToDoNav