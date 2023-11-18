import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import Dock from '../../modules/dock/Dock.module'
import { MODALS_TYPES } from '../modals/modalsManager/ModalsManager'

const MainDock = () => {

    const context = useContext(ModalContext)
    
    const buttonsData = [
        {
          title: 'Agregar rol',
          variant: 'add',
          action: () => {
            context.setModalPayload({
                payload:{},
                type: MODALS_TYPES.ADD_ROLE
            })
            context.setOpenModal()
          }
        },
        {
          title: 'Agregar entidad',
          variant: 'add',
          action: ()=>{
            context.setModalPayload({
              payload:{},
              type:MODALS_TYPES.ADD_ENTITY
            })
          context.setOpenModal()
          }    
        },
        {
          title: 'Agregar permiso',
          variant: 'add',
          action: ()=>{
            context.setModalPayload({
              payload:{},
              type:MODALS_TYPES.ADD_PERMISSION
            })
          context.setOpenModal()
          }    
        }

      ]
    
      return (
        <>
            <Dock buttons={buttonsData}/>
        </>
    )
}

export default MainDock