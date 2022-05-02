import { Icon } from '@iconify/react';
import Slider from './Slider';

export default function Modal(props){
    return(
        <div className={!props.isModalOpen ? "modal" : " modal__open modal" } >
            <div className=' span__modal-buttonContainer'>

                <span className="span">{"<h3>"}</span>

                <Icon 
                icon="ep:close-bold" 
                className='modal__icon' 
                onClick={props.onClick}
                />

            </div>

                <h3 className='modal__title'>{props.projectName} </h3>
                <span className="span span__modal" >{"</h3>"}</span>

                <Slider
                images={props.images}
                name={props.projectName}
                />

                <p className='modal__p'>{props.modalContent}</p>
    </div>
    )
}