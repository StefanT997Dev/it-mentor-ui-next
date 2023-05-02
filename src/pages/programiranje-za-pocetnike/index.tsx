import ClientContactButton from "@/components/ClientContactButton/ClientContactButton";
import useMobile from "@/hooks/useMobile";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import ClientLandingHeaderMobileImage from '@/../public/client-landing/client-landing-header-mobile.jpg';
import ClientLandingHeaderImage from '@/../public/client-landing/client-landing-header.jpg';
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
                <div className={classes.landing_client__header}>
                    <div className={classes.landing_client__header__image_container}>
                        <Image
                            className={classes.landing_client__header__image_container__image}
                            src={isMobile ? ClientLandingHeaderMobileImage : ClientLandingHeaderImage}
                            alt='Something' />
                    </div>
                    <div className={classes.landing_client__header__title}>
                        <h1>Korak do četvorocifrene plate, spreman?</h1>
                    </div>
                    <div className={classes.landing_client__header__video}>
                        <iframe
                            src="https://www.youtube.com/embed/b_jmIlVYcTo"
                            title="YouTube video player"
                            className={classes.landing_client__header__video__responsive_iframe}
                            allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        >
                        </iframe>
                    </div>
                    <div className={classes.landing_client__header__description}>
                        <h2>
                            Umesto da potrošiš minimum 4 godine svog života,
                            gomilu novca i živaca, bolje je ovako:
                        </h2>
                    </div>
                    <ClientContactButton />
                </div>

                <div className={classes.landing_client__storytelling}>
                    <div className={classes.landing_client__storytelling__problem}>
                        <div className={classes.landing_client__storytelling__title}>
                            <h2>Počeo sam sa istim problemom kao ti</h2>
                        </div>
                        <div className={classes.landing_client__storytelling__description}>
                            Uzeo sam diplomu FON-a, mislio sam da uz to ide i znanje, ali ovo
                            je bio moj ishod na četvrtoj godini fakulteta…
                        </div>
                        <Image
                            src={isMobile ? ClientLandingCryMobileImage : ClientLandingCryImage}
                            className={classes.landing_client__storytelling__image}
                            alt="Something"
                        />
                    </div>

                    <div className={classes.landing_client__storytelling__testimonial}>
                        <div className={classes.landing_client__storytelling__title}>
                            <h2>100 konkursa, 100 odbijenih poziva</h2>
                        </div>
                        <div className={classes.landing_client__storytelling__description}>
                            Tek kada sam prebacio fokus sa formalnog obrazovanja na sticanje praktičnih
                            veština, tada sam dobio rezultate. Možeš ići mojim putem ili
                            izbeći greške koje sam načinio i krenuti ka uspehu. Ovo je
                            ponuda koju sam dobio nakon 4 meseca radnog iskustva:
                        </div>
                        <Image
                            src={ClientLandingTestimonialImage}
                            className={classes.landing_client__storytelling__image}
                            alt="Something"
                        />
                    </div>

                    <div className={classes.landing_client__storytelling__success}>
                        <div className={classes.landing_client__storytelling__title}>
                            <h2>Da, i ti to možeš!</h2>
                        </div>
                        <div className={classes.landing_client__storytelling__description}>
                            Nije ti neophodno prethodno poznavanje, zajedno ćemo ići tempom koji
                            tebi odgovara.
                        </div>
                        <Image
                            className={classes.landing_client__storytelling__image}
                            src={isMobile ? ClientLandingSmartMobileImage : ClientLandingSmartImage}
                            alt="Something"
                        />
                    </div>

                    <div className={classes.landing_client__storytelling__knowledge}>
                        <div className={classes.landing_client__storytelling__knowledge__text}>
                            <div className={classes.landing_client__storytelling__title}>
                                <h2>Investiraj u znanje, <br />ne u parče papira!</h2>
                            </div>
                            <div className={classes.landing_client__storytelling__description}>
                                Super je fakultet, lepo je imati diplomu ali ti ona ne garantuje
                                zaradu. Praktične i odmah primenjlive veštine možeš steći i za 6
                                meseci koristeći najmodernije tehnologije.
                                Učenje zastarelih metoda od ljudi koji su teoretičari je kao da i
                                dalje narezuješ sve na disk. Nemoj da budeš CD.
                            </div>
                        </div>
                        <Image
                            className={classes.landing_client__storytelling__image}
                            src={ClientLandingElonMuskImage}
                            alt="Something"
                        />
                    </div>

                    <div className={classes.landing_client__storytelling__self_education}>
                        <Image
                            className={classes.landing_client__storytelling__image}
                            src={isMobile ? ClientLandingStudyMobileImage : ClientLandingStudyImage}
                            alt="Something"
                        />
                        <div className={classes.landing_client__storytelling__self_education__text}>
                            <div className={classes.landing_client__storytelling__title}>
                                <h2>Možeš sam do prvog posla neformalnim učenjem</h2>
                            </div>
                            <div className={classes.landing_client__storytelling__description}>
                                Verovatno si razmišljao o samostalnoj edukaciji? I taj proces
                                podrazumeva puno vremena, isti pristup nastojimo da ubrzamo. Evo
                                kako:
                            </div>
                        </div>
                    </div>

                    <div className={classes.landing_client__storytelling__peer_programming}>
                        <div className={classes.landing_client__storytelling__peer_programming__text}>
                            <div className={classes.landing_client__storytelling__title}>
                                <h2>Sarađuj sa ekspertom iz IT industrije bez ikakvog teoretisanja</h2>
                            </div>
                            <div className={classes.landing_client__storytelling__description}>
                                <div>- Umesto bubanja steći ćeš praksu.</div>
                                <br />
                                <div>- Nasuprot papira dobićeš znanje.</div>
                                <br />
                                <div>
                                    - Zastarele modele učenja zameni personalizovanim razvojnim putem,
                                    {!isMobile && <br />}a lutanje stalnom podrškom na svakom
                                    {!isMobile && <br />} koraku tvog usavršavanja.
                                </div>
                                <br />
                                <div>
                                    – Aktivno razvijaj projekat sa mentorom{!isMobile && <br />}{" "}
                                    umesto da slušaš dosadna predavanja.
                                </div>
                                <br />
                            </div>
                        </div>
                        <Image
                            className={classes.landing_client__storytelling__image}
                            src={ClientLandingPeerProgrammingImage}
                            alt="Something"
                        />
                    </div>
                </div>

                <div className={classes.landing_client__mentors}>
                    <Image
                        className={classes.landing_client__mentors__image}
                        src={isMobile ? OfficeImageMobile : OfficeImage}
                        alt="Something"
                    />
                    <Link
                        href="/it-kursevi"
                        className={classes.landing_client__mentors__card}
                    >
                        <div className={classes.landing_client__mentors__card__title}>
                            MENTORI
                        </div>
                        <div className={classes.landing_client__mentors__card__description}>
                            Pogledaj detaljnije naš <br /><br />tim i odaberi svog <br /><br />"ličnog trenera"
                        </div>
                        <Image
                            src={ArrowRightImage}
                            className={classes.landing_client__mentors__card__image}
                            alt="Something"
                        />
                    </Link>
                </div>
                {/* <Footer /> */}
                <Menu />
            </div>
        </>
    )
}

export default ClientLandingPage;