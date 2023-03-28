import ClientContactButton from "@/components/ClientContactButton/ClientContactButton";
import Footer from "@/components/Footer/Footer";
import Logo from "@/components/Logo/Logo";
import MentorsList from "@/components/MentorsList/MentorsList";
import Menu from "@/components/Menu/Menu";
import useMobile from "@/hooks/useMobile";
import Head from "next/head";
import { useEffect } from "react";

const Mentors = () => {
    const { isMobile } = useMobile();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Head>
                <title>IT Kursevi | Bez Daljeg Lutanja, Odaberi Šta Želiš i Dođi do Cilja </title>
                <meta
                    name='description'
                    content='Za razliku od ostalih koji se fokusiraju na diplome i sertifikate, kod nas ćeš dobiti praktično znanje neophodno za prvi posao.'
                ></meta>
            </Head>
            <body>
                <h1>Mentorstva od strane ljudi koji rade u industriji</h1>
                <p>Objasniti zasto bas mentorstvo</p>
                <div className="mentors-page">
                    <Menu />
                    <ClientContactButton />
                    <div>
                    </div>
                    <div className="mentors-page__list">
                        <MentorsList />
                    </div>
                    <div className="mentors-page__logo">
                        {!isMobile && <Logo />}
                    </div>
                </div>
                <Footer />
            </body>
        </>
    )
}

export default Mentors;