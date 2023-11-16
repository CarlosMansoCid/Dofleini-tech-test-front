import { stringAdapter } from "../../utils/strings-adapter"
import './styles.css'
import useToogle from '../../hooks/useToogle'
import CheckBox from "../checkBox/CheckBox"
import DeleteButton from "../buttons/DeleteButton"
import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import { MODALS_TYPES } from "../modals/modalsManager/ModalsManager"

const RoleCeld = ({role}) => {
  const {toogleValue,setTrue ,setFalse} = useToogle()
  const {setModalPayload, setOpenModal} = useContext(ModalContext)

  const handleDeleteRole = () =>{
    setModalPayload({
      type: MODALS_TYPES.DELETE_ROLE,
      payload:role
    })
    setOpenModal()
  }

  return (
    <td className='role_name' 
        onMouseEnter={()=>setTrue()}
        onMouseLeave={()=>setFalse()}>
      <div className="role_container">
        {
          !!toogleValue ?
            <CheckBox onActiveAction={()=>console.log('activado')}
                      onDeactiveAction={()=>console.log('desactivado')}
                      style={{marginRigth:'1rem'}}/>
          :
          <></>
        }
        {stringAdapter(role.name)}
        {
          !!toogleValue ?
            <DeleteButton action={()=>handleDeleteRole()}/>
          :
          <></>
        }
      </div>
    </td>
  )
}

export default RoleCeld