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
                    <li className={style.listitem}></li>

                </ul>
            </div>
            <div className={style.item}>right </div>
        </div>
    )
}

export default Navbar