import './style.css'
import { ImSad } from 'react-icons/im'
const Modal = ({ msg }) => {

    return (
        <div className='modal-overlay'>
            <div className="modal-body">
                <ImSad className="modal-icon"/>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default Modal