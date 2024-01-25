import s from "./writeAbout.module.scss";
import img from '../assert/resize-transformed 1.png'
import {HighlightSvg} from "../assert/HighlightSvg";
export const WriteAbout = () => {
    return (
        <div className={s.container}>
            <img className={s.img} src={img} alt=""/>
            <div className={s.content}>
                <h1 className={s.advantages}>Счастливый клиент</h1>
                <div className={s.desc}>Постоянно хожу к вам по адресу Уманская,54. Работает парень (не запомнила имя),
                    но с каким бы вопросом не пришла, всегда поможет.
                    Обслуживание понравилось, спасибо огромное!
                </div>
                <h6 className={s.name}>Патрисиа</h6>
            </div>
        </div>
    );
};
