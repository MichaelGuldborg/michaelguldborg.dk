#!/usr/bin/env node
const { execSync } = require('child_process');
const entries = require('object.entries');
const cwd = process.cwd();
const config = {
    git_repository: "git@github.com:MichaelGuldborg/michaelguldborg.dk.git",
    git_branch: "master",
    git_folder: "prod",
    git_commit_message: "update",
    build_script: "npm run build",
    build_folder: "build",
    user_email: "mail@michaelguldborg.dk",
    user_name: "Michael Guldborg"
};

for (const [field, value] of entries(config)) {
    if (!value){
        throw Error("deploy script requires all config values to be filled");
    }
}

console.log("Starting deploy to Git...");

console.log("Starting build script \"" + config.build_script + "\"...");
console.log(execSync("" + config.build_script, { cwd }).toString('utf-8'));


console.log('Configuring and committing...');
execSync([
    "git config user.email \"" + config.user_email + "\"",
    "git config user.name \"" + config.user_name + "\"",
    "git stage .",
    "git commit --allow-empty -m " + config.git_commit_message,
].join("&&"), { cwd });

console.log("Pushing...");
execSync("git push --tags " + config.git_repository + " " + config.git_branch, { cwd });

console.log("Notifying server to pull...");
execSync("curl http://michaelguldborg.dk/gitpull.php", { cwd });

console.log('Deploying to git is finished.');
