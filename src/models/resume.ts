import { experiences, Experience} from './experience';
import { educations, Education } from './education';
import { certifications, Certification} from './certification';
import { achievements, Achievement} from './achievement';


export interface Resume {
    experience: Experience[];
    education: Education[];
    certification: Certification[];
    achievement: Achievement[];
}

export const resume: Resume = {
    experience: experiences,
    education: educations,
    certification: certifications,
    achievement: achievements
};
