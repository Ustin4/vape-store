import s from './liquidHeader.module.scss'
import img from '../assert/967767 1.png'
import {Typography} from "../typography/typography";

export const LiquidHeader = () => {
    return (
        <div className={s.box}>
            <div className={s.text}>
                <Typography variant={'heading1'}>
                    Жидкости
                </Typography>
                <Typography variant={'subtitle1'}>
                    Жидкости для вейпа играют важную роль в использовании электронных сигарет. Они предлагают широкий
                    выбор вкусов, от фруктовых и ягодных до табачных ароматов, и доступны в различных вариантах
                    никотинового содержания, включая соль, классический никотин и без никотина.
                </Typography>
            </div>
            <img className={s.img} src={img} alt=""/>
        </div>
    )
}