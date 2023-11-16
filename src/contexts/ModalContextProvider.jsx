import { useState } from "react"
import {ModalContext} from "./ModalContext"

const ModalContextProvider = ({children}) => {
    const [open, setOpen] = useState(false)
    const [payload, setPayload] = useState({})

    const setOpenModal = () =>{
      setOpen(true)
    } 
    const setCloseModal = () =>{
      setOpen(false)
    }
  return ( 
    <ModalContext.Provider value={{
        modalIsOpen:open,
        setOpenModal:setOpenModal,
        modalPayload:payload,
        closeModal:setCloseModal,
        setModalPayload:setPayload
    }}> 
        {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider