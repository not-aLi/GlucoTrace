import PageTitle from "@/components/layout/dashboard/mainContent/PageTitle";
import { addReadingStats } from "@/libs/constants/dashboard/statFields";
import QuickStats from "@/components/ui/dashboard/stats/QuickStats";
import Form from "@/components/ui/common/Form";
import { addReadingFields } from "@/libs/constants/dashboard";
import { addReadingSchema } from "@/libs/validations/dashboardSchema";
import { useUserStore } from "@/store/useUserStore";
import { User } from "@/types/userTypes";
import { useReadingStore } from "@/store/useReadingStore";
import { useEffect } from "react";

type Data = {
  glucose: number;
  mealTiming: "Before Meal" | "After Meal" | "Fasting" | { custom: string };
  date: string;
  time: string;
  note: string;
};
const AddReading = () => {
  const { setUser, user } = useUserStore();
  const { setReadings, readings } = useReadingStore();

  useEffect(() => {
    console.log(readings);
  }, [readings]);

  const handleSubmit = (data: Data) => {
    if (!user) return;

    const { glucose, mealTiming, date, time, note } = data;
    const timestamp = mergeDateAndTime(date, time);

    const newReading = {
      id: Date.now().toString(),
      value: Number(glucose),
      mealTiming,
      timestamp,
      note,
      userId: user.id,
    };

    setReadings(newReading);

    console.log(data);
  };

  const mergeDateAndTime = (date: string, time: string) => {
    const dateObj = new Date(date);
    const [hours, minutes] = time.split(":");
    dateObj.setHours(Number(hours));
    dateObj.setMinutes(Number(minutes));

    const timestamp = dateObj.toISOString();
    return timestamp;
  };
  return (
    <>
      <PageTitle
        title="Add Glucose Reading"
        subTitle="Track your glucose levels in real-time."
      />
      <QuickStats stats={addReadingStats} />

      <div className="mt-3">
        <Form
          fields={addReadingFields}
          schema={addReadingSchema}
          buttonLabel="Confirm"
          onSubmit={handleSubmit}
          googleAuth={false}
          buttonClassName="w-96 max-sm:w-full"
          buttonAlignment="end"
        />
      </div>
    </>
  );
};

export default AddReading;
