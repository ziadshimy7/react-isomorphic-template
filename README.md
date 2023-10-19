## Git Commit Syntax Guide
This repository follows a specific commit message convention to make it easier for anyone reviewing the commit history to understand the changes. 
The convention is straightforward and consists of a few predefined prefixes.

## Commit Message Format
Each commit message consists of a header, and the header has a specific format

<prefix>: <short description of the change>

For example: feat: `add login functionality`

## Why this convention?
* Consistency: Everyone working on the project uses the same format, making it easier to skim through the commit history.

* Automation: Tools can be used to parse commit messages and do things like generating changelogs or deciding on a version bump based on the commits.

* Clarity: It immediately becomes clear if a commit introduces new features, fixes a bug, or is just a minor task.

## Recommendations
Keep the commit messages concise.

First, write the prefix, followed by a colon and space.

Use the imperative, present tense in your commit messages, like "add" not "added", or "fix" not "fixed".

If you are not sure which prefix to use, it's always a good idea to refer back to this guide or discuss with your team.
