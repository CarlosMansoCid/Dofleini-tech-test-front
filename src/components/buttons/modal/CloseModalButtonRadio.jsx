import { useContext } from 'react'
import {FaTimes} from 'react-icons/fa'
import { ModalContext } from '../../../contexts/ModalContext'
import './closeModalButton.styles.css'

const CloseModalButtonRadio = () => {

  const context = useContext(ModalContext)
  
  const handleClose = () =>{
    context.setModalPayload({})
    context.closeModal()
  }
  
  return (
    <button onClick={()=>handleClose()} className='close_modal_button_radio'>
        <FaTimes/>
    </button>
  )
}

export default CloseModalButtonRadio