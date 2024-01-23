import s from './odnorazkiHeader.module.scss'
import img from '../assert/967767 1.png'

export const OdnorazkiHeader = () => {
    return (
        <div className={s.box}>
            <div className={s.text}>
                <h1 className={s.title}>Одноразки</h1>
                <div className={s.description}>
                    Одноразовые электронные сигареты – это удобное и простое решение для тех, кто хочет наслаждаться парением без лишних сложностей: без необходимости замены жидкости или зарядки батареи. Они не требуют замены жидкости или зарядки батареи, поэтому их использование становится максимально простым и удобным.
                </div>
            </div>
            <img className={s.img} src={img} alt=""/>
        </div>
    )
}