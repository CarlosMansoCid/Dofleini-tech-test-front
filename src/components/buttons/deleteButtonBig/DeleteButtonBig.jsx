import './deleteButtonBig.styles.css'

const DeleteButtonBig = ({action, title, onProccess}) => {
  return (
    <button className='delete_button_big' 
            onClick={()=>action()}
            id={!!onProccess ? 'inactive' : 'active'}>
        {
          !onProccess ?
          title
          :
          <>loading...</>
        }
    </button>
  ) 
}

export default DeleteButtonBig