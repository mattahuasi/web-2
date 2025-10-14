import { SmallLink } from "./SmallLink";

type FeatureCardProps = {
  title: string;
  description: string;
  flag: string;
  path: string;
  photo: string;
};

export const FeatureCard = ({
  title,
  description,
  flag,
  path,
  photo,
}: FeatureCardProps) => {
  return (
    <article
      className="realtive rounded-md px-8 py-9 bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <span className="block w-8 h-8 mb-6">{flag}</span>

      <h3 className="text-xl font-semibold text-purple-500 line-clamp-2 bg-gray-50 rounded-t-md p-1 bg-opacity-50 lg:line-clamp-1">
        {title}
      </h3>

      <p className="text-sm text-gray-50 mb-5 prose line-clamp-3 bg-purple-500 rounded-b-md p-1 bg-opacity-50">
        {description}
      </p>

      <SmallLink path={path} />
    </article>
  );
};
