import { Icon } from '@iconify/react';
import Slider from './Slider';

export default function Modal(props){
    return(
        <div className='modal modal__open'>
            {props.modalContent.map((data)=> {
                return(
    <div key={data.id} className="modal__container">
            
        <div className='modal__title-container'>
            <div className=' span__modal-buttonContainer'>
                    <span className="span">{"<h3>"}</span>
               <Icon 
                icon="ep:close-bold" 
                className='modal__icon' 
                onClick={props.onClick}
               />
            </div>
                <h3 className='modal__title'>{data.name} </h3>
                <span className="span span__modal" >{"</h3>"}</span>
        </div>

                <Slider
                images={data.images}
                name={data.name}
                />
                <div className='modal__content-container'>
                  <p className='modal__p modal__p-top'>{data.content}</p>
                 <p className='modal__p'>{data.content2}</p>
                 </div>
    </div>
                )
            })}
        </div>


    //     <div className={!props.isModalOpen ? "modal" : " modal__open modal" } >
    //         <div className=' span__modal-buttonContainer'>

    //             <span className="span">{"<h3>"}</span>

    //             <Icon 
    //             icon="ep:close-bold" 
    //             className='modal__icon' 
    //             onClick={props.onClick}
    //             />

    //         </div>

    //             <h3 className='modal__title'>{props.projectName} </h3>
    //             <span className="span span__modal" >{"</h3>"}</span>

    //             <Slider
    //             images={props.images}
    //             name={props.projectName}
    //             />

    //             <p className='modal__p modal__p-top'>{props.modalContent}</p>
    //             <p className='modal__p'>{props.modalContent2}</p>
    // </div>
    )
}