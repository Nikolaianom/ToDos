import React, {useState} from 'react'
import GlobalSvgIcon from '../../assets/icons/GlobalSvgIcons'
import './ToDoHeader.scss'
import Search from '../Search/Search'

const ToDoHeader = ({ openSearch, setOpenSearch , search, setSearch }) => {
  

 

  

  const handleOpenSearch = () => {
    setOpenSearch(true)
  }
  
  const handleCloseSearch = () => {
    setOpenSearch(false)
    setSearch('')
  }

  const handleBackSearch = () => {
    setOpenSearch(false)
  }

  return (
    openSearch ? 
    <Search handleCloseSearch={handleCloseSearch}
    search={search}
    setSearch={setSearch}
    handleBackSearch={handleBackSearch}
    />
    :
    <div className='todoHeader'>
        <h2 className='todoHeader__title'>Заметки</h2>
        <div onClick={handleOpenSearch} className='todoHeader__icon'>
            <GlobalSvgIcon id='search'/>
        </div>
    </div>
  )
}

export default ToDoHeader