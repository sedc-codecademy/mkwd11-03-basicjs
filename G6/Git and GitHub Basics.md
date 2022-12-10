## A guide for creating, cloning and managing changes to a repo

**Step 1: Install Git**

If you don't have git installed, make sure you download and install it in order to be able to use git - follow the instructions from this [link](https://git-scm.com/downloads);

**Step 2: Create and clone a repo** 

In order to be able to do this, you need to first have a GitHub account, so create one if you don't already have one. Then
create a repository (there are instructions for this in the [GitHub Desktop Guide](./GitHub%20Desktop%20Guide.md)).

After this use the repo's address to clone it
![Copy repo url](https://docs.github.com/assets/cb-33207/images/help/repository/https-url-clone-cli.png)

Then, using a CLI (command line interface, for example the Command Prompt in Windows, the Terminal on a Mac, or maybe GitBash which installing Git for Windows provides for you) navigate to the directory in your computer where you would like to clone your repo and then type in the following command:

**git clone <i>repo url you cloned in the previous step</i>**

Congratulations, now you have a local clone of the repo you created on GitHub :)

After this, you can make all sorts of changes to the local repo (for example add your homeworks in it), but anytime you would like for those changes to also be reflected in the remote repo (the copy on GitHub), you will need to use the following commands, while you are navigated inside the repo:

### Stage or add your files

**git add .** (this stages all of the changes you have made, so if you only want to add a specific file, and not everything, use the name of the file in place of the . (the full stop), like so: **git add name-of-file.extension**).

### Commit your changes

**git commit -m "text that describes the changes you made"**

### Push your changes to the remote repo

**git push**

And voila! Your local repo is now in sync with the remote one 🎈

If there are some changes on your remote repo, that you don't have locally, use the following command to pull them into your local repo (while you are still navigated inside it)

**git pull**

There are many more commands and functionalities that Git and GitHub provide, but these are the most basic ones that should get you started, as well as some of the most used ones.

