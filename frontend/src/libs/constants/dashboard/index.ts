import { FormField } from "@/types/formTypes";
import {
  LayoutDashboard,
  CircleFadingPlus,
  ChartLine,
  History,
  User,
  Download,
  Settings,
  LogOut,
} from "lucide-react";


export const navLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  {
    to: "/dashboard/add-reading",
    icon: CircleFadingPlus,
    label: "Add Reading",
  },
  { to: "/dashboard/trends", icon: ChartLine, label: "Trends" },
  { to: "/dashboard/history", icon: History, label: "History" },
  { to: "/dashboard/profile", icon: User, label: "Profile" },
  { to: "/dashboard/report", icon: Download, label: "Report" },
  { to: "/dashboard/settings", icon: Settings, label: "Settings" },
  { to: "", icon: LogOut, label: "Logout" },

];
// Setup Page
export const setupFields: FormField[] = [
  { name: "age", type: "number", label: "Age", colSpan: 1, smColSpan: true },
  { name: "gender", type: "select", label: "Gender", colSpan: 1, smColSpan: true, options: ["Male", "Female", "other"] },
  { name: "diabetesType", type: "select", label: "Diabetes Type", colSpan: 1, smColSpan: true, options: ["Type 1", "Type 2", "Pre-diabetic"] },
  { name: "unit", type: "select", label: "Preferred Unit", colSpan: 1, smColSpan: true, options: ["mg/dL", "mmol/L"] },
  { name: "diagnosisDate", type: "date", label: "Diagnosis Date", colSpan: 2, smColSpan: true },
];

// Add Reading Page
export const addReadingFields: FormField[] = [
  { name: "glucose", type: "glucose", label: "Glucose Level", colSpan: 1, smColSpan: true },
  { name: "mealTiming", type: "select", label: "Meal Timing", colSpan: 1, smColSpan: true, customLabel: "Custom", enableCustom: true, maxCustomLength: 25, options: ["Before Meal", "After Meal", "Fasting"] },
  { name: "date", type: "date", label: "Select a day", colSpan: 1, smColSpan: true },
  { name: "time", type: "time", label: "Select time", colSpan: 1, smColSpan: true },
  { name: "note", type: "textarea", label: "Add a note", colSpan: 2 },
];

// Profile Page
export const profileUserInfoFields: FormField[] = [
  { name: "firstName", type: "text", label: "First Name", colSpan: 1, smColSpan: true },
  { name: "lastName", type: "text", label: "Last Name", colSpan: 1, smColSpan: true },
  { name: "age", type: "number", label: "Age", colSpan: 1, smColSpan: true },
  { name: "gender", type: "select", label: "Gender", colSpan: 1, smColSpan: true, options: ["Male", "Female", "other"] },
  { name: "diabetesType", type: "select", label: "Diabetes Type", colSpan: 1, smColSpan: true, options: ["Type 1", "Type 2", "Pre-diabetic"] },
  { name: "diagnosisDate", type: "date", label: "Diagnosis Date", colSpan: 1, smColSpan: true },
];

export const profileGlucosePreferenceFields: FormField[] = [
  { name: "unit", type: "select", label: "Preferred Unit", colSpan: 2, smColSpan: true, options: ["mg/dL", "mmol/L"] },
  { name: "targetMin", type: "glucose", label: "Min Target Range", colSpan: 1, smColSpan: true },
  { name: "targetMax", type: "glucose", label: "Max Target Range", colSpan: 1, smColSpan: true },
]
