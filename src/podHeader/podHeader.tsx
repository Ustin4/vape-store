import s from './podHeader.module.scss'
import img from '../assert/967767 1.png'


export const PodHeader = () => {
    return (
        <div className={s.box}>
            <div className={s.text}>
                <h1 className={s.title}>POD-системы</h1>
                <div className={s.description}>
                    Вейпы: выбор современного способа курения
                    Если вы ищете альтернативу традиционным сигаретам - электронные популярный выбор среди людей, желающих перейти на более безопасный и менее вредный для здоровья способ. Вейпы предлагают ряд преимуществ, которые делают их привлекательными для многих людей. </div>
            </div>
            <img className={s.img} src={img} alt=""/>
        </div>
    )
}