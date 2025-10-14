import { IconType } from "react-icons";

type StatCardProps = {
  Icon: IconType;
  counter: string;
  label: string;
};

export const StatCard = ({ Icon, counter, label }: StatCardProps) => {
  return (
    <article className="flex flex-col justify-center items-center gap-2 px-16">
      <Icon className="text-center mb-4 text-lg" />
      <h3 className="text-2xl font-extrabold text-purple-500">{counter}</h3>
      <p className="font-normal text-center text-xs text-gray-900">{label}</p>
    </article>
  );
};
