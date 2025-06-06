export type User = {
    id: string;
    createdAt?: Date;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    profilePic?: string | undefined;
    darkMode?: boolean;
    hasCompletedSetup?: boolean;

    medicalProfile?: MedicalProfile
}

export type Reading = {
    id?: string;
    value: number;
    timestamp: string | Date;
    mealTiming: "Before Meal" | "After Meal" | "Fasting" | { custom: string };
    note?: string;
    userId?: string;
    createdAt?: string | Date;
}

export type MedicalProfile = {
    diabetesType?: "Type 1" | "Type 2" | "Pre-diabetes";
    age?: number;
    gender?: "Male" | "Female" | "Other";
    bloodSugarUnit?: "mg/dL" | "mmol/L";
    diagnosisDate?: Date | string;
    targetBloodSugarRange?: { min: number; max: number };
}