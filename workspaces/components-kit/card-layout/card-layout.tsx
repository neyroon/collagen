import { FunctionalComponent } from "preact";

export const CardLayout: FunctionalComponent = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-x-[15px] gap-y-[32px] md:gap-[60px]">
      {children}
    </div>
  );
};
