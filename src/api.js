import palicon from './images/palicon.png';
import pldbg from './images/paladin.png';

import waricon from './images/waricon.png';
import warbg from './images/warrior.png';

import drkicon from './images/drkicon.png';
import drkbg from './images/darkknight.png';

import gnbicon from './images/gnbicon.png';
import gnbbg from './images/gunbreaker.png';

const JobAPI = {
  jobs: [
    { link: 'paladin', bg: pldbg, name: 'PALADIN', icon: palicon, role: 'Tank', description: 'All men seek truth, be they children of Eorzea and freedom, or slaves born into imperial bondage.', embed: '0SQaF6L1rtY'},
    { link: 'warrior', bg: warbg, name: 'WARRIOR', icon: waricon, role: 'Tank', description: 'Garlemald seeketh to gain from the coming cataclysm. Ever doth it pursue me to this end, covetous of the knowledge I possess.', embed: '0-pj0uvOc1U'},
    { link: 'darkknight', bg: drkbg, name: 'DARK KNIGHT', icon: drkicon, role: 'Tank', description: 'Yet I have hitherto \'scaped the grasping hands of darkness, as my presence here doth attest. Even so, in keeping my liberty I have lost much…my journal not least of all. (have a faded page)', embed: 'UbM8UpPSkgA'},
    { link: 'gunbreaker', bg: gnbbg, name: 'GUNBREAKER', icon: gnbicon, role: 'Tank', description: 'Twelve be praised, a page of my journal! Verily, the light of truth ever shineth upon they who would bask in its warmth.', embed: '3i7Zmy6BpeY'}
  ],
  all: function() { return this.jobs},
  get: function(link) {
    const isJob = job => job.link === link
    return this.jobs.find(isJob)
  }
}

export default JobAPI;