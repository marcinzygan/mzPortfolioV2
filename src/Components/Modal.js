import { Icon } from '@iconify/react';
import Slider from './Slider';

export default function Modal(props){
    return(
        <div className={!props.isModalOpen ? "modal" : "modal modal__open " } id="modal">
            {props.modalContent.map((data)=> {

                // Check if modal is open if yes add hidden class to body to stop background scrolling .
                if(props.isModalOpen === true ){
                    document.body.classList.add("hidden")
                }
                else{
                    document.body.classList.remove("hidden") 
                }
                
                return(
    <div key={data.id} className="modal__container" >
        
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
            <div className='modal__content-wrapper'>
            <div className='modal__content-container'>
                 <p className='modal__p modal__p-top'>{data.content}</p>
                 <p className='modal__p ' >{data.content2}</p>
                 <p className='modal__p'>{data.content3}</p>
                 <p className='modal__p'>{data.content4}</p>
                 <p className='modal__p'>{data.content5}</p>

            {/* IF THERE IS DATA.LIST IN OBJECT , MAP OVER OBJECT DATA.LIST OBJECT AND FOR EACH ITEM MAKE <li> */}
                  { data.list &&
                    Object.keys(data.list).map((item, i) => (
                    <li className="modal__li" key={i}>
                    { data.list[item] }
                    </li>
                    ))}  
            {/* IF THERE IS DATA.LINK , MAP OVER  DATA.LIST ARRAY AND FOR EACH ITEM MAKE <a> */}
                {   data.links && 
                    data.links.map((item , i ) => (
                    <a href={item.link} className="modal__link" key={i}>
                        {item.name}
                    </a>
                ))}
                    
                    
                    <div className='modal__back-btn' onClick={props.onClick}><Icon icon="ep:arrow-left-bold" className='modal__icon' /></div>
            </div>
            
            </div>
            
    </div>
                )
            })}
            
    </div>


  
    )
}