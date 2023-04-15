import ClientContactButton from "@/components/ClientContactButton/ClientContactButton";
import useMobile from "@/hooks/useMobile";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import ClientLandingHeaderMobileImage from '@/../public/client-landing/client-landing-header-mobile.png';
import ClientLandingHeaderImage from '@/../public/client-landing/client-landing-header.png';
import ClientLandingTestimonialImage from '@/../public/client-landing/client-landing-testimonial.png';
import ClientLandingCryImage from '@/../public/client-landing/client-landing-cry.png';
import ClientLandingCryMobileImage from '@/../public/client-landing/client-landing-cry-mobile.png';
import ClientLandingSmartMobileImage from '@/../public/client-landing/client-landing-smart-mobile.png';
import ClientLandingSmartImage from '@/../public/client-landing/client-landing-smart.png';
import ClientLandingElonMuskImage from '@/../public/client-landing/client-landing-elon-musk.png';
import ClientLandingStudyMobileImage from '@/../public/client-landing/client-landing-study-mobile.png';
import ClientLandingStudyImage from '@/../public/client-landing/client-landing-study.png';
import ClientLandingPeerProgrammingImage from '@/../public/client-landing/client-landing-peer-programming.png';
import OfficeImageMobile from '@/../public/client-landing/client-landing-office-mobile.png';
import OfficeImage from '@/../public/client-landing/client-landing-office.png';
import ArrowRightImage from '@/../public/client-landing/client-landing-arrow-right.png';
import Footer from "@/components/Footer/Footer";
import Logo from "@/components/Logo/Logo";
import Menu from "@/components/Menu/Menu";
import classes from './index.module.scss';

