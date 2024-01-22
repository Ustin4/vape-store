import s from "./price.module.scss";

type Props = {
  price: number;
};
export const Price = ({ price }: Props) => {
  return <div className={s.price}>{price}</div>;
};
