import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import useMobile from '@/hooks/useMobile'
import RoundGraphicWorkImage from '@/../public/it-obuke.svg';
import HomePageCover from '@/../public/home-page/it-obuke-desktop.jpg';
import HomePageCoverMobile from '@/../public/home-page/it-obuke-mobilni.jpg';
import Logo from '@/components/Logo/Logo'
import classes from './index.module.scss';
import Menu from '@/components/Menu/Menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isMobile } = useMobile();

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
          <Image
            src={isMobile ? HomePageCoverMobile : HomePageCover}
            alt="Iskusni softverski inženjer iz IT industrije podučava početnika kako da programira"
            sizes='100vw'
          />
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
              sizes='100vw' />
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
      </div>
    </>
  )
}