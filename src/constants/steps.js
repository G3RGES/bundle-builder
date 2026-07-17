import { Camera, Shield, Radar, ShieldPlus } from "lucide-react";
export const steps = [
  {
    id: 1,
    title: "Choose your cameras",
    category: "cameras",
    label: "STEP 1 OF 4",
    nextLabel: "Choose your plan",
    icon: Camera,
  },
  {
    id: 2,
    title: "Choose your plan",
    category: "plans",
    label: "STEP 2 OF 4",
    nextLabel: "Choose your sensors",
    icon: Shield,
  },
  {
    id: 3,
    title: "Choose your sensors",
    category: "sensors",
    label: "STEP 3 OF 4",
    nextLabel: "Add extra protection",
    icon: Radar,
  },
  {
    id: 4,
    title: "Add extra protection",
    category: "accessories",
    label: "STEP 4 OF 4",
    nextLabel: null,
    icon: ShieldPlus,
  },
];
