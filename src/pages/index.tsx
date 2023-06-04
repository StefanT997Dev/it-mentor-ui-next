import Head from 'next/head'
import useMobile from '@/hooks/useMobile'
import classes from './index.module.scss';
import ClientContactButton from '@/components/ClientContactButton/ClientContactButton';
import TestimonialPerson from '@/../public/home-page/it-obuke-miljan.webp';
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
import Link from 'next/link';
import { exampleMentors } from "@/components/MentorsList/mentors";
import SkillList from '@/components/SkillList/SkillList';
import Image from 'next/image';

// export const getStaticProps = async () => {
//   // const mobileImageUrl = 'https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-mobilni.jpg';
//   // const desktopImageUrl = 'https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-desktop.jpg';

//   // const mobileImageData = await fetch(mobileImageUrl);
//   // const mobileArrayBufferData = await mobileImageData.arrayBuffer();
//   // const mobileLowQualityImagePlaceholder = await lqip(Buffer.from(mobileArrayBufferData));

//   // const desktopImageData = await fetch(desktopImageUrl);
//   // const desktopArrayBufferData = await desktopImageData.arrayBuffer();
//   // const desktopLowQualityImagePlaceholder = await lqip(Buffer.from(desktopArrayBufferData));

//   // return {
//   //   props: {
//   //     lqipMobile: mobileLowQualityImagePlaceholder.metadata.dataURIBase64,
//   //     lqipDesktop: desktopLowQualityImagePlaceholder.metadata.dataURIBase64
//   //   }
//   // }

//   return {
//     props: {

//     }
//   }
// }

// interface HomeProps {
//   lqipMobile: string,
//   lqipDesktop: string
// }

