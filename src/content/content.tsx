import s from "./content.module.scss";
import { Button } from "../button/button";

export const Content = () => {
  return (
    <div className={s.box}>
      <div className={s.content}>
        <h1>The Smoking Agency</h1>
      </div>
      <div className={s.leftBbottom}>
        <p>
          VapeAgency.by — интернет-магазин по продаже и сервису электронных
          сигарет в Беларуси. С 2011 года наша компания успешно работает на
          рынке электронных сигарет, комплектующих, аксессуаров и жидкостей
          именитых производителей. Благодаря нашим консультантам, уже более 50
          000 клиентов отказались от курения обычных сигарет, многие полностью
          избавились от никотиновой зависимости.
        </p>
      </div>
      {/*<Button>войти на сайт </Button>*/}
    </div>
  );
};
