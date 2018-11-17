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

return;

console.log("Starting deploy to Git...");

console.log("Pulling production repository to \"" + config.git_folder + "\" folder...");
execSync("if exist " + config.git_folder + " ( cd " + config.git_folder + " && git pull )", { cwd });
execSync("if not exist " + config.git_folder + " ( git clone -b " + config.git_branch + " " + config.git_repository + " " + config.git_folder + " )", { cwd });

console.log("Starting build script \"" + config.build_script + "\"...");
console.log(execSync("" + config.build_script, { cwd }).toString('utf-8'));

console.log("Cleaning production");
execSync([
    "cd prod",
    "for %f in ( * ) do if not %f == .git del /Q \"%f\"",
    "for /D %d in ( * ) do if not %d == .git rmdir /S /Q \"%d\""
].join("&&"), { cwd });

console.log("Copy build to production");
execSync("xcopy /S " + config.build_folder + " " + config.git_folder, { cwd });

console.log('Configuring and committing...');
execSync([
    "cd prod",
    "git config user.email \"" + config.user_email + "\"",
    "git config user.name \"" + config.user_name + "\"",
    "git stage .",
    "git commit --allow-empty -m " + config.git_commit_message,
].join("&&"), { cwd });

console.log("Pushing...");
execSync("cd " + config.git_folder + " && git push --tags " + config.git_repository + " " + config.git_branch, { cwd });

console.log("Notifying server to pull...");
execSync("curl http://michaelguldborg.dk/gitpull.php", { cwd });


console.log('Deploying to git is finished.');
