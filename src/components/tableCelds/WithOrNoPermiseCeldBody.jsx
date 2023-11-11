import WithOutPermisonCeld from "./WithOutPermisonCeld"
import WithPermisionCeld from "./WithPermisionCeld"


const WithOrNoPermiseCeldBody = ({isActive}) => {
  return (
    isActive ?
    <WithPermisionCeld/>
    :
    <WithOutPermisonCeld/>
  )
}

export default WithOrNoPermiseCeldBody