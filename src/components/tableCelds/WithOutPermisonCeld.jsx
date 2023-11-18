import NoCheckedIcon from './NoCheckedIcon'
import './styles.css'

const WithOutPermisonCeld = ({action}) => {
  return (
    <td className='table_celd' onClick={()=>action()}>
      <NoCheckedIcon/>
    </td>
  )
}

export default WithOutPermisonCeld