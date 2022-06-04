import React from 'react'
import style from '../styles/FoodList.module.css'
import FoodCard from './FoodCard'
const FoodList = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>THE BEST FOOD IN TOWN</h1>
            <p className={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </p>
            <div className={style.wrapper}>
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />

            </div>
        </div>
    )
}

export default FoodList