import s from "./offer.module.scss";
import {Price} from "../price/price";
import {Button} from "../button/button";
import img from '../assert/geekvape-b100-AegisBoost-Pro-2-200x200 1.png'

type Props = {
    name: string
    description: string
    photo: any
    price: number
}

export const Offer = ({photo, description, price, name}: Props) => {
    return (
        <>
            <div className={s.container}>
                <img className={s.img} src={img} alt=""/>
                {/*<div className={s.cardContent}>*/}
                <div className={s.name}>{name}</div>
                <div className={s.totalDescription}>{description}</div>
                {/*<div className={s.price}>*/}
                <Price price={100}/>
                {/*</div>*/}
                {/*</div>*/}
            </div>
            <Button className={s.buttonC} variant={"primary"}>
                купить
            </Button>
        </>
    );
};
