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
                    <div className={classes.mentors_page__content__subtitle}>
                        <h2>Trajanje mentorstva</h2>
                    </div>
                    <div className={classes.mentors_page__content__description}>
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
                    <div className={classes.mentors_page__content__subtitle}>
                        <h2>Simulacija poslovnog okruženja</h2>
                    </div>
                    <div className={classes.mentors_page__content__description}>
                        Jedan od ključnih aspekata mentorstva u programiranju je naglasak rada na stvarnim
                        projektima koji oponašaju rad u firmi.
                        <br />
                        <br />
                        Ova praksa ima mnoge prednosti u poređenju sa tradicionalnim kursevima ili fakultetima.
                        <br />
                        <br />
                        Kada odabereš mentorstvo, tvoj vodič će te usmeriti da radiš na projektima koji
                        su relevantni za tvoje područje interesa i karijerne ciljeve.
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
                        Kroz rad na projektima takođe dobijaš priliku da stekneš iskustvo u timskom radu i
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
                    <div className={classes.mentors_page__content__subtitle}>
                        <h2>It prekvalifikacija kroz mentorstvo</h2>
                    </div>
                    <div className={classes.mentors_page__content__description}>
                        Mentorstvo u programiranju pruža izvanredne mogućnosti za promenu karijere.
                        <br />
                        <br />
                        Bez obzira na to da li dolaziš iz potpuno drugog područja ili želiš unaprediti
                        svoje postojeće veštine, mentorstvo će ti pružiti potrebnu podršku i usmeriti 
                        na putu ka uspešnoj tranziciji.
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