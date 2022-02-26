class Engineer{
    constructor(github = ``) {
    this.github = github;
   
}

getGithub() {
    return `${this.github}`;
};

}
module.exports = Engineer;