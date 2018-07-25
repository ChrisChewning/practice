// links: https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/

                GENERAL GROUP PROJECT WORKFLOW: BRANCHING

STARTING A PROJECT
1) One team member creates a github repository.
2) Make a simple readme.md file and push it to the repo.
3) Add the other team members as collaborators in the Settings menu of your repository
4) The collaborators will then CLONE the repo onto their computer.

5) BEFORE WORKING, from your command line, make a new branch for your features. git checkout -b "branch-name"
6) Work on your feature, avoid working on the same file as others in your project.
7) Once your feature is working, you can push your branch to github. Start with git add .
8) git commit -m "Description of feature"

9) BEFORE YOU PUSH, switch back to the master branch and pull in any changes to keep your repo updated
10) git checkout staging (for this project)
11) git pull origin

12) TO PUSH TO GITHUB, git checkout "branch-name." This command will return you to your branch
13) git push  origin (your branch name not origin master)    (git will give you an error about an upstream branch. It will also give you the line of code you need to type to solve this. Just type what it tells you to use.

ONCE YOUR BRANCH IS PUSHED TO GITHUB:
14) Create a new Pull Request to pull the changes from your branch into the master branch
15) Base: staging   Compare: the branch you're pushing.
16) Have your team-mates review the pull request/approve your changes
17) MERGE your branch into the staging (you can typically safely delete your branch once it has been merged)


DELETING A BRANCH: 
17) $ git branch -d (name of your branch)

____________________________________________________________________________

                                ERRORS

ERROR 1: if you have a conflict when you pull to your staging, type git checkout master. From there type git pull origin master. Then go back to your staging (git checkout origin staging), and say git pull origin staging.


ERROR: Please enter a commit message to explain why this merge is necessary, especially if it merges an updated upstream into a topic branch
:qa!

OR: 2. It's not a Git error message, it's the editor as git uses your default editor. To solve this:
press "i"
write your merge message
press "esc"
write ":wq"
then press enter
