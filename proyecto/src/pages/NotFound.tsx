import { useParams } from "react-router";
import { BaseLayout } from "../layouts/BaseLayout";

export default function NotFound() {
  const param = useParams();

  return (
    <BaseLayout>
      <section className="h-screen flex justify-center items-center py-28 bg-gray-50 dark:bg-gray-900 px-10 lg:px-40">
        <h1 className="text-center font-extrabold text-2xl lg:text-4xl text-gray-900 dark:text-gray-50">
          Lo sentimos no se encontro{" "}
          <span className="text-purple-500">{param["*"]}</span>
        </h1>
      </section>
    </BaseLayout>
  );
}
