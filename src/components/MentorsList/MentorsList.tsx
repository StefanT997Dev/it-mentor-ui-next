import MentorListItem from "../MentorListItem/MentorListItem";
import { exampleMentors } from "./mentors";

const MentorsList = () => {
    return(
        <div className="mentor-list__container">
            {exampleMentors.map((mentor) => (
              <MentorListItem key={mentor.id} mentor={mentor} />
             ))
            }
      </div>
    )
}

export default MentorsList;