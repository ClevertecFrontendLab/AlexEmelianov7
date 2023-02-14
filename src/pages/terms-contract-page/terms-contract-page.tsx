import {FC} from 'react';
import {useMatch} from 'react-router-dom';

import {Routes} from '../../components/app-router/routes';
import {AsideNav} from '../../components/aside-nav/aside-nav';

import styles from './terms-contract-page.module.css';

export const TermsContractPage: FC = () => {
    const isTermsPage = useMatch(Routes.terms);

    return (
        <section className={styles.termsContractPage}>
            <AsideNav
                showcase='navigation-showcase'
                terms='navigation-terms'
                contract='navigation-contract'
                books='navigation-books'
            />
            <div className={styles.pageContent}>
                {isTermsPage
                    ?
                    <h1 className={styles.pageTitle}>Правила пользования</h1>
                    :
                    <h1 className={styles.pageTitle}>Договор оферты</h1>
                }
                <ol className={styles.numList}>
                    <li className={styles.paragraphTitle}>
                        Идейные соображения высшего порядка, а также высокое качество позиционных исследований представляет собой интересный эксперимент проверки экспериментов, поражающих по своей масштабности и грандиозности.
                        <ol className={styles.paragraph}>
                            <li  className={styles.paragraphSubTitle}>Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами.</li>
                            <li  className={styles.paragraphSubTitle}>Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.</li>
                            <li  className={styles.paragraphSubTitle}>Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. </li>
                            <li  className={styles.paragraphSubTitle}>Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных. </li>
                        </ol>
                    </li>
                    <li className={styles.paragraphTitle}>
                        С учётом сложившейся международной обстановки, консультация с широким активом предоставляет широкие возможности для приоритизации разума над эмоциями.
                        <ol className={styles.paragraph}>
                            <li className={styles.paragraphSubTitle}>Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами.
                                <ol className={styles.subParagraph}>
                                    <li className={styles.subParagraphTitle}>Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.  </li>
                                    <li className={styles.subParagraphTitle}>Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.  </li>
                                </ol>
                            </li>
                            <li className={styles.paragraphSubTitle}>Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных. </li>
                        </ol>
                    </li>
                    <li className={styles.paragraphTitle}>
                        Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры требует от нас анализа приоритизации разума над эмоциями.
                        <ol className={styles.paragraph}>
                            <li className={styles.paragraphSubTitle}>Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами.
                                <ol className={styles.subParagraph}>
                                    <li className={styles.subParagraphTitle}>Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.  </li>
                                    <li className={styles.subParagraphTitle}>Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.  </li>
                                </ol>
                            </li>
                            <li className={styles.paragraphSubTitle}>Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных. </li>
                            <li className={styles.paragraphSubTitle}>Не следует, однако, забывать, что экономическая повестка сегодняшнего дня требует анализа анализа существующих паттернов поведения.
                                <ol className={styles.subParagraph}>
                                    <li className={styles.subParagraphTitle}>А ещё представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть функционально разнесены на независимые элементы.
                                        <ol className={styles.subSubParagraph}>
                                            <li className={styles.subSubParagraphTitle}>Стремящиеся вытеснить традиционное производство, нанотехнологии могут быть объявлены нарушающими общечеловеческие нормы этики и морали. </li>
                                            <li className={styles.subSubParagraphTitle}>Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует необходимость новых предложений. Являясь всего лишь частью общей картины, независимые государства представлены в исключительно положительном свете. </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li className={styles.paragraphSubTitle}>Повседневная практика показывает, что убеждённость некоторых оппонентов требует от нас анализа распределения внутренних резервов и ресурсов. </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </section>
    )
}
