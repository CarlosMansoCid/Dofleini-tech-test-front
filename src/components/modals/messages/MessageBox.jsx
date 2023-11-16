import './mesageBox.styles.css'

export const MESSAGES_TYPES = Object.freeze({
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS'
})

const MessageBox = ({message, type}) => {
  return (
    <span className="message" id={type}>
            <h5 className="message__label">{type === MESSAGES_TYPES.ERROR ? 'Error!' : 'Exito!'}</h5>
            <h6 className="message__content_label">{message}</h6>
    </span>
  )
}

export default MessageBox