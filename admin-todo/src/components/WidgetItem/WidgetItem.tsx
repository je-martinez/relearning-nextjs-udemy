import { PropsWithChildren } from "react";

interface WidgetItemProps extends PropsWithChildren {
  title: string;
}

export const WidgetItem = ({ title, children }: WidgetItemProps) => {
  return (
    <div className="w-full h-full p-8 space-y-6 rounded-xl border border-gray-200 bg-white">
      <div className="flex flex-col gap-2 w-full h-full">
        <h5 className="text-xl text-gray-600 text-center">{title}</h5>
        {children}
      </div>
    </div>
  );
};
