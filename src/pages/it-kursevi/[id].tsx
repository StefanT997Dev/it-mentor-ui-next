import classes from './mentor-profile.module.scss';
import Footer from "@/components/Footer/Footer";
import ClientContactButton from "@/components/ClientContactButton/ClientContactButton";
import Menu from "@/components/Menu/Menu";
import SkillList from "@/components/SkillList/SkillList";
import { useEffect } from "react";
import Image from 'next/image';
import PackageCard from "@/components/PackageCard/PackageCard";
import { useRouter } from "next/router";
import { exampleMentors } from "@/components/MentorsList/mentors";
import useMobile from '@/hooks/useMobile';

export async function getServerSideProps({ params }: any) {
    const { id } = params;

    return {
        props: {
            id
        }
    };
} 

const MentorProfile = ({id}:any) => {
    const router = useRouter();
    const { isMobile } = useMobile();

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
        <div className={classes.mentor_profile}>
            <div className={classes.mentor_profile__header}>
                <Image
                    src={image}
                    className={classes.mentor_profile__header__image}
                    alt="Something"
                    sizes='100vw' 
                    placeholder='blur'
                />
                <div className={classes.mentor_profile__header__content}>
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
                        <div className={classes.mentor_profile__header__skills}>
                            <SkillList skills={skills} isLimited={false} />
                        </div>
                        <div className={classes.mentor_profile__header__text__bio}>{bio}</div>
                    </div>
                </div>
            </div>
            <div className={classes.mentor_profile__package_container}>
                <div className={classes.mentor_profile__package_container__title}>
                    Odaberi paket koji ti odgovara!
                </div>
                <div className={classes.mentor_profile__package_container__sub_title}>
                    Ukoliko ti ne odgovara nijedan od paketa, {!isMobile ? <br /> : null}kontaktiraj nas
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
            <div className={classes.mentor_profile__footer}>
                <Footer />
            </div>
        </div>
    );
}

export default MentorProfile;