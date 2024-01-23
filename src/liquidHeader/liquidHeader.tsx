import s from './liquidHeader.module.scss'
import img from '../assert/967767 1.png'

export const LiquidHeader = () => {
    return (
        <div className={s.box}>
            <div className={s.text}>
                <h1 className={s.title}>Жидкости</h1>
                <div className={s.description}>
                    Жидкости для вейпа играют важную роль в использовании электронных сигарет. Они предлагают широкий выбор вкусов, от фруктовых и ягодных до табачных ароматов, и доступны в различных вариантах никотинового содержания, включая соль, классический никотин и без никотина. </div>
            </div>
            <img className={s.img} src={img} alt=""/>
        </div>
    )
}