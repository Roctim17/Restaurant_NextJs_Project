import React from 'react'
import Image from 'next/image'
import style from '../../styles/Product.module.css'
import { useState } from 'react';

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
    };
    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.imgContainer}>
                    <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={style.right}>
                <h1 className={style.title}>{pizza.name}</h1>
                <span className={style.price}>${pizza.price[size]}</span>
                <p className={style.desc}>{pizza.desc}</p>
                <h3 className={style.choose}>Choose the size</h3>
                <div className={style.sizes}>
                    <div className={style.size} onClick={() => setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={style.number}>Small</span>
                    </div>
                    <div className={style.size} onClick={() => setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={style.number}>Medium</span>
                    </div>
                    <div className={style.size} onClick={() => setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={style.number}>Large</span>
                    </div>
                </div>
                <h3 className={style.choose}>Choose additional ingredients</h3>
                <div className={style.ingredients}>
                    <div className={style.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={style.checkbox}
                        />
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={style.option}>
                        <input
                            className={style.checkbox}
                            type="checkbox"
                            id="cheese"
                            name="cheese"
                        />
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={style.option}>
                        <input
                            className={style.checkbox}
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                        />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={style.option}>
                        <input
                            className={style.checkbox}
                            type="checkbox"
                            id="garlic"
                            name="garlic"
                        />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className={style.add}>
                    <input type="number" defaultValue={1} className={style.quantity} />
                    <button className={style.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product