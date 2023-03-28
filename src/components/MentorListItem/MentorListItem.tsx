import { Mentor } from "@/models/mentor";
import Link from "next/link";
import Image from 'next/image';
import SkillList from "../SkillList/SkillList";

interface Props{
    mentor: Mentor;
}

const MentorListItem = ({ mentor }: Props) => {
    const { id, image, firstName, lastName, category, bio, skills, worksAt } = mentor;

    return (
        <Link href={`/mentors/${id}`}>
            <div className="mentor" key={id}>
                <div className="mentor__image-container">
                    <Image 
                        className="mentor__image-container__image"
                        src={image}
                        alt="Something"
                    />
                </div>
                <div className="mentor__title">
                    {firstName} {lastName}
                </div>
                <div className="mentor__category">
                    {category}
                </div>
                <div className="mentor__work-in">
                    {`radi u: ${worksAt}`}
                </div>
                <SkillList skills={skills} isLimited />
                <div className="mentor__bio">
                    {bio.length > 120 ? bio.slice(0, 117) : bio}...
                </div>
                <div className="mentor__details">
                    DETALJNIJE
                    <div className="mentor__details__line" />
                </div>
            </div>
        </Link>
    )
}

export default MentorListItem;