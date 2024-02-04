import s from './odnorazkiHeader.module.scss'
import img from '../assert/967767 1.png'
import {Typography} from "../typography/typography";

export const OdnorazkiHeader = () => {
    return (
        <div className={s.box}>
            <div className={s.text}>
                <Typography variant={'heading1'}>
                    Одноразки
                </Typography>
                <Typography variant={'subtitle1'}>
                    Одноразовые электронные сигареты – это удобное и простое решение для тех, кто хочет наслаждаться
                    парением без лишних сложностей:
                    без необходимости замены жидкости или зарядки батареи. Они не требуют замены жидкости или зарядки
                    батареи,
                    поэтому их использование становится максимально простым и удобным.
                </Typography>
            </div>
            <img className={s.img} src={img} alt=""/>
        </div>
    )
}