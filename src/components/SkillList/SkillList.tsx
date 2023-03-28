import { v4 as uuid } from 'uuid';

interface SkillListProps {
    skills: string[];
    isLimited: boolean;
}

const SkillList = ({ skills, isLimited = false }: SkillListProps) => {
    const skillsSliced = isLimited ? skills.length > 3 ? skills.slice(0, 3) : skills : skills;

    return (
        <div className="skills-list">
            {skillsSliced.map(s => (
                <div className="skills-list__skill" key={uuid()}>
                    {s}
                </div>
            ))}
            {isLimited && '+'}
        </div>
    )
}

export default SkillList;