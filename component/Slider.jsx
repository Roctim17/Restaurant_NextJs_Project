import React from 'react'
import style from '../styles/Slider.module.css'
import Image from 'next/image'
import { useState } from 'react';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/image/images/breakfast/breakfast1.png",
        "/image/images/dinner/dinner1.png",
        "/image/images/lunch/lunch1.png",
    ];
    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    return (
        <div className={style.container}>
            <div className={style.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
            </div>
            <div className={style.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
                {images.map((img, i) => (
                    <div className={style.imgContainer} key={i}>
                        <Image src={img} alt="" layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
            <div className={style.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
            </div>
        </div>
    )
}

export default Slider