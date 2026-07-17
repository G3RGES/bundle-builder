# Bundle Builder

A responsive React application that allows users to build a personalized home security bundle by selecting cameras, sensors, accessories, and a monitoring plan while reviewing their order in real time.

## Preview

The application provides a multi-step bundle builder with a live review panel, automatic price calculations, and persistent state using Local Storage.

---

## Features

- Multi-step accordion interface
- Live review panel
- Product variant selection
- Quantity management
- Monitoring plan selection
- Automatic subtotal and savings calculation
- Free shipping support
- Responsive design (mobile, tablet, desktop)
- Toast notifications
- Local Storage persistence
- Save bundle for later

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

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## Project Structure

```
src/
│
├── components/
│   ├── Accordion/
│   ├── Product/
│   ├── Review/
│   └── Shared/
│
├── context/
├── data/
├── hooks/
├── utils/
├── constants/
│
├── App.jsx
└── main.jsx
```

---

## State Management

The application uses the Context API together with `useReducer` to manage the bundle state globally.

State includes:

- Selected products
- Product variants
- Quantities
- Active accordion step

The bundle is automatically persisted to Local Storage and restored when the application reloads.

---

## Responsive Design

The interface is optimized for:

- Mobile devices
- Tablets
- Desktop screens

Layouts automatically adapt based on screen size while maintaining usability.

---

## Author

**Gerges Nashaat**

- GitHub: https://github.com/G3RGES
- LinkedIn: https://linkedin.com/in/gergesnashaat
