---
title: Lessons from my first Shell script
date: 2024-01-10
author: David Thuman
tags: "software"
categories: "draft"
---

One day, my manager proposed to me a task that involved backing up a folder located on server that hosts the backend our  that were used to template out Word documents that can be automatically generated. As multiple types of employees (both technical and non-technical) will be editing these JSP files at anytime, we wanted a way to schedule a backup of the folder. Thus, my task was to generate a script that could sync this folder to a local instance of a git repository, and then commit these changes to its remote repo.

When given the task, my manager suggested to use Shell or Python to create the script, which would be ran as a Cron jobs schedule to run every day. As Python was the first language I learned my freshman year of college, and the fact that I have never written a real Shell script before, I thought "Phff, why would I have code is such an primitive scripting language? Python has been syntax and a comprehensive standard library. Plus, I can even use [*argparse*](https://docs.python.org/3/library/argparse.html) to give it that cool command-line feel."

Well, I did just that. I used *argparse*, along with [*subprocess*](https://docs.python.org/3/library/subprocess.html) and [*logging*](https://docs.python.org/3/library/logging.html), all of which are in Python 3.11's standard library, and created a wonderful script utilizing the `rsync` and `git` commands to complete my task. My generated logs look beautiful and my local tests were satisfied. Let me `ssh` into the test server and do some final testin ... oh, it only has Python 2.6, well I'll just talk to my manager about installing Python3.

She notifies that Python3 is installed, so I `ssh` into the test server and let me ... oh, it is Python 3.6.8, well I'll just get my manager to update the Python3 version ... oh, the internal package manager of Red Hat Linux 7 only goes up to Python 3.6.8, and ... oh, building Python 3.11 from source failed. My manager tells me that Perl is readily available on the servers. I guess I'll re-write it in Shell script.



```sh
#!/bin/bash

# -s will be the path to the source directory
# -d will be the path to the destination directory
# -l will be the path to the log file
# -m will be the git commit message
# -x will skip over the call of rsycn
# -y will run the rsync command with the --dry-run option
# -z will skip over the calls of git

# Help function to display usage and argument descriptions
helpFunction()
{
    echo ""
    echo "Usage: $0 -s SOURCE -d DESTINATION [-l LOG_FILEPATH] [-m COMMIT_MESSAGE] [-x] [-y] [-z]"
    echo ""
    echo "Options:"
    echo -e "\t-s \tfolder path of form template directory"
    echo -e "\t-d \tfolder path of backup local repo form template directory"
    echo -e "\t-l \tabsolute file path of the log file"
    echo -e "\t-m \tcommit message for commit"
    echo -e "\t-x \tskip calling the rsync command"
    echo -e "\t-y \tperform a trial run with no changes made when calling rsync"
    echo -e "\t-z \tskip calling the git commands"
}

# Set default value of optional arguments
source=""
destination=""
log_filepath="/var/log/form_template_backup.log"
commit_message="Auto-Commit from scheduled Cron job."
skip_rsync="false"
dry_run="false"
skip_git="false"

# Set optional arguments
while getopts "s:d:l:m:xyz" opt
do
    case $opt in
        s) source=${OPTARG} ;;
        d) destination=${OPTARG} ;;
        l) log_filepath=${OPTARG} ;;
        m) commit_message=${OPTARG} ;;
        x) skip_rsync="true" ;;
        y) dry_run="true" ;;
        z) skip_git="true" ;;
        *) helpFunction
           exit 1 ;;
    esac
done

# Ensure required arguments are set
if [ -z $source ] || [ -z $destination ]
then
    echo "Some or all of the required parameters are empty";
    helpFunction
    exit 1
fi

# Ensure that the log file exists
if ! [ -e $log_filepath ]
then
    touch $log_filepath
fi

# Log function to format and log a command's output
log() {

    DATETIME=$(date +"%Y-%m-%d %H:%M:%S")

    output=$3

    if ! [ "$output" == "" ]
    then
        output="\n$output"
    fi

    echo -e "$DATETIME - STATUS: $2 ACTION: '$1' $output" >> $log_filepath
}

# rsync functionality
if [ $skip_rsync != "true" ]
then
    if [ $dry_run == "true" ]
    then
        output=$(rsync -air --delete --dry-run $source $destination 2>&1); s=$?; log "rsync --dry-run" $s "$output" 
    else
        output=$(rsync -air --delete $source $destination 2>&1); s=$?; log "rsync" $s "$output" 
    fi
fi

# git functionality
if [ $skip_git != "true" ]
then
    cd $destination # -C flag for git command is not available for git version 1.8.3.1
    output=$(git add -A . 2>&1); s=$?; log "git add" $s "$output"
    output=$(git commit -m "$commit_message" 2>&1); s=$?; log "git commit" $s "$output"
    output=$(git push 2>&1); s=$?; log "git push" $s "$output"
fi

exit 0
```