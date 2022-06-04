import React from 'react'
import style from '../styles/Slider.module.css'
import Image from 'next/image'

const Slider = () => {
    const images = [
        "/image/images/breakfast/breakfast1.png",
        "/image/images/dinner/dinner1.png",
        "/image/images/lunch/lunch1.png",
    ];
    return (
        <div className={style.container}>
            <div className={style.arrowContainer} style={{ left: 0 }} >
                <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
            </div>
            <div className={style.wrapper} >
                {images.map((img, i) => (
                    <div className={style.imgContainer} key={i}>
                        <Image src={img} alt="" layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
            <div className={style.arrowContainer} style={{ right: 0 }} >
                <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
            </div>
        </div>
    )
}

export default Slider