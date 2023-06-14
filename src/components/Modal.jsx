import classes from './Modal.module.css';

// eslint-disable-next-line react/prop-types
function Modal({children,onClosed}) {
  return (
    <div>
        
    <div className={classes.backdrop} onClick={onClosed}/>

    <dialog open className={classes.modal}>

    {children}

    </dialog>

    </div>
  )
}

export default Modal