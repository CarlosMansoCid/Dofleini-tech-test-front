import { FaPlus, FaTrash } from "react-icons/fa"
import { dockButtonsVariants } from "./dockButtonsVariants"
import './dockButtons.styles.css'

const DockButton = ({title, variant, action}) => {
  return (
    <button onClick={()=>action()} id={variant} className="dock__button">
        <div className="dock__button_icon">
            {
                variant === dockButtonsVariants.add ? 
                <FaPlus/>
                :
                <FaTrash/>
            }
        </div>
        <div className="dock__button_title">
            {title}
        </div>
    </button>
  )
}

export default DockButton