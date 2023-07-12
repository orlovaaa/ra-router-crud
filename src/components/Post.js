export default function Post({content, id, cbFunc}) {
    const img = 'https://goo.su/RvsJu9'
    return (
        <div className={'post'} onClick={()=>{cbFunc(id, content)}}>
            <div className={'post__info'}>
                <img className={'post__top-img'} src={img} alt={'аватар'}/>
                <span className={'post__top-name'}>Want to cry</span>
            </div>
            <div className={'post__body'}>
                <div className={'post__body-content'}>
                    {content}
                </div>
                <div className={'post__body-btns'}>
                    <div className={'post__body-like post__body-btn'}> Нравится </div>
                    <div className={'post__body-comment post__body-btn'}> Комментировать </div>
                </div>                
            </div>
        </div>
    )
}