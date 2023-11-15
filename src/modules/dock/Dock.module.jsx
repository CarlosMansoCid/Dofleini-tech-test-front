import DockButton from '../../components/buttons/dockButtons/DockButton'
import './dock.styles.css'

const Dock = ({buttons}) => {
  return (
    <div className='dock'>
        {
            !!buttons ? 
            buttons.map((button, index) => {
                return(
                    <DockButton key={index}
                                title={button.title} 
                                action={button.action} 
                                variant={button.variant}/>
                )
            })
            :<></>
        }
    </div>
  )
}

export default Dock