import s from './header.module.scss'
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <div className={s.box}>
            <div className={s.logo}>
                Vape Agency
            </div>
            <div className={s.range}>
                <Link to={'/pod'}>
                    POD
                </Link>
                <Link to={'/жидкости'}>
                    Жидкости
                </Link>
                <Link to={'/одноразки'}>
                    Одноразки
                </Link>
            </div>
        </div>
    )
}


