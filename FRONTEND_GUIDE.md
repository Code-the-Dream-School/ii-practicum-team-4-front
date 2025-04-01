# React & Frontend Best Practices

This guide helps our team write clean, scalable, and maintainable frontend code using **Tailwind CSS** and **React Context**. We've removed extra complexity like separate CSS, API, or context files to keep things beginner-friendly and focused.

---

## �� Project Structure

> ✅ **Organize by feature, not by type**

Each feature gets its own folder, even if it only has one file. This makes the project easier to scale and navigate.

### ✅ Recommended:

```
/src
  /features
    /login
      Login.jsx
    /signup
      Signup.jsx
    /dashboard
      Dashboard.jsx

  /components
    Button.jsx
    Modal.jsx
```

- Use `/features` for pages or grouped logic.
- Use `/components` for reusable UI pieces like buttons or modals.

---

### ❌ Not Recommended:

```
/src
  /components
    Login.jsx
    Signup.jsx
    Dashboard.jsx
    Button.jsx
    Modal.jsx
```

> **Why this is bad:**

- Everything is mixed together.
- You can't easily tell which components are reusable and which are tied to a specific feature.
- As the app grows, it gets harder to maintain and refactor.

---

## �� Components

- Use **functional components** only.
- Name components using **PascalCase**: `LoginForm`, `UserCard`.
- Keep components **small and focused**.
- Avoid deeply nesting components unless necessary.

---

## �� Styling with Tailwind CSS

- Use **Tailwind utility classes** directly in `className`.
- Keep class names readable and not too long.
- Use mobile-first responsive classes: `sm:`, `md:`, `lg:`.
- Use `clsx` if you need conditional classes.

### Example:

```jsx
<button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Submit
</button>
```

---

## �� State Management with useContext

- Use **React Context** only when state is truly global (e.g. user, theme).
- For local component state, use `useState` and `useEffect`.

---

## �� React Hooks

- Follow the **Rules of Hooks**:
  - Call hooks at the top level of your component.
  - Only call hooks inside functional components or other hooks.
- Create **custom hooks** in `/hooks` if logic is reused in multiple places.

---

## �� Code Style

- Use **Prettier** to format your code consistently.
- Use **ESLint** to catch errors early.
- Prefer **arrow functions**.
- Keep files and functions small — one component per file.

---

## �� Reusability

- Reuse logic through custom hooks or utility functions.
- Reuse UI through shared components in `/components`.
- Follow the **DRY** principle — Don’t Repeat Yourself.

---

## �� Git & Commits

> See `GIT_GUIDE.md` for branching and commit message conventions.

---

## �� Responsive Design

- Build mobile-first using Tailwind’s responsive utilities.
- Always test layout on different screen sizes.

---

## ✅ Code Reviews

- Open a Pull Request for every feature or bug fix.
- Review teammates' code kindly and constructively.
- Leave helpful comments. Ask questions if something’s unclear.

---

## �� Team Practices

- Communicate early if you're stuck or unsure.
- Ask questions, share solutions.
- Push your code often. Pull latest before starting new work.
- We're all learning—let’s grow together.
