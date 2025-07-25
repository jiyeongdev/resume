import profile from './profile';
import introduce from './introduce/introduce';
import introduce2 from './introduce/introduce2';
import skill from './skill';
import experience from './experience';
import openSource from './openSource';
import project from './project';
import presentation from './presentation';
import education from './education';
import article from './article';
import etc from './etc';
import footer from './footer';
import troubleshooting from './troubleshooting';
import { _global } from './_global';

import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IExperience } from '../component/experience/IExperience';
import { IProject } from '../component/project/IProject';
import { IPresentation } from '../component/presentation/IPresentation';
import { IEducation } from '../component/education/IEducation';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IGlobal } from '../component/common/IGlobal';
import { IArticle } from '../component/article/IArticle';
import { ITroubleshooting } from '../component/troubleshooting/ITroubleshooting';

const Payload: Payload = {
  profile,
  introduce,
  introduce2,
  skill,
  openSource,
  experience,
  project,
  presentation,
  article,
  education,
  etc,
  footer,
  troubleshooting,
  _global,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  introduce2: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  troubleshooting: ITroubleshooting.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;
  _global: IGlobal.Payload;
}

export default Payload;
