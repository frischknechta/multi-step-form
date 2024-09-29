import "./ButtonNext.css";

export const ButtonNext = (
  // { step }: { step: number },
  // { setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }
  { step, setStep }
) => {
  return (
    <button
      onClick={() => {
        setStep(step + 1);
      }}
    >
      Next Step
    </button>
  );
};
