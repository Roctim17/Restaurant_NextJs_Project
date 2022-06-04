import React from 'react'
import style from '../styles/FoodCard.module.css'
import Image from 'next/image'

const FoodCard = () => {
    return (
        <div className={style.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={style.title}>FIORI DI ZUCCA</h1>
            <span className={style.price}>$19.90</span>
            <p className={style.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}

export default FoodCard