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