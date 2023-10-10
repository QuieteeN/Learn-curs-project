import React from "react";
import { Wrapper } from "../Wrapper";
import firstImage from "../../images/first.jpg";
import secondImage from "../../images/second.jpg";
import thirdImage from "../../images/business.jpg";
import classes from "../moduleStyles/Home.module.css";

export function Home() {
    return (
        <main>
            <Wrapper>
                <section className={classes.meeting}>
                    <div className={classes.content}>
                        <span className={classes.bold}>
                            Получи
                            <span className={classes.stroke}> знания</span>.
                        </span>
                        <span className={classes.bold + " " + classes.orange}>
                            Делись знаниями.
                        </span>
                        <p>
                            Присоединяйся к сообществу с новейшими и удобными
                            технологиями для обучения.
                        </p>
                    </div>
                    <div className={classes.image}>
                        <img src={firstImage} alt='фотка' />
                    </div>
                </section>

                <section className={classes.meeting}>
                    <div className={classes.image}>
                        <img src={secondImage} alt='фотка' />
                    </div>
                    <div className={classes.content}>
                        <span className={classes.title}>Плюсы</span>
                        <h2>
                            <span className={classes.stroke_}>Обучающимся</span>{" "}
                            и <span className={classes.stroke_}>обучающим</span>{" "}
                            предоставлены
                        </h2>
                        <ul className={classes.user_benefits}>
                            <li>удобный и понятный интерфейс</li>
                            <li>команды</li>
                            <li>мессенджер</li>
                            <li>форумы для peer to peer</li>
                            <li>бесплатные курсы</li>
                            <li>календарь с мониторингом дедлайнов</li>
                        </ul>
                    </div>
                </section>

                <section className={classes.meeting}>
                    <div className={classes.content}>
                        <span className={classes.title}>Плюсы</span>
                        <h2>
                            <span className={classes.stroke}>Организациям</span>{" "}
                            предлагаем
                        </h2>
                        <ul className='companies_benefits'>
                            <li>
                                простая платформа для дистанционного обучения
                            </li>
                            <li>новейшие технологии обмена информацией</li>
                            <li>комфортные условия обучения</li>
                            <li>бесплатные курсы</li>
                            <li>обучение пользованием возможностями сайта</li>
                        </ul>
                    </div>
                    <div className={classes.image}>
                        <img src={thirdImage} alt='фотка' />
                    </div>
                </section>
            </Wrapper>
        </main>
    );
}
