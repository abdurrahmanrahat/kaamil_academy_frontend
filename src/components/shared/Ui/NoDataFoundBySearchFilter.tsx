import { SearchX } from "lucide-react";

export default function NoDataFoundBySearchFilter({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {/* Icon */}
      <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
        <SearchX className="w-10 h-10 text-gray-500 dark:text-gray-400" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
        {description}
      </p>
    </div>
  );
}
