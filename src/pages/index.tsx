import Head from 'next/head'
import Link from 'next/link'
import useMobile from '@/hooks/useMobile'
import RoundGraphicWorkImage from '@/../public/it-obuke.svg';
import classes from './index.module.scss';
import dynamic from 'next/dynamic';
import lqip from 'lqip-modern';
import ClientContactButton from '@/components/ClientContactButton/ClientContactButton';

export const getStaticProps = async () => {
  const mobileImageUrl = 'https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-mobilni.jpg';
  const desktopImageUrl = 'https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-desktop.jpg';

  const mobileImageData = await fetch(mobileImageUrl);
  const mobileArrayBufferData = await mobileImageData.arrayBuffer();
  const mobileLowQualityImagePlaceholder = await lqip(Buffer.from(mobileArrayBufferData));

  const desktopImageData = await fetch(desktopImageUrl);
  const desktopArrayBufferData = await desktopImageData.arrayBuffer();
  const desktopLowQualityImagePlaceholder = await lqip(Buffer.from(desktopArrayBufferData));

  return {
    props: {
      lqipMobile: mobileLowQualityImagePlaceholder.metadata.dataURIBase64,
      lqipDesktop: desktopLowQualityImagePlaceholder.metadata.dataURIBase64
    }
  }
}

interface HomeProps {
  lqipMobile: string,
  lqipDesktop: string
}

export default function Home({ lqipMobile, lqipDesktop }: HomeProps) {
  const { isMobile } = useMobile();

  const Image = dynamic(() => import('next/image'), { ssr: false });

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
        <div className={classes.content__img}>
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
        </div>

        <div className={classes.content__info}>
          <div className={classes.content__info__text}>
            <h2 className={classes.content__info__text__title}>Kako naučiti programiranje: Jedinstveni pristup učenja kroz projekte</h2>
            <h3 className={classes.content__info__text__subtitle}>Vodiće te IT stručnjak i ubrzati tvoj napredak</h3>
            <div className={classes.content__info__text__description}>
              Uz naš inovativni stil podučavanja kroz simulaciju poslovnog okruženja, dobićeš priliku da <strong>brže od ostalih</strong> postigneš svoj cilj prvog zaposlenja.<br/><br/>

              Ovo će ti dati kompetitivnu prednost nad polaznicima kurseva i fakulteta jer ćeš jedini imati adekvatno znanje neophodno za prvi posao i projekte iza sebe koji na to ukazuju.<br/><br/>

              Nijedan poslodavac ne želi teoretičara sa parčetom papira koji će recitovati naučene definicije, već nekoga ko će moći da se nosi sa realnim poslovnim zahtevima.<br/><br/>

              Odmah na početku obuke, dobićeš priliku da se upustiš u izgradnju <strong>real-world aplikacija</strong> i programskih rešenja. Ovi projekti su struktuirani da kroz njih pređeš tehnologije koje će ti biti potrebne na prvom poslu.<br/><br/>

              Naši IT stručnjaci će te nadgledati tokom čitavog procesa, pružajući ti dragocene povratne informacije i usmeravanje. Oni će redovno <strong>pregledati tvoj kod</strong>, identifikovati potencijalne greške i pružiti smernice kako bi unapredio/la svoje veštine.<br/><br/>

              Ova direktna interakcija sa mentorima omogućiće ti da brzo stekneš uvid u najbolje prakse i razumeš efektivne načine rešavanja problema.<br/><br/>

              Uz mentorsku podršku, bićeš u mogućnosti da stekneš poverenje u svoje veštine i izgradiš portfolio impresivnih projekata.<br/><br/>

              Kada završiš naš program, imaćeš sve alate i veštine koje su ti potrebne za pronalaženje svog <strong>prvog posla kao programer</strong>.<br/><br/><br/><br/>
            </div>
          </div>
        </div>

        <div className={classes.content__faq}>
          <div className={classes.content__faq__text}>
            <h2 className={classes.content__faq__text__title}>IT mentorstvo:<br />Sve što trebaš znati (FAQ)</h2>
            <h3 className={classes.content__faq__text__question}>Kako funkcioniše program obuke?</h3>
            <div className={classes.content__faq__text__answer}>
              Objasnićemo na primeru Stefana, mentora, i Miljana, polaznika.<br /><br />

              Nakon inicijalnog propitivanja u cilju otkrivanja trenutnog znanja klijenta, Stefan je napravio <strong>personalizovani razvojni plan</strong> Miljanu i odmah su krenuli da rade na projektu.<br /><br />

              Mentor je davao smernice šta i gde Miljan treba da istražuje kod kuće, radio proveru koda nakon svake završene funkcionalnosti aplikacije na kojoj su radili. Odgovarao na svako pitanje koje je Miljan imao.<br /><br />

              Ispravljao greške, davao mu najbolje pristupe iz industrije, i s’ obzirom da je sada imao konekciju, Miljan se, posetom Pančevu, upoznao i sa radom jedne od IT firmi.
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