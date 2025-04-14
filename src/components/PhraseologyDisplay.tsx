import { PropsWithChildren } from "react";

const PhraseologyDisplay: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-6 flex flex-col border-y border-latvia-carmine *:border-t *:border-slate-300 *:p-2 first:*:border-t-0">
    {children}
  </div>
);

export default PhraseologyDisplay;
