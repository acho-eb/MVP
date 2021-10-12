import palicon from './images/palicon.png';
import palbg from './images/paladin.png';

import waricon from './images/waricon.png';

const JobAPI = {
  jobs: [
    { link: 'paladin', bg: palbg, name: "Paladin", icon: palicon, role: "Tank"},
    { link: 'warrior', name: "Warrior", icon: waricon, role: "Tank"}
  ],
  all: function() { return this.jobs},
  get: function(link) {
    const isJob = job => job.link === link
    return this.jobs.find(isJob)
  }
}

export default JobAPI;