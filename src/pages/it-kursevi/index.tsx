import ClientContactButton from "@/components/ClientContactButton/ClientContactButton";
import Footer from "@/components/Footer/Footer";
import Logo from "@/components/Logo/Logo";
import MentorsList from "@/components/MentorsList/MentorsList";
import Menu from "@/components/Menu/Menu";
import useMobile from "@/hooks/useMobile";
import Head from "next/head";
import { useEffect } from "react";
import classes from './index.module.scss';
import { exampleMentors } from "@/components/MentorsList/mentors";

export async function getStaticProps() {
    return {
        props: {}
    };
}

const Mentors = () => {
    const { isMobile } = useMobile();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Head>
                <title>IT Kursevi | Razvijaj projekte sa mentorom u 2023-oj</title>
                <meta
                    name='description'
                    content='Nasuprot slušanju dosadnih predavanja i striktno struktuiranih nastava, dobićeš personalizovani razvojni put. Počni danas, bez čekanja.'
                ></meta>
            </Head>
            <div className={classes.mentors_page}>
                <div className={classes.mentors_page__content}>
                    <div className={classes.mentors_page__content__title}>
                        <h1>IT Kursevi vs Razvoj projekta sa mentorom u 2023-oj</h1>
                    </div>
                    <div className={classes.mentors_page__content__subtitle}>
                        <h2>Razlozi zašto je imati personalnog trenera u programiranju bolje od klasičnog {!isMobile && <br />}pohađanja nastave u učionici:</h2>
                    </div>
                    <div className={classes.mentors_page__content__description}>
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
                    <div className={classes.mentors_page__content__subtitle}>
                        <h2>Online način rada</h2>
                    </div>
                    <div className={classes.mentors_page__content__description}>
                        Mentorstvo u programiranju pruža dodatne prednosti i fleksibilnost u procesu učenja.
                        Neki od benefita su:
                        <br />
                        <br />
                        <strong>Pristupačnost:</strong> Bez obzira na to gde se nalaziš, pronaći ćeš stručnog mentora
                        iz bilo koje regije ili zemlje. Nema geografskih ograničenja, pa ćeš imati
                        mogućnost odabira između raznih tutora sa različitim iskustvom i veštinama.
                        <br />
                        <br />
                        <strong>Fleksibilnost vremena:</strong> Online mentorstvo omogućiće ti učenje prilagodeno tvom rasporedu.
                        Nema potrebe za putovanjem do određenog mesta ili pridržavanjem vremena nastave.
                        <br />
                        <br />
                        Možeš se dogovoriti s’ mentorom o terminima koji ti najviše odgovaraju,
                        što je posebno korisno ako imaš druge obaveze.
                        <br />
                        <br />
                    </div>
                    <div className={classes.mentors_page__content__subtitle}>
                        <h2>It sertifikat vs pisane preporuke</h2>
                    </div>
                    <div className={classes.mentors_page__content__description}>
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
                    </div>
                </div>

                <MentorsList exampleMentors={exampleMentors} />
                <ClientContactButton />
            </div>
            <Menu />
            <div className={classes.footer}>
                <Footer />
            </div>
        </>
    )
}

export default Mentors;