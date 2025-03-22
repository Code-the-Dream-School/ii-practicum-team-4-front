# Git Branch & Commit Naming Convention

This guide helps us stay organized and consistent when working together on this React project.

---

## �� Branch Naming

Use this format:

```
type/short-description
```

### Types:
| Type      | Use for                            |
|-----------|------------------------------------|
| `feature` | New features                       |
| `fix`     | Bug fixes                          |
| `chore`   | Small tasks (e.g. config, updates) |
| `refactor`| Code cleanup, no feature change    |
| `hotfix`  | Urgent fixes on production         |

### Examples:
- `feature/login-page`
- `fix/header-overlap`
- `chore/update-eslint-config`
- `refactor/form-validation`
- `hotfix/broken-nav-link`

---

## ✍️ Commit Messages

Use this format:

```
type: short description
```

### Types:
| Type       | Use for                                      |
|------------|----------------------------------------------|
| `feat:`    | New features                                 |
| `fix:`     | Bug fixes                                    |
| `chore:`   | Minor tasks or non-feature changes           |
| `refactor:`| Code restructuring (no behavior changes)     |
| `style:`   | Formatting only (indentation, spacing, etc.) |
| `docs:`    | README or documentation updates              |
| `test:`    | Adding or updating tests                     |

### Examples:
- `feat: add login form`
- `fix: resolve button alignment issue`
- `chore: install axios`
- `refactor: simplify useEffect logic`
- `style: format HomePage.js`
- `docs: update README with setup steps`
- `test: add tests for Login component`

---

## ✅ Tips

- Keep branches focused: one branch = one task or fix.
- Make commits small and meaningful.
- Always pull the latest `main` or `dev` before creating a new branch.