import './successButtonBig.styles.css'

const SuccessButtonBig = ({active, action, title, onProccess}) => {
  return (
    <button className='success_button_big' 
            onClick={()=>action()}
            id={!!onProccess ? 'success_inactive' : 'success_active'}>
        {
          !onProccess ?
          title
          :
          <>loading...</>
        }
    </button>
  ) 
}

export default SuccessButtonBig