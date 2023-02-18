import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import moment from "moment"

function Cards({ title, image, authors, execerpt, date, link }) {

    const handleLink = () => {
        window.open(link, '_blank')
    }

    return (
        <div className='card' onClick={handleLink}>
            <div className='card__image'>
                <img src={image} alt="article__image" />
            </div>
            <div className='card__body'>
                <div>
                    {
                        authors.map(author =>
                            <div className='author'>

                                <div className='icon'>
                                    <div className='user__icon'>
                                        <AiOutlineUser size={22} />
                                    </div>
                                </div>
                                <div className='author__name'>
                                    <p>{author}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <hr className='hr' />
                <div dangerouslySetInnerHTML={{ __html: title }} className="card__title">
                    
                </div>
                <div className='desc' dangerouslySetInnerHTML={{ __html: execerpt }}>

                </div>
                <div className='date'>
                    {moment(date).format("MMM Do YY")}
                </div>

            </div>

        </div>
    )
}

export default Cards