export default function Home() {
  const { isMobile } = useMobile();

  return (
    <>
      <Head>
        <title>IT Obuke | Uči programiranje kroz projekte uz vođstvo seniora</title>
        <meta
          name='description'
          content='Miljan, bivši pica majstor, sada junior programer! Ovo je lično iskustvo našeg polaznika. I ti možeš postati programer u 2023-oj. Saznaj detaljno kako.'
        ></meta>
      </Head>

      <div className={classes.content}>
        {/* <div className={classes.content__img}>
          {isMobile ?
            <Image
              loader={() => 'https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-mobilni.jpg'}
              src='https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-mobilni.jpg'
              alt="Iskusni softverski inženjer iz IT industrije podučava početnika kako da programira"
              width={428}
              height={926}
              sizes='100vw'
              placeholder='blur'
              blurDataURL={lqipMobile}
              priority
            /> : <Image
              loader={() => 'https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-desktop.jpg'}
              src='https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-desktop.jpg'
              alt="Iskusni softverski inženjer iz IT industrije podučava početnika kako da programira"
              width={1920}
              height={1080}
              sizes='100vw'
              placeholder='blur'
              blurDataURL={lqipDesktop}
              priority
            />}
        </div>
        <div className={classes.content__main}>
          <h1 className={classes.content__main__title}>
            Kako naći {isMobile ? <br /> : null}posao u IT sektoru
          </h1>
          <h2 className={classes.content__main__description}>
            Bez obzira da li imaš predznanje ili ne, pomoći ćemo ti da dođeš do prvog zaposlenja u oblasti
            informacionih tehnologija {isMobile && <br />}kroz obuku od strane {isMobile && <br />}stručnjaka iz {isMobile && <br />}industrije
          </h2>
          <div className={classes.content__main__client_container}>
            <div>Odaberi mentora</div>
            <Link
              href="/it-kursevi"
              className={classes.content__main__client_container__start_button}
            >
              Start
            </Link>
            <Image
              className={classes.content__main__client_container__image_container__image}
              src={RoundGraphicWorkImage}
              alt='Samopouzdani mentor sa entuzijastičnim stavom'
              sizes='100vw'
              priority={true}
            />
            <div className={classes.content__main__client_container__got_account}>
              <div className={classes.content__main__client_container__got_account__text}>
                Treba ti više informacija?
              </div>
              <Link
                href="/programiranje-za-pocetnike"
                className={classes.content__main__client_container__got_account__login_link}
              >
                O nama
              </Link>
            </div>
          </div>
        </div> */}

        <div className={classes.content__header}>
          <div className={classes.content__header__image_container}>
            <Image
              className={classes.content__header__image_container__image}
              src={isMobile ? ClientLandingHeaderMobileImage : ClientLandingHeaderImage}
              alt='Kancelarija sa Kancelarijskim stolom, stolicom i računarima, koja gleda na izlazak sunca'
              sizes='100vw'
              placeholder='blur'
              priority
            />
          </div>
          <div className={classes.content__header__title}>
            <h1>Korak do četvorocifrene plate, spreman?</h1>
          </div>
          <div className={classes.content__header__video}>
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
              className={classes.content__header__video__responsive_iframe}
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
          </div>
          <div className={classes.content__header__description}>
            <h2>
              Umesto da potrošiš minimum 4 godine svog života,
              gomilu novca i živaca, bolje je ovako:
            </h2>
          </div>
        </div>

        <div className={classes.content__storytelling}>
          <div className={classes.content__storytelling__problem}>
            <div className={classes.content__storytelling__title}>
              <h2>Počeo sam sa istim problemom kao ti</h2>
            </div>
            <div className={classes.content__storytelling__description}>
              Uzeo sam diplomu FON-a, mislio sam da uz to ide i znanje, ali ovo
              je bio moj ishod na četvrtoj godini fakulteta…
            </div>
            <Image
              src={isMobile ? ClientLandingCryMobileImage : ClientLandingCryImage}
              className={classes.content__storytelling__image}
              alt="Osoba je tužna i plače zbog neuspeha kao posledica primanja odbijenica od strane firmi nakon završenog fakulteta"
              sizes='100vw'
              placeholder='blur'
            //priority={true}
            />
          </div>

          <div className={classes.content__storytelling__testimonial}>
            <div className={classes.content__storytelling__title}>
              <h2>100 konkursa, 100 odbijenih poziva</h2>
            </div>
            <div className={classes.content__storytelling__description}>
              Tek kada sam prebacio fokus sa formalnog obrazovanja na sticanje praktičnih
              veština, tada sam dobio rezultate. Možeš ići mojim putem ili
              izbeći greške koje sam načinio i krenuti ka uspehu. Ovo je
              ponuda koju sam dobio nakon 4 meseca radnog iskustva:
            </div>
            <Image
              src={ClientLandingTestimonialImage}
              className={classes.content__storytelling__image}
              alt="Something"
              sizes='100vw'
              placeholder='blur'
            //priority={true}
            />
          </div>

          <div className={classes.content__storytelling__success}>
            <div className={classes.content__storytelling__title}>
              <h2>Da, i ti to možeš!</h2>
            </div>
            <div className={classes.content__storytelling__description}>
              Nije ti neophodno prethodno poznavanje, zajedno ćemo ići tempom koji
              tebi odgovara.
            </div>
            <Image
              className={classes.content__storytelling__image}
              src={isMobile ? ClientLandingSmartMobileImage : ClientLandingSmartImage}
              alt="Uspešan momak prekrštenih ruku stoji ponosno, time pokazujući da je i za polaznika mentorstva moguće doći do visoko plaćenog posla u IT sektoru"
              sizes='100vw'
              placeholder='blur'
            />
          </div>

          <div className={classes.content__storytelling__knowledge}>
            <div className={classes.content__storytelling__knowledge__text}>
              <div className={classes.content__storytelling__title}>
                <h2>Investiraj u znanje, <br />ne u parče papira!</h2>
              </div>
              <div className={classes.content__storytelling__description}>
                Super je fakultet, lepo je imati diplomu ali ti ona ne garantuje
                zaradu. Praktične i odmah primenjlive veštine možeš steći i za 6
                meseci koristeći najmodernije tehnologije.
                Učenje zastarelih metoda od ljudi koji su teoretičari je kao da i
                dalje narezuješ sve na disk. Nemoj da budeš CD.
              </div>
            </div>
            <Image
              className={classes.content__storytelling__image}
              src={ClientLandingElonMuskImage}
              alt="Karikatura Elon Musk-a koji pokazuje podignut palac nagoveštavajući da diploma nije potrebna kako bi neko postao programer"
              sizes='100vw'
              placeholder='blur'
            />
          </div>

          <div className={classes.content__storytelling__self_education}>
            <Image
              className={classes.content__storytelling__image}
              src={isMobile ? ClientLandingStudyMobileImage : ClientLandingStudyImage}
              alt="Momak sa naočarama sedi kraj laptopa i uči programiranje samostalno"
              sizes='100vw'
              placeholder='blur'
            />
            <div className={classes.content__storytelling__self_education__text}>
              <div className={classes.content__storytelling__title}>
                <h2>Možeš sam do prvog posla neformalnim učenjem</h2>
              </div>
              <div className={classes.content__storytelling__description}>
                Verovatno si razmišljao o samostalnoj edukaciji? I taj proces
                podrazumeva puno vremena, isti pristup nastojimo da ubrzamo. Evo
                kako:
              </div>
            </div>
          </div>

          <div className={classes.content__storytelling__peer_programming}>
            <div className={classes.content__storytelling__peer_programming__text}>
              <div className={classes.content__storytelling__title}>
                <h2>Sarađuj sa ekspertom iz IT industrije bez ikakvog teoretisanja</h2>
              </div>
              <div className={classes.content__storytelling__description}>
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
              className={classes.content__storytelling__image}
              src={ClientLandingPeerProgrammingImage}
              alt="Karikaturna slika iskusnog programera koji pokazuje programiranje početniku putem online video platforme"
              sizes='100vw'
              placeholder='blur'
            />
          </div>
        </div>

        <div className={classes.content__mentors}>
          <Image
            className={classes.content__mentors__image}
            src={isMobile ? OfficeImageMobile : OfficeImage}
            alt="Više programera u kancelariji programira na računaru"
            sizes='100vw'
            placeholder='blur'
          />
          <Link
            href="/"
            className={classes.content__mentors__card}
          >
            <div className={classes.content__mentors__card__title}>
              MENTORI
            </div>
            <div className={classes.content__mentors__card__description}>
              Pogledaj detaljnije naš <br /><br />tim i odaberi svog <br /><br />ličnog trenera
            </div>
            <Image
              src={ArrowRightImage}
              className={classes.content__mentors__card__image}
              alt="Strelica koja pokazuje na desno"
              sizes='100vw'
              placeholder='blur'
            />
          </Link>
        </div>

        <div className={classes.content__testimonial}>
          <h2 className={classes.content__testimonial__title}>Kako postati programer: Miljan Pjanović, bivši pica majstor, sada backend developer u IT firmi iz Novog Sada</h2>
          <Image
            className={classes.content__testimonial__image}
            src={TestimonialPerson}
            alt="Bivši polaznik mentorstva sedi ispred računara"
            sizes='100vw'
            placeholder='blur'
          />
          <h3 className={classes.content__testimonial__subtitle}>Prekvalifikacija za IT: Miljanovi izazovi i motivacija</h3>
          <div className={classes.content__testimonial__description}>
            "Imao sam želju da promenim trenutni posao za nešto bolje i preporučujem svakome da, ukoliko hoće da uđe u IT industriju, stremi ka tome."<br /><br />

            "Izazova je bilo gomilu, kao što ih je i dan danas, tako da nemam neki konkretan."<br /><br />

            "Motivaciju sam tražio apsolutno na svim mogućim mestima, najpre razgovarajući sa drugim programerima."
          </div>
          <h3 className={classes.content__testimonial__subtitle}>Da li je programiranje teško?</h3>
          <div className={classes.content__testimonial__description}>
            "Programiranje samo po sebi nije teško, ali iziskuje trud da se nauči i shvati kako stvari funkcionišu i zbog čega."
          </div>
          <h3 className={classes.content__testimonial__subtitle}>Kursevi programiranja nasuprot mentorstvu</h3>
          <div className={classes.content__testimonial__description}>
            "Mentorstvo je mnogo bolje, jer je sva pažnja usmerena ka učeniku."
          </div>
          <h3 className={classes.content__testimonial__subtitle}>Kako je Miljan postao junior c sharp programer i ostvario svoje ambicije</h3>
          <div className={classes.content__testimonial__description}>
            "Pa počeo sam sa kursevima, konkurisao nakon završetka i nisam dobio poziv ni na jedan intervju."<br /><br />

            "Nakon toga sam samostalno učio preko interneta, pa sve do mentorstva. Nakon mentorstva sam našao posao."<br /><br /><br />
          </div>
        </div>

        <div className={classes.content__info}>
          <br />
          <div className={classes.content__info__text}>
            <h2 className={classes.content__info__text__title}>Kako naučiti programiranje: Jedinstveni pristup obrazovanja kroz projekte</h2>
            <h3 className={classes.content__info__text__subtitle}>Vodiće te IT stručnjak i ubrzati tvoj napredak</h3>
            <div className={classes.content__info__text__description}>
              Uz naš inovativni stil podučavanja kroz simulaciju poslovnog okruženja, dobićeš priliku da <strong>brže od ostalih</strong> postigneš svoj cilj prvog zaposlenja.<br /><br />

              Ovo će ti dati kompetitivnu prednost nad polaznicima kurseva i fakulteta jer ćeš jedini imati adekvatno znanje neophodno za prvi posao i projekte iza sebe koji na to ukazuju.<br /><br />

              Nijedan poslodavac ne želi teoretičara sa parčetom papira koji će recitovati naučene definicije, već nekoga ko će moći da se nosi sa realnim poslovnim zahtevima.<br /><br />

              Odmah na početku obuke, dobićeš priliku da se upustiš u izgradnju <strong>real-world aplikacija</strong> i programskih rešenja. Ovi projekti su struktuirani da kroz njih pređeš tehnologije koje će ti biti potrebne na prvom poslu.<br /><br />

              Naši IT stručnjaci će te nadgledati tokom čitavog procesa, pružajući ti dragocene povratne informacije i usmeravanje. Oni će redovno <strong>pregledati tvoj kod</strong>, identifikovati potencijalne greške i pružiti smernice kako bi unapredio/la svoje veštine.<br /><br />

              Ova direktna interakcija sa mentorima omogućiće ti da brzo stekneš uvid u najbolje prakse i razumeš efektivne načine rešavanja problema.<br /><br />

              Uz mentorsku podršku, bićeš u mogućnosti da stekneš poverenje u svoje veštine i izgradiš portfolio impresivnih projekata.<br /><br />

              Kada završiš naš program, imaćeš sve alate i veštine koje su ti potrebne za pronalaženje svog <strong>prvog posla kao programer</strong>.<br /><br />
            </div>
          </div>
        </div>

        <div className={classes.content__info2}>
          <br />
          <div className={classes.content__info2__text}>
            <h3 className={classes.content__info2__text__subtitle}>Soft skillovi: Razvijanje veština saradnje</h3>
            <div className={classes.content__info2__text__description}>
              Uz naš program, ne samo da stičeš tehničko znanje, već ćeš takođe imati priliku da razviješ važne veštine saradnje.<br /><br />

              Uvereni smo da su soft skillovi ključni za uspeh u IT industriji i zato posvećujemo posebnu pažnju njihovom razvijanju.<br /><br />

              Naš fokus nije samo na kodiranju - mi te podstičemo da radiš u timskom okruženju, sarađuješ sa drugim polaznicima i mentorima, i stekneš veštine komunikacije, liderstva i efektivne saradnje.<br /><br />

              Kroz različite projekte, naučićeš kako uspešno komunicirati, razmenjivati ideje, rešavati probleme zajedno i doprineti timskom uspehu.<br /><br />

              Poslodavci sve više traže programere koji ne samo da imaju tehničko znanje, već i sposobnost da efektivno sarađuju u timu. Uz našu pomoć, ti ćeš razviti te veštine i imati konkurentske prednosti na tržištu rada.
            </div>

            <h3 className={classes.content__info__text__subtitle}>Učenje programiranja online: Ne moraš da putuješ svaki dan i gubiš vreme u prevozu</h3>
            <div className={classes.content__info__text__description}>
              Pored sačuvanog vremena imaćeš mogućnost da, bez obzira gde se nalaziš, pronađeš stručnog mentora iz bilo koje regije ili zemlje.<br /><br />

              Učenje će takođe biti prilagođeno tvom rasporedu.<br /><br /><br />
            </div>
          </div>
        </div>

        <div className={classes.content__info3}>
          <br />
          <div className={classes.content__info3__text}>
            <h3 className={classes.content__info3__text__subtitle}>Povećanje vidljivosti i zapošljivosti kroz developer portfolio</h3>
            <div className={classes.content__info3__text__description}>
              Jedan od ključnih koraka ka uspešnoj karijeri u razvoju softvera je imati impresivnu <strong>tehničku biografiju</strong> koja prikazuje tvoje veštine, kreativnost i sposobnost da rešavaš stvarne probleme.<br /><br />

              Tvoja kolekcija radova biće svedočanstvo dostignuća i veština koje si stekao kroz rad na projektima.<br /><br />

              Imati konkretne primere softverskih rešenja u cv-u je snažan alat za privlačenje potencijalnih poslodavaca i povećanje tvojih šansi za dobijanje posla.
            </div>
            <h3 className={classes.content__info__text__subtitle}>Pravi scenariji iz IT industrije: Sticanje relevantnih veština za tržište rada</h3>
            <div className={classes.content__info3__text__description}>
              Ono što ćeš dobiti kod nas a ne možeš nigde drugde jeste <strong>simulirano poslovno okruženje</strong>.<br /><br />

              Kao i na radnom mestu, imaćeš team lead-a sa kojim ćeš planirati task-ove, dobijati njegove smernice i povratne informacije pri završenju određenih funkcionalnosti aplikacije.<br /><br />
            </div>
          </div>
        </div>

        <div className={classes.content__info2}>
          <br />
          <div className={classes.content__info2__text}>
            <h3 className={classes.content__info2__text__subtitle}>Full stack, front end, backend developer, android programiranje, ios programiranje, web design, QA testiranje, project manager… Kako da odabereš zanimanje i šta ako načiniš pogrešan izbor?</h3>
            <div className={classes.content__info2__text__description}>
              Objasnićemo ti fleksibilan pristup koji nudimo na primeru jednog od polaznika.<br /><br />

              Mihajlo je krenuo na mentorstvo za bekend programera.<br /><br />

              Nakon par sesija Stefan, mentor, je uvideo da Mihajlo sporo napreduje i ne pokazuje interesovanje i zadovoljstvo.<br /><br />

              Umesto obučavanja na silu, na osnovu prepoznatih afiniteta klijenta, Mihajlo je prebačen kod mentora UI/UX dizajna.<br /><br />

              Isti bivše nezainteresovan momak je sada procvetao jer je zapravo pronašao ono što voli.<br /><br />

              Tako da, ako probaš i vidiš da ne ide iz bilo kog razloga, imaš mogućnost da promeniš mentora, bilo iz iste ili različite oblasti.<br /><br /><br /><br />
            </div>
          </div>
        </div>

        <div className={classes.content__info__text}>
          <div className={classes.content__info__text__title}>
            IT Kursevi vs Razvoj projekta sa mentorom u 2023-oj
          </div>
          <div className={classes.content__info__text__subtitle}>
            <h2>Razlozi zašto je imati personalnog trenera u programiranju bolje od klasičnog {!isMobile && <br />}pohađanja nastave u učionici:</h2>
          </div>
          <div className={classes.content__info__text__description}>
            - Nema dosadnih predavanja i smorenih profesora koji ti prenose zastarelo
            gradivo. Tvoj mentor će te učiti na način koji tebi odgovara.
            <br />
            <br />
            - Kada pohađaš nastavu ili kurs, moraš pratiti tempo grupe, mentor će prilagoditi ritam tvojim potrebama.
            Tako da ako si izuzetno nadaren, IT vodič će te brzo naučiti sve što treba, ukoliko si malo sporiji,
            neće te ostaviti iza sebe.
            <br />
            <br />
            - U mentorstvu nećeš gubiti vreme rešavajući zadatke koji ti neće koristiti u stvarnom životu.
            Tutor će se pobrinuti da naučiš praktične stvari koje će ti kasnije biti korisne u poslu.
            <br />
            <br />
            - Kada učiš sam, često ćeš se naći u situaciji da ne znaš kako dalje. U mentorstvu, imaćeš nekoga ko će ti dati
            savet i izbaviti iz problema.
            <br />
            <br />
          </div>
          <div className={classes.content__info__text__subtitle}>
            <h2>Online način rada</h2>
          </div>
          <div className={classes.content__info__text__description}>
            Mentorstvo u programiranju pruža dodatne prednosti i fleksibilnost u procesu učenja.
            Neki od benefita su:
            <br />
            <br />
            Pristupačnost: Bez obzira na to gde se nalaziš, pronaći ćeš stručnog mentora
            iz bilo koje regije ili zemlje. Nema geografskih ograničenja, pa ćeš imati
            mogućnost odabira između raznih tutora sa različitim iskustvom i veštinama.
            <br />
            <br />
            Fleksibilnost vremena: Online mentorstvo omogućiće ti učenje prilagodeno tvom rasporedu.
            Nema potrebe za putovanjem do određenog mesta ili pridržavanjem vremena nastave.
            <br />
            <br />
            Možeš se dogovoriti s’ mentorom o terminima koji ti najviše odgovaraju,
            što je posebno korisno ako imaš druge obaveze.
            <br />
            <br />
          </div>
          <div className={classes.content__info__text__subtitle}>
            <h2>It sertifikat vs pisane preporuke</h2>
          </div>
          <div className={classes.content__info__text__description}>
            Jedna od značajnih razlika između mentorstva u programiranju i klasičnih kurseva
            ili fakulteta je pristup izdavanju sertifikata po završetku obuke.
            <br />
            <br />
            Dok se u tradicionalnom obrazovnom sistemu često ističe važnost sertifikata,
            mentorstvo donosi nešto drugačiji pristup.
            <br />
            <br />
            Kod nas, nakon završetka mentorstva, dobćeš nešto mnogo vrednije od običnog papira
            - direktnu pisanu preporuku mentora sa kojim si radio.
            <br />
            <br />
            Ova preporuka ne samo da će pokazati tvoje uspehe i veštine, već će
            biti prilagođena tvojim tačnim kvalifikacijama i dostignućima.
            <br />
            <br />
            To znači da ćeš imati konkretan dokument koji ističe tvoje stvarne
            sposobnosti i radno iskustvo, pružajući potencijalnim poslodavcima
            ili klijentima dublji uvid u tvoje kvalifikacije.
            <br />
            <br />
            Poredeći ovo sa dobijanjem sertifikata na kursevima ili fakultetima,
            može se reći da ti tradicionalni sertifikati ne pružaju stvarnu vrednost.
            <br />
            <br />
            Oni su često beskorisni papiri koji samo potvrđuju da si proveo određeno vreme
            u učionici ili prošao određeni ispit.
            <br />
            <br />
            S druge strane, naša praksa pružanja pisanih preporuka omogućava da se fokusiraš
            na sticanje stvarnih veština i znanja koji su relevantni za tvoju karijeru.
            <br />
            <br />
            Važno je napomenuti da izdavanje sertifikata često dovodi do ograničavanja gradiva
            koje se podučava. Kursevi moraju pratiti određene smernice kako bi izdali sertifikat,
            što znači da se mora prenositi određeno gradivo bez obzira na to koliko je relevantno ili ažurno.
            <br />
            <br />
            Sa druge strane, mentorstvo se prilagođava tvojim specifičnim potrebama i ciljevima,
            omogućavajući ti da budeš u koraku sa vremenom i stičeš veštine koje su trenutno tražene u industriji.
            <br />
            <br />
            Dakle, umesto da se oslanjaš na sertifikate koji imaju ograničenja i ne pružaju dublji uvid u tvoje
            sposobnosti, dobićeš pisane preporuke koje su personalizovane i vrednovane od strane mentora koji
            je direktno radio s tobom.
            <br />
            <br />
            Ovaj pristup će dati veću vrednost tvojim kvalifikacijama i omogućiti da se istakneš u
            industriji na temelju stvarnih dostignuća i preporuka mentora.
            <br />
            <br />
          </div>
          <div className={classes.content__info__text__subtitle}>
            <h2>Trajanje mentorstva</h2>
          </div>
          <div className={classes.content__info__text__description}>
            Jedna od ključnih prednosti mentorstva u programiranju je mogućnost prilagođavanja
            dužine vremenskog perioda podučavanja tvojim individualnim potrebama.
            <br />
            <br />
            Ova personalizacija i fleksibilnost će ti pružiti mnoge benefite u poređenju s
            klasičnim kursevima ili fakultetima.
            <br />
            <br />
            Kod nas, trajanje mentorstva nije unapred određeno fiksnim periodom. Umesto toga,
            mentorstvo se adaptira tvojim specifičnim ciljevima, trenutnom nivou znanja i
            vremenskim mogućnostima, što će ti omogućiti da napreduješ u skladu s vlastitim
            tempom.
            <br />
            <br />
            Benefiti personalizovanog trajanja mentorstva su višestruki. Najpre, dobićeš
            priliku da dublje istražiš i razumeš koncepte koji ti možda predstavljaju izazov.
            <br />
            <br />
            Moći ćeš brže da napreduješ ukoliko si već vešt u određenim područjima. Nećeš morati
            da provodiš vreme na gradivu koje već dobro poznaješ, umesto toga ćeš se fokusirati
            na razvoj novih veština i na savladavanje nepoznatih izazova.
            <br />
            <br />
            S druge strane, klasični kursevi i fakulteti često imaju fiksne termine i ograničeno
            trajanje nastave. Nakon što završiš kurs ili fakultet, tvoje učešće obično završava,
            a nastavak podrške u zaposlenju postaje ograničen.
            <br />
            <br />
            Nama je cilj da podržimo tvoj napredak i uspeh ne samo tokom trajanja mentorstva,
            već i nakon toga. Nastojimo da ti pomognemo u pronalaženju posla i daljem razvoju karijere,
            pružajući kontinuiranu podršku.
            <br />
            <br />
          </div>
          <div className={classes.content__info__text__subtitle}>
            <h2>Simulacija poslovnog okruženja</h2>
          </div>
          <div className={classes.content__info__text__description}>
            Jedan od ključnih aspekata mentorstva u programiranju je naglasak rada na stvarnim
            projektima koji oponašaju rad u firmi.
            <br />
            <br />
            Ova praksa ima mnoge prednosti u poređenju sa tradicionalnim kursevima ili fakultetima.
            <br />
            <br />
            Kada odabereš mentorstvo, tvoj vodič će te usmeriti da radiš na aplikacijama koje
            su relevantne za tvoje područje interesa i karijerne ciljeve.
            <br />
            <br />
            Ovi projekti su oblikovani tako da reflektuju situacije i izazove sa kojima ćeš
            se suočavati u stvarnom svetu programiranja.
            <br />
            <br />
            Radićeš na pravim zadacima i problemima koji se mogu pojaviti u industriji,
            što će ti pružiti dragoceno iskustvo i pripremiti za stvarne poslovne situacije.
            <br />
            <br />
            Ova praksa se razlikuje od tradicionalnih kurseva ili fakulteta gde se često
            naglasak stavlja na teorijsko gradivo ili rešavanje zadataka samo radi polaganja ispita.
            <br />
            <br />
            Kroz razvoj aplikacija sa mentorom ćeš takođe dobiti priliku da stekneš iskustvo u timskom radu i
            upravljanju projektima.
            <br />
            <br />
            Rad na projektima u okviru mentorstva pružiće ti sjajnu priliku da razviješ svoj portfolio
            i istakneš svoje veštine u svom CV-u prilikom apliciranja za posao.
            <br />
            <br />
            Ovi projekti mogu poslužiti kao konkretni dokazi tvog rada i sposobnosti da primeniš
            svoje znanje u praksi.
            <br />
            <br />
            To je od izuzetne važnosti jer poslodavci često traže praktično iskustvo i dokaze o
            sposobnosti da se efikasno nosiš s realnim izazovima.
            <br />
            <br />
          </div>
          <div className={classes.content__info__text__subtitle}>
            <h2>It prekvalifikacija kroz mentorstvo</h2>
          </div>
          <div className={classes.content__info__text__description}>
            Mentorstvo u programiranju pruža izvanredne mogućnosti za promenu karijere.
            <br />
            <br />
            Bez obzira na to da li dolaziš iz potpuno drugog područja ili želiš unaprediti
            svoje postojeće veštine, mentorstvo će ti pružiti potrebnu podršku i usmeriti
            na putu ka uspešnoj tranziciji.
          </div>
        </div>

        <div className={classes.mentor_profile__header}>
          <Image
            src={exampleMentors[0].image}
            className={classes.mentor_profile__header__image}
            alt="Something"
            sizes='100vw'
            placeholder='blur'
          />
          <div className={classes.mentor_profile__header__content}>
            <div className={classes.mentor_profile__header__text}>
              <div className={classes.mentor_profile__header__text__title}>
                {exampleMentors[0].firstName} {exampleMentors[0].lastName}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {exampleMentors[0].category}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {`radi u: ${exampleMentors[0].worksAt}`}
              </div>
              <div className={classes.mentor_profile__header__skills}>
                <SkillList skills={exampleMentors[0].skills} isLimited={false} />
              </div>
              <div className={classes.mentor_profile__header__text__bio}>{exampleMentors[0].bio}</div>
            </div>
          </div>
        </div>

        <div className={classes.mentor_profile__header}>
          <Image
            src={exampleMentors[1].image}
            className={classes.mentor_profile__header__image}
            alt="Something"
            sizes='100vw'
            placeholder='blur'
          />
          <div className={classes.mentor_profile__header__content}>
            <div className={classes.mentor_profile__header__text}>
              <div className={classes.mentor_profile__header__text__title}>
                {exampleMentors[1].firstName} {exampleMentors[1].lastName}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {exampleMentors[1].category}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {`radi u: ${exampleMentors[1].worksAt}`}
              </div>
              <div className={classes.mentor_profile__header__skills}>
                <SkillList skills={exampleMentors[1].skills} isLimited={false} />
              </div>
              <div className={classes.mentor_profile__header__text__bio}>{exampleMentors[1].bio}</div>
            </div>
          </div>
        </div>

        <div className={classes.mentor_profile__header}>
          <Image
            src={exampleMentors[2].image}
            className={classes.mentor_profile__header__image}
            alt="Something"
            sizes='100vw'
            placeholder='blur'
          />
          <div className={classes.mentor_profile__header__content}>
            <div className={classes.mentor_profile__header__text}>
              <div className={classes.mentor_profile__header__text__title}>
                {exampleMentors[2].firstName} {exampleMentors[2].lastName}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {exampleMentors[2].category}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {`radi u: ${exampleMentors[2].worksAt}`}
              </div>
              <div className={classes.mentor_profile__header__skills}>
                <SkillList skills={exampleMentors[2].skills} isLimited={false} />
              </div>
              <div className={classes.mentor_profile__header__text__bio}>{exampleMentors[2].bio}</div>
            </div>
          </div>
        </div>

        <div className={classes.mentor_profile__header}>
          <Image
            src={exampleMentors[3].image}
            className={classes.mentor_profile__header__image}
            alt="Something"
            sizes='100vw'
            placeholder='blur'
          />
          <div className={classes.mentor_profile__header__content}>
            <div className={classes.mentor_profile__header__text}>
              <div className={classes.mentor_profile__header__text__title}>
                {exampleMentors[3].firstName} {exampleMentors[3].lastName}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {exampleMentors[3].category}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {`radi u: ${exampleMentors[3].worksAt}`}
              </div>
              <div className={classes.mentor_profile__header__skills}>
                <SkillList skills={exampleMentors[3].skills} isLimited={false} />
              </div>
              <div className={classes.mentor_profile__header__text__bio}>{exampleMentors[3].bio}</div>
            </div>
          </div>
        </div>

        <div className={classes.mentor_profile__header}>
          <Image
            src={exampleMentors[4].image}
            className={classes.mentor_profile__header__image}
            alt="Something"
            sizes='100vw'
            placeholder='blur'
          />
          <div className={classes.mentor_profile__header__content}>
            <div className={classes.mentor_profile__header__text}>
              <div className={classes.mentor_profile__header__text__title}>
                {exampleMentors[4].firstName} {exampleMentors[4].lastName}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {exampleMentors[4].category}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {`radi u: ${exampleMentors[4].worksAt}`}
              </div>
              <div className={classes.mentor_profile__header__skills}>
                <SkillList skills={exampleMentors[4].skills} isLimited={false} />
              </div>
              <div className={classes.mentor_profile__header__text__bio}>{exampleMentors[4].bio}</div>
            </div>
          </div>
        </div>

        <div className={classes.mentor_profile__header}>
          <Image
            src={exampleMentors[5].image}
            className={classes.mentor_profile__header__image}
            alt="Something"
            sizes='100vw'
            placeholder='blur'
          />
          <div className={classes.mentor_profile__header__content}>
            <div className={classes.mentor_profile__header__text}>
              <div className={classes.mentor_profile__header__text__title}>
                {exampleMentors[5].firstName} {exampleMentors[5].lastName}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {exampleMentors[5].category}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {`radi u: ${exampleMentors[5].worksAt}`}
              </div>
              <div className={classes.mentor_profile__header__skills}>
                <SkillList skills={exampleMentors[5].skills} isLimited={false} />
              </div>
              <div className={classes.mentor_profile__header__text__bio}>{exampleMentors[5].bio}</div>
            </div>
          </div>
        </div>

        <div className={classes.mentor_profile__header}>
          <Image
            src={exampleMentors[6].image}
            className={classes.mentor_profile__header__image}
            alt="Something"
            sizes='100vw'
            placeholder='blur'
          />
          <div className={classes.mentor_profile__header__content}>
            <div className={classes.mentor_profile__header__text}>
              <div className={classes.mentor_profile__header__text__title}>
                {exampleMentors[6].firstName} {exampleMentors[6].lastName}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {exampleMentors[6].category}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {`radi u: ${exampleMentors[6].worksAt}`}
              </div>
              <div className={classes.mentor_profile__header__skills}>
                <SkillList skills={exampleMentors[6].skills} isLimited={false} />
              </div>
              <div className={classes.mentor_profile__header__text__bio}>{exampleMentors[6].bio}</div>
            </div>
          </div>
        </div>

        <div className={classes.mentor_profile__header}>
          <Image
            src={exampleMentors[7].image}
            className={classes.mentor_profile__header__image}
            alt="Something"
            sizes='100vw'
            placeholder='blur'
          />
          <div className={classes.mentor_profile__header__content}>
            <div className={classes.mentor_profile__header__text}>
              <div className={classes.mentor_profile__header__text__title}>
                {exampleMentors[7].firstName} {exampleMentors[7].lastName}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {exampleMentors[7].category}
              </div>
              <div className={classes.mentor_profile__header__text__category}>
                {`radi u: ${exampleMentors[7].worksAt}`}
              </div>
              <div className={classes.mentor_profile__header__skills}>
                <SkillList skills={exampleMentors[7].skills} isLimited={false} />
              </div>
              <div className={classes.mentor_profile__header__text__bio}>{exampleMentors[7].bio}</div>
            </div>
          </div>
        </div>

        <br/>
        <br/>

        <div className={classes.content__faq}>
          <div className={classes.content__faq__text}>
            <h2 className={classes.content__faq__text__title}>IT mentorstvo:<br />Sve što trebaš znati (FAQ)</h2>
            <h3 className={classes.content__faq__text__question}>Kako funkcioniše program obuke?</h3>
            <div className={classes.content__faq__text__answer}>
              Objasnićemo na primeru Stefana, mentora, i Miljana, polaznika.<br /><br />

              Nakon inicijalnog propitivanja u cilju otkrivanja trenutnog znanja klijenta, Stefan je napravio <strong>personalizovani razvojni plan</strong> Miljanu i odmah su krenuli da rade na projektu.<br /><br />

              Mentor je davao smernice šta i gde Miljan treba da istražuje kod kuće, radio proveru koda nakon svake završene funkcionalnosti aplikacije na kojoj su radili. Odgovarao na svako pitanje koje je Miljan imao.<br /><br />

              Ispravljao greške, davao mu najbolje pristupe iz industrije, i s’ obzirom da je sada imao konekciju, Miljan se, posetom Pančevu, upoznao i sa radom jedne od IT kompanija.
            </div>
            <h3 className={classes.content__faq__text__question}>Ko su mentori i kakvo iskustvo imaju?</h3>
            <div className={classes.content__faq__text__answer}>
              Ono što nas izdvaja jeste činjenica da mentor mora biti zapošljeni softverski inženjer.<br /><br />

              Ovo je jedan od preduslova kojim osiguravamo da je u koraku sa vremenom.<br /><br />

              Svi imaju višegodišnje iskustvo u IT industriji i prolaze kroz proces selekcije pre nego da postanu mentori.<br /><br />

              Dakle, ko su oni? Tvoje buduće kolege.
            </div>
            <h3 className={classes.content__faq__text__question}>Koliko traje obuka programera?</h3>
            <div className={classes.content__faq__text__answer}>
              Jedna od pogodnosti mentorstva jeste što je trajanje obuke fleksibilno u zavisnosti od tvojih obaveza.<br /><br />

              Imamo obzir prema svima koji menjaju karijeru, roditelji su, studiraju i slično.<br /><br />

              Ide se tempom koji tebi odgovara. Ako imaš da posvetiš puno vremena, odlično! Nećemo te sputavati i ubrzaćemo proces tvoje obuke.<br /><br />

              Ukoliko si preokupiran obavezama, takođe ćemo se pobrinuti da dođeš do istog cilja i prilagoditi tvom rasporedu.
            </div>
            <h3 className={classes.content__faq__text__question}>Koja je cena?</h3>
            <div className={classes.content__faq__text__answer}>
              Naknada mentorstva varira u zavisnosti od nekoliko faktora. Prvo, imaš mogućnost da biraš između ličnog mentorstva ili izrade projekata u timu, opet naravno pod nadzorom team lead-a.<br /><br />

              Ako se odlučiš za individualno mentorstvo, imaćeš <strong>jedan-na-jedan</strong> sesije sa mentorom, gde će se sva pažnja biti posvećena isključivo tebi i tvom napretku.<br /><br />

              S druge strane, ako želiš da budeš deo tima, mentor će te voditi zajedno sa do 5 drugih članova, dok svi zajedno razvijate aplikacije.<br /><br />

              Drugi faktor koji može uticati na cenu je <strong>nivo znanja polaznika</strong>. Ako si apsolutni početnik i nemaš prethodno iskustvo, mentor će ti pružiti sveobuhvatno obrazovanje i vođenje, što zahteva veći broj sesija.<br /><br />

              Nasuprot tome, ukoliko već poseduješ određeno znanje ili iskustvo, mentor će se fokusirati na nadogradnju tvojih veština.<br /><br />

              Dakle na cenu utiče broj sesija koji je potrebno odraditi kako bi došao do prvog posla. Ukoliko si apsolutni početnik, on je veći i to utiče na naknadu usluge.<br /><br />

              <strong>Cena mentorstva</strong> se takođe razlikuje od mentora do mentora.<br /><br />

              Imajući u vidu sve ove faktore, investicija koju ćeš načiniti do tvog prvog zaposlenja okvirno iznosi <strong>između 500 i 2500 evra</strong>.<br /><br />

              Ukoliko si informisan o platama programera svestan si da ćeš istu povratiti dok trepneš.
            </div>
            <h3 className={classes.content__faq__text__question}>Da li moram da imam diplomu kako bih ušao u IT sektor?</h3>
            <div className={classes.content__faq__text__answer}>
              Privatnika uglavnom ne zanima da li imaš <strong>prosek 10.00</strong>,
              njega jedino interesuje da li poseduješ veštine neophodne za obavljanje posla i možeš li, uz pomoć tih skill-ova, njemu doneti profit ili ne.<br /><br />

              Diploma je neophodna da bi postao doktor ili pravnik? <strong>Da</strong>.<br /><br />

              Treba ti kako bi postao programer? <strong>Ne</strong>.
            </div>
            <h3 className={classes.content__faq__text__question}>Prijava za IT obuku</h3>
            <div className={classes.content__faq__text__answer}>
              Sve što trebaš uraditi jeste da pozoveš broj telefona na dnu ekrana.<br /><br /><br /><br />
            </div>
          </div>
        </div>
        <ClientContactButton />
      </div>
    </>
  )
}