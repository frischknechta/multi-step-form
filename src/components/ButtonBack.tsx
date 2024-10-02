import "./ButtonBack.css";

export const ButtonBack = (
  // { step }: { step: number },
  // { setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }
  { step, setStep }
) => {
  return (
    <button
      className="buttonBack"
      onClick={() => {
        setStep(step - 1);
      }}
    >
      Go Back
    </button>
  );
};
