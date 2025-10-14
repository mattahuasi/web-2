type OutlinedButtonProps = {
  label: string;
  onClick: () => void;
};

export const OutlinedButton = ({ label, onClick }: OutlinedButtonProps) => {
  return (
    <button
      className="block px-5 py-2 text-xs font-medium rounded-md text-purple-500 dark:text-gray-50 border border-purple-500 dark:border-gray-50 hover:scale-110 capitalize transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      <span className="flex items-center gap-1">{label}</span>
    </button>
  );
};
