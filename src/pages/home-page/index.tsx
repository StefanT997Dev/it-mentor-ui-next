import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import useMobile from '@/hooks/useMobile'
import RoundGraphicWorkImage from '../../../public/round-graphic-work.svg';
import HomePageCover from '../../../public/home-page/home-page-cover.png';
import HomePageCoverMobile from '../../../public/home-page/home-page-cover-mobile.png';
import Logo from '../../components/Logo/Logo'
import classes from './index.module.scss';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {isMobile} = useMobile();

  return (
    <div className={classes.home}>
      <Head>
        <title>IT Obuke za Početnike | Do Prvog Posla u Sektoru Informacionih Tehnologija</title>
        <meta
          name='description'
          content='Dođi do prvog visoko plaćenog posla u sektoru informacionih tehnologija za manje od 6 meseci kroz saradnju sa IT ekspertom'
        ></meta>
      </Head>
      <div className={classes.home__header}>
        {!isMobile ? (
          <div className={classes.home__header__logo}>
            <Logo />
          </div>
        ) : null}
        <Link href="/mentors-contact" className={classes.home__header__become_mentor}>
          Postani mentor
        </Link>
        <div className={classes.home__header__logo}></div>
      </div>
      <div className={classes.home__img}>
        <Image 
          src={isMobile ? HomePageCoverMobile : HomePageCover}
          alt="Something"
          />
      </div>

      <div className={classes.home__content}>
        {isMobile ? <Logo /> : null}
        <h1 className={classes.home__content__title}>
          Kako naći {isMobile ? <br /> : null}posao u IT sektoru
        </h1>
        <div className={classes.home__content__description}>
          Pomažemo ti da dođeš do prvog zaposlenja u oblasti {!isMobile && <br />}
          informacionih {isMobile && <br />}tehnologija za manje od 6 meseci
        </div>
        <div className={classes.home__content__client_container}>
          <div>Kreni ka cilju</div>
          <Link
            href="/programiranje-za-pocetnike"
            className={classes.home__content__client_container__image_container__start_button}
          >
            Start
          </Link>
          <div className={classes.home__content__client_container__image_container}>
            <Image
              className={classes.home__content__client_container__image_container__image}
              src={RoundGraphicWorkImage} 
              alt={''}            />
          </div>
          <div className={classes.home__content__client_container__got_account}>
            <div className={classes.home__content__client_container__image_container__got_account__text}>
              Već imaš nalog?
            </div>
              <Link
                href="/login"
                className={classes.home__content__client_container__image_container__got_account__login_link}
              >
                Uloguj se
              </Link>
          </div>
        </div>
        {isMobile ? (
          <Link
            href="/mentors-contact"
            className={classes.home__content__become_mentor}
          >
            Postani mentor
          </Link>
        ) : null}
      </div>
    </div>
  )
}
