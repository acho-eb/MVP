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

import blmicon from './images/blmicon.png';
import blmbg from './images/blackmage.png';

import smnicon from './images/smnicon.png';
import smnbg from './images/summoner.png';

import rdmicon from './images/rdmicon.png';
import rdmbg from './images/redmage.png';

import bluicon from './images/bluicon.png';
import blubg from './images/bluemage.png';

import brdicon from './images/brdicon.png';
import brdbg from './images/bard.png';

import mchicon from './images/mchicon.png';
import mchbg from './images/machinist.png';

import dncicon from './images/dncicon.png';
import dncbg from './images/dancer.png';

const JobAPI = {
  jobs: [
    { link: 'paladin', bg: pldbg, name: 'PALADIN', icon: palicon, role: 'Tank', description: 'All men seek truth, be they children of Eorzea and freedom, or slaves born into imperial bondage.', embed: '0SQaF6L1rtY'},
    { link: 'warrior', bg: warbg, name: 'WARRIOR', icon: waricon, role: 'Tank', description: 'Garlemald seeketh to gain from the coming cataclysm.', embed: '0-pj0uvOc1U'},
    { link: 'darkknight', bg: drkbg, name: 'DARK KNIGHT', icon: drkicon, role: 'Tank', description: 'Ever doth it pursue me to this end, covetous of the knowledge I possess.', embed: 'UbM8UpPSkgA'},
    { link: 'gunbreaker', bg: gnbbg, name: 'GUNBREAKER', icon: gnbicon, role: 'Tank', description: 'Yet I have hitherto \'scaped the grasping hands of darkness, as my presence here doth attest.', embed: '3i7Zmy6BpeY'},
    { link: 'whitemage', bg: whmbg, name: 'WHITE MAGE', icon: whmicon, role: 'Healer', description: 'Even so, in keeping my liberty I have lost much…my journal not least of all.', embed: 'vKboFUS1AzU'},
    { link: 'scholar', bg: schbg, name: 'SCHOLAR', icon: schicon, role: 'Healer', description: 'Twelve be praised, a page of my journal!', embed: 'uLUg_MlnJQg'},
    { link: 'astrologian', bg: astbg, name: 'ASTROLOGIAN', icon: asticon, role: 'Healer', description: 'Verily, the light of truth ever shineth upon they who would bask in its warmth.', embed: 'IHf6r_fuAiE'},
    { link: 'dragoon', bg: drgbg, name: 'DRAGOON', icon: drgicon, role: 'Melee DPS', description: 'Very well.', embed: 'wmWFZpX8C0Y'},
    { link: 'monk', bg: mnkbg, name: 'MONK', icon: mnkicon, role: 'Melee DPS', description: 'I shall honor my promise and share with thee that which I know.', embed: 'lkK3zTYR7LU'},
    { link: 'ninja', bg: ninbg, name: 'NINJA', icon: ninicon, role: 'Melee DPS', description: 'Each era is ruled by an element, and of these the realm hath borne witness to six.', embed: 'tr4WM76d_ww'},
    { link: 'samurai', bg: sambg, name: 'SAMURAI', icon: samicon, role: 'Melee DPS', description: 'Light and darkness yet remain, one of which the Divine Chronicles foretell shall next hold sway.', embed: 'A9d8eI2ohLA'},
    { link: 'blackmage', bg: blmbg, name: 'BLACK MAGE', icon: blmicon, role: 'Magic Ranged DPS', description: 'Ne\'er till land consumes sun can sea bear moons, Heavens spew crimson flame, hells seep black dooms.', embed: '9MFGsyddPks'},
    { link: 'summoner', bg: smnbg, name: 'SUMMONER', icon: smnicon, role: 'Magic Ranged DPS', description: 'Will destruction rain down from the firmament? Or will it seep forth from the bowels of the nether? Whencesoever it cometh, man shall know such devastation as he hath never seen, nay not in his profoundest nightmare.', embed: 'TPbS4L-sLU8'},
    { link: 'redmage', bg: rdmbg, name: 'RED MAGE', icon: rdmicon, role: 'Magic Ranged DPS', description: 'Whether thou payest the prophecy heed is thy decision to make, and thine alone.', embed: 'iH2nblClyKU'},
    { link: 'bluemage', bg: blubg, name: 'BLUE MAGE', icon: bluicon, role: 'Magic Ranged DPS', description: 'Yet be fairly warned that disaster waiteth not for man.', embed: '5FAiRM570lY'},
    { link: 'bard', bg: brdbg, name: 'BARD', icon: brdicon, role: 'Physical Ranged DPS', description: 'Shouldst thou find thy faith wanting, thou needst but look upon Dalamud\'s bloody visage, and from thence to the faces of thine own loved ones.', embed: 'y66RtFr26hs'},
    { link: 'machinist', bg: mchbg, name: 'MACHINIST', icon: mchicon, role: 'Physical Ranged DPS', description: 'Man was ever wont to disbelieve and to delay, yet the Twelve have granted him a conscience that he might act at the last.', embed: '_2UbF3qJv_M'},
    { link: 'dancer', bg: dncbg, name: 'DANCER', icon: dncicon, role: 'Physical Ranged DPS', description: 'Hark thou unto these words if thou wouldst hearken to naught else.', embed: 'KC9ox7kJktU'}
  ],
  all: function() { return this.jobs},
  get: function(link) {
    const isJob = job => job.link === link
    return this.jobs.find(isJob)
  }
}

export default JobAPI;