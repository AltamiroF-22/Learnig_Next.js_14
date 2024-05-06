import { ChildrenProps } from "@/interfaces/children";

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="flex items-center justify-center m-2 p-24 shadow-md border-solid border-1 border-zinc-900 bg-slate-50 rounded-xl">
      {children}
    </div>
  );
};

export default Card;
