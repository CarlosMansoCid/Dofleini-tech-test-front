import {createPortal} from 'react-dom'
import { useContext } from 'react'
import { ModalContext } from '../../../contexts/ModalContext'
import './basicModal.styles.css'
import CloseModalButtonRadio from '../../buttons/modal/CloseModalButtonRadio'

const BasicModal = ({open,children}) => {

    const {
        modalIsOpen
    } = useContext(ModalContext)
    return (
        modalIsOpen ?
        <>
        {
            createPortal(
                <section className='basic_modal'>
                    <article className='basic__modal_children_container'>
                        <CloseModalButtonRadio/>
                        {children}
                    </article>
                </section>
            ,document?.body)
        }
        </>
        :<></>
    
  )
}

export default BasicModal