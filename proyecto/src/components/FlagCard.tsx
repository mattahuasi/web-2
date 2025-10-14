export const FlagCard = ({
  countryName,
  flag,
}: {
  countryName: string;
  flag: string;
}) => {
  return (
    <article>
      <h2 className="text-gray-900 dark:text-gray-50 font-semibold text-lg text-center mb-4">
        {countryName}
      </h2>

      <img
        className="w-full h-52 object-cover hover:scale-110 transition-all duration-300 ease-in-out"
        src={flag}
        alt={countryName + " flag"}
      />
    </article>
  );
};
