import palicon from './images/palicon.png';
import palbg from './images/paladin.png';

import waricon from './images/waricon.png';

const JobAPI = {
  jobs: [
    { link: 'paladin', bg: palbg, name: 'PALADIN', icon: palicon, role: 'Tank', description: 'All men seek truth, be they children of Eorzea and freedom, or slaves born into imperial bondage.'
  },
    { link: 'warrior', name: 'Warrior', icon: waricon, role: 'Tank'}
  ],
  all: function() { return this.jobs},
  get: function(link) {
    const isJob = job => job.link === link
    return this.jobs.find(isJob)
  }
}

export default JobAPI;