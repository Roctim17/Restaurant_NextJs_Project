import React from 'react'
import style from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.callBtn}>
                    <Image src="/image/images/icons/phone-icon--25.png" alt="" width={32} height={32} />
                </div>
                <div className={style.texts}>
                    <div className={style.text}>ORDER NOW!</div>
                    <div className={style.text}>013 000 000</div>

                </div>
            </div>
            <div className={style.item}>
                <ul className={style.list}>
                    <li className={style.listItem}>Homepage</li>
                    <li className={style.listItem}>Products</li>
                    <li className={style.listItem}>Menu</li>
                    <Image src="/image/images/logo2.png" alt="" width={160} height={69} />
                    <li className={style.listItem}>Events</li>
                    <li className={style.listItem}>Blog</li>
                    <li className={style.listItem}>Contact</li>

                </ul>
            </div>
            <div className={style.item}>
                <div className={style.cart}>
                    <Image src="/image/images/icons/Path 1.png" alt="" width={30} height={30} />
                    <div className={style.counter}>2</div>

                </div>
            </div>
        </div>
    )
}

export default Navbar