const ClientLandingPage = () => {
    const { isMobile } = useMobile();

    return (
        <>
            <Head>
                <title>Programiranje za početnike | Korak do četvorocifrene plate</title>
                <meta
                    name='description'
                    content='Zvuči nemoguće? IT svet je prepun ljudi koji su dostigli ono što želiš, isti ljudi su tu kod nas kako bi i tebe doveli do cilja.'
                ></meta>
            </Head>
            <div className={classes.landing_client}>
                <div className={classes.landing_client__image_container}>
                    <Image
                        className={classes.landing_client__image_container__image}
                        src={isMobile ? ClientLandingHeaderMobileImage : ClientLandingHeaderImage}
                        alt='Something' />
                    <div className={classes.landing_client__image_container__gradient} />
                    <div className={classes.landing_client__image_container__content}>
                        <div className={classes.landing_client__image_container__content__title}>
                            <h1>Korak do četvorocifrene plate, spreman?</h1>
                        </div>
                        <div className={classes.landing_client__image_container__content__video}>
                        <iframe 
                            width="800" 
                            height="500" 
                            src="https://www.youtube.com/embed/b_jmIlVYcTo" 
                            title="YouTube video player" 
                            allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            >
                        </iframe>
                        </div>
                        <div className={classes.landing_client__image_container__content__description}>
                            <h2>
                                Umesto da potrošiš minimum 4 godine svog života, <br />
                                gomile novca i živaca, bolje je ovako:
                            </h2>
                        </div>
                        <ClientContactButton />
                    </div>
                </div>

                <div className={classes.landing_client__main_section}>
                    <div className={classes.landing_client__main_section__begining}>
                        <div className={classes.landing_client__main_section__begining__text}>
                            <div className={classes.landing_client__main_section__begining__text__title}>
                                Počeo sam sa istim problemom kao ti
                            </div>
                            <div className={classes.landing_client__main_section__begining__text__description}>
                                Uzeo sam diplomu FON-a, mislio sam da uz to ide i znanje, ali ovo
                                je bio moj ishod na četvrtoj godini fakulteta…
                            </div>
                        </div>
                    </div>
                    <div className={classes.landing_client__main_section__proof}>
                        <div className={classes.landing_client__main_section__proof__text}>
                            <div className={classes.landing_client__main_section__proof__text__title}>
                                100 konkursa, 100 odbijenih poziva
                            </div>
                            <div className={classes.landing_client__main_section__proof__text__description}>
                                Tek kada sam prebacio fokus sa formalnog obrazovanja na sticanje praktičnih
                                veština, tada sam dobio rezultate. Možeš ići mojim putem ili
                                izbeći greške koje sam načinio i krenuti ka uspehu. Ovo je
                                ponuda koju sam dobio nakon 4 meseci radnog iskustva:
                            </div>
                            <div className={classes.landing_client__main_section__proof__text__image_container}>
                                <Image
                                    src={ClientLandingTestimonialImage}
                                    className={classes.landing_client__main_section__proof__text__image_container__image}
                                    alt="Something"
                                />
                            </div>
                        </div>
                        <div className={classes.landing_client__main_section__proof__image_container}>
                            <div className={classes.landing_client__main_section__proof__image_container__gradient} />
                            <Image
                                src={isMobile ? ClientLandingCryMobileImage : ClientLandingCryImage}
                                className={classes.landing_client__main_section__proof__image_container__image}
                                alt="Something"
                            />
                        </div>
                    </div>
                    <div className={classes.landing_client__main_section__invest_section}>
                        <div className={classes.landing_client__main_section__invest_section__image_container}>
                            <Image
                                className={classes.landing_client__main_section__invest_section__image_container__image}
                                src={isMobile ? ClientLandingSmartMobileImage : ClientLandingSmartImage}
                                alt="Something"
                            />
                        </div>
                        <div className={classes.landing_client__main_section__invest_section__text}>
                            <div className={classes.landing_client__main_section__invest_section__text__title}>
                                Da, i ti to možeš!
                            </div>
                            <div className={classes.landing_client__main_section__invest_section__text__description}>
                                Nije ti neophodno prethodno poznavanje, zajedno ćemo ići tempom koji
                                tebi odgovara.
                            </div>
                        </div>
                    </div>
                    <div className={classes.landing_client__main_section__invest_section}>
                        <div className={classes.landing_client__main_section__invest_section__text}>
                            <div className={classes.landing_client__main_section__invest_section__text__title}>
                                Investiraj u znanje, <br />
                                ne u parče papira!
                            </div>
                            <div className={classes.landing_client__main_section__elon_musk_image_container}>
                                <Image
                                    className={classes.landing_client__main_section__elon_musk_image_container__image}
                                    src={ClientLandingElonMuskImage}
                                    alt="Something"
                                />
                            </div>
                            <div className={classes.landing_client__main_section__invest_section__text__description}>
                                Super je fakultet, lepo je imati diplomu ali ti ona ne garantuje
                                zaradu. Praktične i odmah primenjlive veštine možeš steći i za 6
                                meseci koristeći najmodernije tehnologije.
                                Učenje zastarelih metoda od ljudi koji su teoretičari je kao da i
                                dalje narezuješ sve na disk. Nemoj da budeš CD.
                            </div>
                        </div>
                    </div>
                    <div className={classes.landing_client__main_section__invest_section}>
                        <div className={classes.landing_client__main_section__invest_section__image_container}>
                            <Image
                                className={classes.landing_client__main_section__invest_section__image_container__image}
                                src={isMobile ? ClientLandingStudyMobileImage : ClientLandingStudyImage}
                                alt="Something"
                            />
                        </div>
                        <div className={classes.landing_client__main_section__invest_section__text}>
                            <div className={classes.landing_client__main_section__invest_section__text__title}>
                                Možeš sam do prvog posla neformalnim učenjem
                            </div>
                            <div className={classes.landing_client__main_section__invest_section__text__description}>
                                Verovatno si razmišljao o samostalnoj edukaciji? I taj proces
                                podrazumeva puno vremena, isti pristup nastojimo da ubrzamo. Evo
                                kako:
                            </div>
                        </div>
                    </div>
                    <div className={classes.landing_client__main_section__part_text}>
                        Sarađuj sa ekspertom iz IT industrije bez ikakvog teoretisanja
                    </div>
                    <div className={classes.landing_client__main_section__qa_section}>
                        <div className={classes.landing_client__main_section__qa_section__qa}>
                            <div>- Umesto bubanja steći ćeš praksu.</div>
                            <div>- Nasuprot papira dobićeš znanje.</div>
                            <div>
                                - Zastarele modele učenja zameni personalizovanim razvojnim putem,
                                {!isMobile && <br />}a lutanje stalnom podrškom na svakom
                                {!isMobile && <br />} koraku tvog usavršavanja.
                            </div>
                            <div>
                                – Aktivno razvijaj projekat sa mentorom{!isMobile && <br />}{" "}
                                umesto da slušaš dosadna predavanja.
                            </div>
                        </div>
                        <div className={classes.landing_client__main_section__image_container}>
                            <Image
                                className={classes.landing_client__main_section__image_container__image}
                                src={ClientLandingPeerProgrammingImage}
                                alt="Something"
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.landing_client__main_section__mentors}>
                    <div className={classes.landing_client__main_section__mentors__image_container}>
                        <Image
                            className={classes.landing_client__main_section__mentors__image_container__image}
                            src={isMobile ? OfficeImageMobile : OfficeImage}
                            alt="Something"
                        />
                    </div>
                    <Link
                        href="/it-kursevi"
                        className={classes.landing_client__main_section__mentors__card}
                    >
                        <div className={classes.landing_client__main_section__mentors__card__mentor}>
                            MENTORI
                        </div>
                        <div className={classes.landing_client__main_section__mentors__card__title}>
                            Pogledaj detaljnije naš tim i odaberi svog 'ličnog trenera'
                        </div>
                        <Image
                            src={ArrowRightImage}
                            className={classes.landing_client__main_section__mentors__card__icon}
                            alt="Something"
                        />
                    </Link>
                </div>
                <Footer />
                <Menu />
                <div className={classes.landing_client__logo}>
                    <Logo />
                </div>
            </div>
        </>
    )
}

export default ClientLandingPage;