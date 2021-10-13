import palicon from './images/palicon.png';
import pldbg from './images/paladin.png';

import waricon from './images/waricon.png';
import warbg from './images/warrior.png';

import drkicon from './images/drkicon.png';
import drkbg from './images/darkknight.png';

import gnbicon from './images/gnbicon.png';
import gnbbg from './images/gunbreaker.png';

import whmicon from './images/whmicon.png';
import whmbg from './images/whitemage.png';

import schicon from './images/schicon.png';
import schbg from './images/scholar.png';

import asticon from './images/asticon.png';
import astbg from './images/astrologian.png';

import drgicon from './images/drgicon.png';
import drgbg from './images/dragoon.png';

import mnkicon from './images/mnkicon.png';
import mnkbg from './images/monk.png';

import ninicon from './images/ninicon.png';
import ninbg from './images/ninja.png';

import samicon from './images/samicon.png';
import sambg from './images/samurai.png';

const JobAPI = {
  jobs: [
    { link: 'paladin', bg: pldbg, name: 'PALADIN', icon: palicon, role: 'Tank', description: 'All men seek truth, be they children of Eorzea and freedom, or slaves born into imperial bondage.', embed: '0SQaF6L1rtY'},
    { link: 'warrior', bg: warbg, name: 'WARRIOR', icon: waricon, role: 'Tank', description: 'Garlemald seeketh to gain from the coming cataclysm.', embed: '0-pj0uvOc1U'},
    { link: 'darkknight', bg: drkbg, name: 'DARK KNIGHT', icon: drkicon, role: 'Tank', description: 'Ever doth it pursue me to this end, covetous of the knowledge I possess.', embed: 'UbM8UpPSkgA'},
    { link: 'gunbreaker', bg: gnbbg, name: 'GUNBREAKER', icon: gnbicon, role: 'Tank', description: 'Yet I have hitherto \'scaped the grasping hands of darkness, as my presence here doth attest.', embed: '3i7Zmy6BpeY'},
    { link: 'whitemage', bg: whmbg, name: 'WHITE MAGE', icon: whmicon, role: 'Healer', description: 'Even so, in keeping my liberty I have lost much…my journal not least of all.', embed: 'vKboFUS1AzU'},
    { link: 'scholar', bg: schbg, name: 'SCHOLAR', icon: schicon, role: 'Healer', description: 'Twelve be praised, a page of my journal!', embed: 'uLUg_MlnJQg'},
    { link: 'astrologian', bg: astbg, name: 'ASTROLOGIAN', icon: asticon, role: 'Healer', description: 'Verily, the light of truth ever shineth upon they who would bask in its warmth.', embed: 'IHf6r_fuAiE'},
    { link: 'dragoon', bg: drgbg, name: 'DRAGOON', icon: drgicon, role: 'Melee DPS', description: 'Very well. I shall honor my promise and share with thee that which I know.', embed: 'wmWFZpX8C0Y'},
    { link: 'monk', bg: mnkbg, name: 'MONK', icon: mnkicon, role: 'Melee DPS', description: 'Each era is ruled by an element, and of these the realm hath borne witness to six.', embed: 'lkK3zTYR7LU'},
    { link: 'ninja', bg: ninbg, name: 'NINJA', icon: ninicon, role: 'Melee DPS', description: 'Light and darkness yet remain, one of which the Divine Chronicles foretell shall next hold sway.', embed: 'tr4WM76d_ww'},
    { link: 'samurai', bg: sambg, name: 'SAMURAI', icon: samicon, role: 'Melee DPS', description: 'Ne\'er till land consumes sun can sea bear moons, Heavens spew crimson flame, hells seep black dooms.', embed: 'A9d8eI2ohLA'}
  ],
  all: function() { return this.jobs},
  get: function(link) {
    const isJob = job => job.link === link
    return this.jobs.find(isJob)
  }
}

export default JobAPI;