import Accordion from "./components/Accordion/Accordion";
import ReviewPanel from "./components/Review/ReviewPanel";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-4 md:px-6 md:py-6 xl:px-8">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "16px",
            background: "#fff",
            color: "#1F1F1F",
            padding: "18px 22px",
            fontSize: "16px",
            fontWeight: 500,
            minWidth: "360px",
          },
          success: {
            iconTheme: {
              primary: "#4F2EE8",
              secondary: "#fff",
            },
          },
        }}
      />

      <div
        className="
          mx-auto
          flex
          max-w-[1600px]
          flex-col
          gap-6
          2xl:flex-row
          2xl:items-start
          2xl:gap-8
        "
      >
        <Accordion />

        <ReviewPanel />
      </div>
    </main>
  );
}

export default App;
