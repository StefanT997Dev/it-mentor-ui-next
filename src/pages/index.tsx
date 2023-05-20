import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useMobile from '@/hooks/useMobile'
import RoundGraphicWorkImage from '@/../public/it-obuke.svg';
import HomePageCover from '@/../public/home-page/it-obuke-desktop.jpg';
import HomePageCoverMobile from '@/../public/home-page/it-obuke-mobilni.jpg';
import classes from './index.module.scss';
import dynamic from 'next/dynamic';
import lqip from 'lqip-modern';

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
              priority={true}
            /> : <Image
              loader={() => 'https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-desktop.jpg'}
              src='https://res.cloudinary.com/dbpisujxq/image/upload/v1684343711/home-page/it-obuke-desktop.jpg'
              alt="Iskusni softverski inženjer iz IT industrije podučava početnika kako da programira"
              width={1920}
              height={1080}
              sizes='100vw'
              placeholder='blur'
              blurDataURL={lqipDesktop}
              priority={true}
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
            //priority={true}
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
      </div>
    </>
  )
}