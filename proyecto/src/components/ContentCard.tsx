import { LinkButton } from "./LinkButton";

type ContentCardProps = {
  countryName: string;
  extract: string;
  path: string;
};
export const ContentCard = ({
  countryName,
  extract,
  path,
}: ContentCardProps) => {
  return (
    <article className="p-4">
      <h1 className="text-gray-900 dark:text-gray-50 font-extrabold text-4xl mb-4">
        {countryName}
      </h1>

      <p className="text-gray-900 dark:text-gray-50 prose break-words line-clamp-3 lg:line-clamp-5 mb-8">
        {extract}
      </p>

      <div className="flex justify-between items-center">
        <LinkButton path={path} />
        <p className="text-gray-900 dark:text-gray-50 text-xs">
          Fuente:{" "}
          <a
            className="text-purple-500 font-semibold"
            href="https://es.wikipedia.org/"
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
          </a>
        </p>
      </div>
    </article>
  );
};
