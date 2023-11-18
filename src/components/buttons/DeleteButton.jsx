import {FaTrash} from 'react-icons/fa'
import './styles.css'

const DeleteButton = ({action}) => {
  return (
    <button className='delete_button' onClick={()=>action()}><FaTrash/></button>
  )
}

export default DeleteButton