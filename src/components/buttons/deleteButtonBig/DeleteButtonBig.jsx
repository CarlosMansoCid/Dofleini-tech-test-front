import './deleteButtonBig.styles.css'

const DeleteButtonBig = ({active, action, title, onProccess, id}) => {
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