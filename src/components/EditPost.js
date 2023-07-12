import {useRef} from 'react'
import {useParams, useLocation} from "react-router-dom";

export default function EditPost({Footer}) {
    const textAreaEl = useRef(null);
    const {id} = useParams();
    const {state} = useLocation()

    const img = 'https://goo.su/RvsJu9'

    return (
        <div className={'post-create'}>
            <div className={'post-create__box'}>
                <div className={'post-create__info'}>
                    <img className={'post-create__info-img'} src={img} alt={'аватар'}/>
                    <span className={'post-create__info-name'}>Want to cry</span>
                </div>
                <textarea className={'post-create__textarea'} ref={textAreaEl} defaultValue={state && state.content}/>
                
            </div>
            {Footer && <Footer textAreaEl={textAreaEl} id = {id}/>}
        </div>
    )
}