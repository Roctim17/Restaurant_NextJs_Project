import React from 'react'
import style from '../styles/slider.module.css'
import Image from 'next/image'

const Slider = () => {
    return (
        <div className={style.container}>
            <Image src="/public/img/arrowl.png" alt="" layout='fill'></Image>
            <div className={style.wrapper}>
                <div className={style.imgcontainer}></div>
                <Image src="/public/img/pizza.png" alt="" layout='fill' />

            </div>
            <Image src="/public/img/arrowr.png" alt="" layout='fill'></Image>
        </div>
    )
}

export default Slider