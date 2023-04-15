import { Mentor } from "@/models/mentor";
import Link from "next/link";
import Image from 'next/image';
import SkillList from "../SkillList/SkillList";
import classes from './MentorListItem.module.scss';

interface Props {
    mentor: Mentor;
}

const MentorListItem = ({ mentor }: Props) => {
    const { id, image, firstName, lastName, category, bio, skills, worksAt } = mentor;

    return (
        <>
            <div className={classes.mentor} key={id}>
                <Link href={`/it-kursevi/${id}`}>
                    <div className={classes.mentor__image_container}>
                        <Image
                            className={classes.mentor__image_container__image}
                            src={image}
                            alt="Something"
                        />
                    </div>
                    <div className={classes.mentor__title}>
                        {firstName} {lastName}
                    </div>
                    <div className={classes.mentor__category}>
                        {category}
                    </div>
                    <div className={classes.mentor__work_in}>
                        {`radi u: ${worksAt}`}
                    </div>
                    <SkillList skills={skills} isLimited />
                    <div className={classes.mentor__bio}>
                        {bio.length > 120 ? bio.slice(0, 117) : bio}...
                    </div>
                    <div className={classes.mentor__details}>
                        DETALJNIJE
                        <div className={classes.mentor__details__line} />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default MentorListItem;