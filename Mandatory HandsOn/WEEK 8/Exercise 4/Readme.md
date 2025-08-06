# Git Merge Conflict Resolution Hands-on Lab

This exercise demonstrates how to **handle merge conflicts** in Git when two branches modify the same file differently and then are merged.

---

## Objective
- Learn how to **identify and resolve merge conflicts**.
- Use **Git diff** and **P4Merge** (optional) to visualize conflicts.
- Perform a **3-way merge** to resolve conflicts.
- Commit the resolved changes and clean up branches.

---

## Prerequisites
- Git installed and configured.
- IntelliJ IDEA with Git integration.
- Optional: **P4Merge** installed for visual merge and diff.
- Repository is already set up with **master** branch in a clean state.

---

## Steps Performed

### 1. Verify Clean State
1. Make sure you are on the `master` branch:
   ```bash
   git checkout master
   git status
