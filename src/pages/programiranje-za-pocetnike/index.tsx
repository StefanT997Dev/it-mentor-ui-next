import ClientContactButton from "@/components/ClientContactButton/ClientContactButton";
import useMobile from "@/hooks/useMobile";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import ClientLandingHeaderMobileImage from '@/../public/client-landing/programiranje-za-pocetnike-mobilni.jpg';
import ClientLandingHeaderImage from '@/../public/client-landing/programiranje-za-pocetnike-desktop.jpg';
import ClientLandingTestimonialImage from '@/../public/client-landing/programiranje-za-pocetnike-4.jpg';
import ClientLandingCryImage from '@/../public/client-landing/programiranje-za-pocetnike-2-desktop.jpg';
import ClientLandingCryMobileImage from '@/../public/client-landing/programiranje-za-pocetnike-2-mobilni.jpg';
import ClientLandingSmartMobileImage from '@/../public/client-landing/programiranje-za-pocetnike-3-mobilni.jpg';
import ClientLandingSmartImage from '@/../public/client-landing/programiranje-za-pocetnike-3-desktop.jpg';
import ClientLandingElonMuskImage from '@/../public/client-landing/programiranje-za-pocetnike-5.jpg';
import ClientLandingStudyMobileImage from '@/../public/client-landing/programiranje-za-pocetnike-6-mobilni.jpg';
import ClientLandingStudyImage from '@/../public/client-landing/programiranje-za-pocetnike-6-desktop.jpg';
import ClientLandingPeerProgrammingImage from '@/../public/client-landing/programiranje-za-pocetnike-7.jpg';
import OfficeImageMobile from '@/../public/client-landing/programiranje-za-pocetnike-8-mobilni.jpg';
import OfficeImage from '@/../public/client-landing/programiranje-za-pocetnike-8-desktop.jpg';
import ArrowRightImage from '@/../public/client-landing/programiranje-za-pocetnike-9.png';
import Footer from "@/components/Footer/Footer";
import Logo from "@/components/Logo/Logo";
import Menu from "@/components/Menu/Menu";
import classes from './index.module.scss';

export async function getStaticProps() {
    return {
        props: {}
    };
}

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
                            alt='Kancelarija sa Kancelarijskim stolom, stolicom i računarima, koja gleda na izlazak sunca'
                            sizes='100vw'
                            placeholder='blur' />
                    </div>
                    <div className={classes.landing_client__header__title}>
                        <h1>Korak do četvorocifrene plate, spreman?</h1>
                    </div>
                    <div className={classes.landing_client__header__video}>
                        <iframe
                            src="https://www.youtube.com/embed/b_jmIlVYcTo"
                            srcDoc="<style>
                                *{
                                    padding:0;
                                    margin:0;
                                    overflow:hidden;
                                }

                                body, html{
                                    height: 100%;
                                }

                                img, svg{
                                    position: absolute;
                                    width: 100%;
                                    top: 0;
                                    bottom: 0;
                                    margin: auto;
                                }

                                svg{
                                    filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
                                    transition: all 250ms ease-in-out;
                                }

                                body:hover svg{
                                    filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
                                    transform: scale(1.2);
                                }
                            </style>
                            <a href='https://www.youtube.com/embed/b_jmIlVYcTo?autoplay=1&mute=1'>
                              <img src='https://img.youtube.com/vi/b_jmIlVYcTo/hqdefault.jpg'
                              alt='kako naci posao u it industriji'>
                              <svg xlmns='http://www.w3.org/2000/svg' width='64' height='64'
                              viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2'
                              stroke-linecap='round' stroke-linejoin='round' class='feather
                              feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon
                              points='10 8 16 12 10 16 10 8'></polygon></svg>
                            </a>
                            "
                            loading="lazy"
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
                            alt="Osoba je tužna i plače zbog neuspeha kao posledica primanja odbijenica od strane firmi nakon završenog fakulteta"
                            sizes='100vw'
                            placeholder='blur'
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
                            sizes='100vw'
                            placeholder='blur'
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
                            alt="Uspešan momak prekrštenih ruku stoji ponosno, time pokazujući da je i za polaznika mentorstva moguće doći do visoko plaćenog posla u IT sektoru"
                            sizes='100vw'
                            placeholder='blur'
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
                            alt="Karikatura Elon Musk-a koji pokazuje podignut palac nagoveštavajući da diploma nije potrebna kako bi neko postao programer"
                            sizes='100vw'
                            placeholder='blur'
                        />
                    </div>

                    <div className={classes.landing_client__storytelling__self_education}>
                        <Image
                            className={classes.landing_client__storytelling__image}
                            src={isMobile ? ClientLandingStudyMobileImage : ClientLandingStudyImage}
                            alt="Momak sa naočarama sedi kraj laptopa i uči programiranje samostalno"
                            sizes='100vw'
                            placeholder='blur'
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
                            alt="Karikaturna slika iskusnog programera koji pokazuje programiranje početniku putem online video platforme"
                            sizes='100vw'
                            placeholder='blur'
                        />
                    </div>
                </div>

                <div className={classes.landing_client__mentors}>
                    <Image
                        className={classes.landing_client__mentors__image}
                        src={isMobile ? OfficeImageMobile : OfficeImage}
                        alt="Više programera u kancelariji programira na računaru"
                        sizes='100vw'
                        placeholder='blur'
                    />
                    <Link
                        href="/it-kursevi"
                        className={classes.landing_client__mentors__card}
                    >
                        <div className={classes.landing_client__mentors__card__title}>
                            MENTORI
                        </div>
                        <div className={classes.landing_client__mentors__card__description}>
                            Pogledaj detaljnije naš <br /><br />tim i odaberi svog <br /><br />ličnog trenera
                        </div>
                        <Image
                            src={ArrowRightImage}
                            className={classes.landing_client__mentors__card__image}
                            alt="Strelica koja pokazuje na desno"
                            sizes='100vw'
                            placeholder='blur'
                        />
                    </Link>
                </div>
                <Footer />
                <Menu />
            </div>
        </>
    )
}

export default ClientLandingPage;