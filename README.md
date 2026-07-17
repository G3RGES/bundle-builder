# Bundle Builder

A responsive React application that allows users to build a personalized home security bundle by selecting cameras, sensors, accessories, and a monitoring plan with a live order review.

## Live Demo

🔗 https://bundle-builder-tau-six.vercel.app

---

## Features

- Multi-step accordion workflow
- Live review panel
- Product variant selection
- Quantity management
- Home monitoring plan selection
- Real-time price calculations
- Savings calculation
- Free shipping support
- Toast notifications
- Local Storage persistence
- Responsive design for mobile, tablet, and desktop

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- Context API
- useReducer
- Lucide React
- React Hot Toast

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```
src
├── components
│   ├── Accordion
│   ├── Product
│   ├── Review
│   └── Shared
├── constants
├── context
├── data
├── hooks
├── utils
├── App.jsx
└── main.jsx
```

---

## State Management

Global state is managed using the Context API and `useReducer`.

The application persists the bundle to Local Storage, allowing users to continue where they left off after refreshing the page.

---

## Author

**Gerges Nashaat**

- GitHub: https://github.com/G3RGES
- LinkedIn: https://www.linkedin.com/in/gergesnashaat/
- Portfolio: https://gergesnashaat.vercel.app/
