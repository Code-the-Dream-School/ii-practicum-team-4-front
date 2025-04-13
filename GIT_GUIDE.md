# Git Branch & Commit Naming Convention

This guide helps us stay organized and consistent when working together on this React project.

---

## 🌿 Branch Naming

Use this format:

```
type/short-description
```

### Types

| Type       | Use for                            |
| ---------- | ---------------------------------- |
| `feature`  | New features                       |
| `fix`      | Bug fixes                          |
| `chore`    | Small tasks (e.g. config, updates) |
| `refactor` | Code cleanup, no feature change    |
| `hotfix`   | Urgent fixes on production         |

### Examples

- `feature/login-page`
- `fix/header-overlap`
- `chore/update-eslint-config`
- `refactor/form-validation`
- `hotfix/broken-nav-link`

### Additional Notes

- **Always keep your branch up to date**: Before starting work and during development, make sure to pull the latest changes from the `dev` branch regularly. This avoids conflicts and ensures you're working with the most recent code.

- **Merge the `dev` branch into your feature branch frequently**: If you're working on a feature over multiple days, make sure to **merge `dev` into your working branch regularly** to stay in sync with the latest updates and avoid integration issues when it's time to create your pull request (PR).

- **Delete branches after the PR is merged**: To keep the repository clean, always delete your branch once the pull request has been merged.

- **Pull Request Naming**: PR titles should follow the same naming convention as branches:
  - No spaces.
  - Use only lowercase letters.
  - Use dashes (`-`) instead of spaces.
  - Example: `feature/login-page`

---

## ✍️ Commit Messages

Use this format:

```
type: short description
```

### Types

| Type        | Use for                                      |
| ----------- | -------------------------------------------- |
| `feat:`     | New features                                 |
| `fix:`      | Bug fixes                                    |
| `chore:`    | Minor tasks or non-feature changes           |
| `refactor:` | Code restructuring (no behavior changes)     |
| `style:`    | Formatting only (indentation, spacing, etc.) |
| `docs:`     | README or documentation updates              |
| `test:`     | Adding or updating tests                     |

### Examples

- `feat: add login form`
- `fix: resolve button alignment issue`
- `chore: install axios`
- `refactor: simplify useEffect logic`
- `style: format HomePage.js`
- `docs: update README with setup steps`
- `test: add tests for Login component`

---

## ✅ Tips

- **Keep branches focused**: One branch = one task or fix. Avoid working on multiple features or fixes in a single branch.
- **Regularly pull the latest updates from `dev`**: Always ensure your working branch is up to date with the `dev` branch to avoid conflicts and stay in sync with the latest code. Pull the latest `dev` before starting a task, and merge it into your feature branch frequently during development.
- **Make commits small and meaningful**: Each commit should address a single change, so it's easier to understand and review. This makes it easier to track down issues later if something goes wrong.

- **Delete branches after the PR is merged**: Clean up by deleting your branch after your pull request has been merged to keep the repository clutter-free.

- **Always pull latest `dev` before creating a new branch**: Before starting new work, ensure you're branching from the most recent `dev` code to minimize merge conflicts.
