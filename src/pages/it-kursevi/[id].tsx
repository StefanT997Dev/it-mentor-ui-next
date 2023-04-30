import Head from "next/head";
import classes from './mentor-profile.module.scss';
import Footer from "@/components/Footer/Footer";
import ClientContactButton from "@/components/ClientContactButton/ClientContactButton";
import Menu from "@/components/Menu/Menu";
import SkillList from "@/components/SkillList/SkillList";
import Logo from "@/components/Logo/Logo";
import { useEffect } from "react";
import useMobile from "@/hooks/useMobile";
import { Mentor } from "@/models/mentor";
import Image from 'next/image';
import PackageCard from "@/components/PackageCard/PackageCard";
import { useRouter } from "next/router";
import { exampleMentors } from "@/components/MentorsList/mentors";

const MentorProfile = () => {
    const { isMobile } = useMobile();
    
    const router = useRouter();
    const{id}=router.query;

    const filteredMentors = exampleMentors.filter(mentor => mentor.id === id);
    const desiredMentor = filteredMentors[0];
    const {
        image,
        firstName, 
        lastName,
        category,
        bio,
        skills, 
        worksAt
    } = desiredMentor;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={classes.mentor_profile}>
                <div className={classes.mentor_profile__header}>
                        <Image
                            src={image}
                            className={classes.mentor_profile__header__image}
                            alt="Something" />
                    <div className={classes.mentor_profile__header__text}>
                        <div className={classes.mentor_profile__header__text__title}>
                            {firstName} {lastName}
                        </div>
                        <div className={classes.mentor_profile__header__text__category}>
                            {category}
                        </div>
                        <div className={classes.mentor_profile__header__text__category}>
                            {`radi u: ${worksAt}`}
                        </div>
                        <SkillList skills={skills} isLimited={false} />
                        <div className={classes.mentor_profile__header__text__bio}>{bio}</div>
                    </div>
                </div>
                <div className={classes.mentor_profile__package_container}>
                    <div className={classes.mentor_profile__package_container__title}>
                        Odaberi paket koji ti odgovara!
                    </div>
                    <div className={classes.mentor_profile__package_container__sub_title}>
                        Ukoliko ti ne odgovara nijedan od paketa, kontaktiraj nas
                    </div>
                    <div className={classes.mentor_profile__package_container__cards}>
                        <PackageCard
                            title="Silver"
                            list={["Mentorstvo do 6 meseci", "20 sesija", "1 sat po sesiji"]}
                        />
                        <PackageCard
                            title="Gold"
                            list={["Mentorstvo do 6 meseci", "40 sesija", "1 sat po sesiji"]}
                        />
                        <PackageCard
                            title="Platinum"
                            list={["Mentorstvo do 6 meseci", "80 sesija", "1 sat po sesiji"]}
                        />
                    </div>
                </div>
                <Menu />
                <ClientContactButton />

                <Footer />
            </div>
        </>
    );
}

export default MentorProfile;