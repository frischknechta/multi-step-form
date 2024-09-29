import "./StepAndSeparator.css";

export const Step = (
  // { num }: { num: number }, { step }: { step: number }
  { num, step }
) => {
  return (
    <div id="stepIndicator" className={step >= num ? "active" : "inactive"}>
      {num}
    </div>
  );
};
