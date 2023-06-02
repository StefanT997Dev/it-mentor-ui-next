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
        <title>IT Obuke | Provera koda na svakom koraku tvog razvoja</title>
        <meta
          name='description'
          content='Dođi do prvog visoko plaćenog posla u sektoru informacionih tehnologija kroz saradnju sa softverskim inženjerom iz industrije'
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

        <div className={classes.content__faq}>
          <h2>IT mentorstvo:<br />Sve što trebaš znati.</h2>
          <h3>Kako funkcioniše program obuke?</h3>
          <div className={classes.faq__answer}>
            Objasnićemo na primeru Stefana, mentora, i Miljana, polaznika.

            Nakon inicijalnog propitivanja u cilju otkrivanja trenutnog znanja klijenta, Stefan je napravio personalizovani razvojni plan Miljanu i odmah su krenuli da rade na projektu.

            Mentor je davao smernice šta i gde Miljan treba da istražuje kod kuće, radio proveru koda nakon svake završene funkcionalnosti aplikacije na kojoj su radili. Odgovarao na svako pitanje koje je Miljan imao.

            Ispravljao greške, davao mu najbolje pristupe iz industrije tokom mentorstva, i s’ obzirom da je sada imao konekciju, Miljan se, posetom Pančevu, upoznao i sa radom jedne od IT firmi.
          </div>
          <h3>Ko su mentori i kakvo iskustvo imaju?</h3>
          <div className={classes.faq__answer}>
            Ono što nas izdvaja kod selekcije tutora jeste činjenica da mentor mora biti zapošljeni softverski inženjer.

            Ovo je jedan od preduslova kojim osiguravamo da je u koraku sa vremenom.

            Svi imaju višegodišnje iskustvo u IT industriji i prolaze kroz proces selekcije pre nego da postanu mentori.

            Dakle, ko su oni? Tvoje buduće kolege.
          </div>
          <h3>Prijava za IT obuku</h3>
          <div className={classes.faq__answer}>
            Sve što trebaš uraditi jeste da pozoveš broj telefona na dnu ekrana.
          </div>
          <h3>Koliko traje obuka programera?</h3>
          <div className={classes.faq__answer}>
            Jedna od pogodnosti mentorstva jeste što je trajanje obuke fleksibilno u zavisnosti od tvojih obaveza.

            Imamo obzir prema svima koji menjaju karijeru, roditelji su, studiraju i slično.

            Ide se tempom koji tebi odgovara. Ako imaš da posvetiš puno vremena, odlično! Nećemo te sputavati i ubrzaćemo proces tvoje obuke.

            Ukoliko imaš puno obaveza, takođe ćemo se pobrinuti da dođeš do istog cilja, prilagođeni tvom rasporedu.
          </div>
          <h3>Da li je potrebno prethodno iskustvo u programiranju da bih se prijavio/la za obuku?</h3>
        </div>

        <div className={classes.text}>
          H2: Kako postati programer: Miljan Pjanović, bivši pica majstor, sada junior backend developer
          H3: Otkrivanje strasti za programiranjem: Miljanova priča
          H3: Prekvalifikacija za IT: Miljanovi izazovi i motivacija
          H3: Da li je programiranje teško?
          H3: Kursevi programiranja nasuprot mentorstvu
          H3: Postizanje cilja: Kako je Miljan postao junior c sharp programer i ostvario svoje ambicije

          H2: Kako naučiti programiranje: Jedinstveni pristup učenja kroz projekte
          H3: Vodiće te it stručnjak i ubrzati tvoj napredak
          Uz naš inovativni stil podučavanja kroz projekte, dobićeš priliku da brže postigneš svoj cilj prvog zaposlenja od ostalih.

          Ovo će ti dati kompetitivnu prednost nad polaznicima kurseva i fakulteta jer ćeš jedini imati adekvatno znanje neophodno za prvi posao i projekte iza sebe koji na to ukazuju.

          Nijedan poslodavac ne želi teoretičara sa parčetom papira koji će recitovati naučene definicije, već nekoga ko će moći da se nosi sa realnim poslovnim zahtevima.

          Odmah po početku obuke, dobićeš priliku da se upustiš u izgradnju real-world aplikacija i programskih rešenja. Ovi projekti su osmišljeni da pređeš kroz njih sve od tehnologija koje će ti biti potrebne na prvom poslu.

          Naši IT stručnjaci će te nadgledati tokom čitavog procesa, pružajući ti dragocene povratne informacije i usmeravanje. Oni će redovno pregledati tvoj kod, identifikovati potencijalne greške i pružiti smernice kako bi unapredio/la svoje veštine.

          Ova direktna interakcija sa mentorima omogućiće ti da brzo stekneš uvid u najbolje prakse i razumeš efektivne načine rešavanja problema.

          Uz mentorsku podršku, bićeš u mogućnosti da stekneš poverenje u svoje veštine i izgradiš portfolio impresivnih projekata.

          Kada završiš naš program, imaćeš sve alate i veštine koje su ti potrebne za pronalaženje svog prvog posla kao programer.

          H3: Soft skillovi: Razvijanje veština saradnje


          Uz naš program, ne samo da ćeš steći tehničko znanje, već ćeš takođe imati priliku da razviješ važne veštine saradnje. Uvereni smo da su soft skillovi ključni za uspeh u IT industriji i zato posvećujemo posebnu pažnju njihovom razvijanju.

          Naš fokus nije samo na kodiranju - mi te podstičemo da radiš u timskom okruženju, sarađuješ sa drugim polaznicima i mentorima, i stekneš veštine komunikacije, liderstva i efektivne saradnje. Kroz različite projekte, naučićeš kako uspešno komunicirati, razmenjivati ideje, rešavati probleme zajedno i doprineti timskom uspehu.

          Poslodavci sve više traže programere koji ne samo da imaju tehničko znanje, već i sposobnost da efektivno sarađuju u timu. Uz našu pomoć, ti ćeš razviti te veštine i imati konkurentske prednosti na tržištu rada.

          H3: Povećanje vidljivosti i zapošljivosti kroz developer portfolio

          Jedan od ključnih koraka ka uspešnoj karijeri u razvoju softvera je imati impresivan developer portfolio koji prikazuje tvoje veštine, kreativnost i sposobnost da rešavaš stvarne probleme.

          Tvoja kolekcija radova biće svedočanstvo dostignuća i veština koje si stekao kroz rad na projektima.

          Imati konkretne primere softverskih rešenja u cv-u je snažan alat za privlačenje potencijalnih poslodavaca i povećanje tvojih šansi za dobijanje posla.

          H3: Pravi scenariji iz IT industrije: Sticanje relevantnih veština za tržište rada

          Ono što ćeš dobiti kod nas a ne možeš nigde drugde jeste simulirano poslovno okruženje.

          Kao i na radnom mestu, imaćeš team lead-a sa kojim ćeš planirati task-ove, dobijati njegove smernice i povratne informacije pri završenju određenih funkcionalnosti aplikacije.

          Koje tehnologije i programski jezici se uče kod vas?
          Da li moram da imam diplomu kako bih ušao u IT industriju?
          Privatnika uglavnom ne zanima da li imaš prosek 10.00,
          njega jedino interesuje da li poseduješ veštine neophodne za obavljanje posla i možeš li, uz pomoć tih skill-ova, njemu doneti profit ili ne.

          Diploma je neophodna da bi postao doktor ili pravnik? Da. Treba ti kako bi postao programer? Ne.
        </div>

        <ClientContactButton />
      </div>
    </>
  )
}