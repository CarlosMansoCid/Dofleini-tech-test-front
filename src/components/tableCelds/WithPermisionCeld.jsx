import CheckIcon from './CheckIcon'
import './styles.css'


const WithPermisionCeld = ({action}) => {
  return (
    <td className='table_celd' onClick={()=>action()}>
      <CheckIcon/>
    </td>
  )
}

export default WithPermisionCeld