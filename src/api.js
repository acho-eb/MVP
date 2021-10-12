const JobAPI = {
  jobs: [
    { link: 'paladin', name: "Paladin"},
    { link: 'warrior', name: "Warrior"}
  ],
  all: function() { return this.jobs},
  get: function(link) {
    const isJob = job => job.link === link
    return this.jobs.find(isJob)
  }
}

export default JobAPI;