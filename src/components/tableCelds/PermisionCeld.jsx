import { stringAdapter } from '../../utils/strings-adapter'
import './styles.css'

const PermisionCeld = ({permision}) => {
  return (
    <th className='permision_celd'>{stringAdapter(permision)}</th>
  )
}

export default PermisionCeld