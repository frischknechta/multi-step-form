import "./StepAndSeparator.css";

export const Separator = ({ num, step }) => {
  return (
    <div id="separator" className={step >= num ? "active" : "inactive"}></div>
  );
};
