import s from "./cards.module.scss";
import { Price } from "../price/price";
import { Button } from "../button/button";

type Props = {
    name:string
    description:string
    photo:any
    price:number
}

export const Cards = ({photo,description,price,name}:Props) => {
  return (
    <div className={s.container}>
      <img
        className={s.img}
        src=""
        alt=""
      />
      <div className={s.content}>
        <div className={s.name}>{name}</div>
        <div className={s.totalDescription}>{description}</div>
        <Price price={100} />
      </div>
      <Button className={s.buttonC} variant={"primary"}>
        купить
      </Button>
    </div>
  );
};
