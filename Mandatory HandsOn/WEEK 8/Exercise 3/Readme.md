# Git Branching and Merging Hands-on Lab

This exercise demonstrates how to create, switch, and merge branches in Git using **IntelliJ IDEA** and **GitLab**, along with optional visual diff using **P4Merge**.

---

## Objective
- Learn how to **create and switch branches** in Git.
- Understand how to **commit changes to a branch**.
- Perform **branch merging into master** (or main).
- Optionally visualize branch differences using **P4Merge**.
- Delete a merged branch safely.

---

## Prerequisites
- Git installed and configured.
- IntelliJ IDEA with Git integration.
- (Optional) P4Merge installed and configured as Git’s diff/merge tool.
- Existing Git repository connected to a remote (GitLab/GitHub).

---

## Steps Performed

### 1. Create and Switch to a New Branch
1. In IntelliJ IDEA:
    - Go to **Git > Branches > New Branch…**
    - Name it:
      ```
      GitNewBranch
      ```
    - IntelliJ automatically checks out the new branch.

2. Verify using:
   ```bash
   git branch
