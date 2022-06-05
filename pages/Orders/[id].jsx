import React from 'react'
import Image from "next/image";
import style from '../../styles/Order.module.css'

const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        if (index - status < 1) return style.done;
        if (index - status === 1) return style.inProgress;
        if (index - status > 1) return style.undone;
    };
    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.row}>
                    <table className={style.table}>
                        <tr className={style.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={style.tr}>
                            <td>
                                <span className={style.id}>129837819237</span>
                            </td>
                            <td>
                                <span className={style.name}>John Doe</span>
                            </td>
                            <td>
                                <span className={style.address}>Elton st. 212-33 LA</span>
                            </td>
                            <td>
                                <span className={style.total}>$79.80</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={style.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/paid.png" width={30} height={30} alt="" />
                        <span>Payment</span>
                        <div className={style.checkedIcon}>
                            <Image
                                className={style.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/img/bake.png" width={30} height={30} alt="" />
                        <span>Preparing</span>
                        <div className={style.checkedIcon}>
                            <Image
                                className={style.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/img/bike.png" width={30} height={30} alt="" />
                        <span>On the way</span>
                        <div className={style.checkedIcon}>
                            <Image
                                className={style.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/img/delivered.png" width={30} height={30} alt="" />
                        <span>Delivered</span>
                        <div className={style.checkedIcon}>
                            <Image
                                className={style.checkedIcon}
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.wrapper}>
                    <h2 className={style.title}>CART TOTAL</h2>
                    <div className={style.totalText}>
                        <b className={style.totalTextTitle}>Subtotal:</b>$79.60
                    </div>
                    <div className={style.totalText}>
                        <b className={style.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={style.totalText}>
                        <b className={style.totalTextTitle}>Total:</b>$79.60
                    </div>
                    <button disabled className={style.button}>
                        PAID
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Order
