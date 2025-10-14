import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router";
import { useCountriesSpanishNames } from "../hooks/useCountries";
import { useScroll } from "../hooks/useScroll";
import { Logo } from "./Logo";
import { NavigationLink } from "./NavigationLink";

export const Navbar = () => {
  const { scrolled } = useScroll();
  const { countriesSpanishNames } = useCountriesSpanishNames();
  const queryRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = queryRef.current?.value.toLocaleLowerCase() || "";

    const country = countriesSpanishNames.find(
      (c) =>
        c.official.toLocaleLowerCase().includes(query) ||
        (c.common && c.common.toLocaleLowerCase().includes(query))
    );

    const countryName = country?.query || "";

    if (country) {
      navigate(`/destiny/${encodeURIComponent(countryName)}`);
    } else {
      navigate(`/404`);
    }
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 overflow-clip">
      <div
        className={`flex flex-wrap justify-center lg:justify-around items-center gap-4 py-4 ${
          scrolled ? "bg-gray-50 dark:bg-gray-900" : `bg-transparent`
        } transition-all duration-300 ease-in-out`}
      >
        <Logo />

        <form
          className="w-full lg:w-1/2 flex justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            className="w-1/2 lg:w-3/4 px-4 py-2 text-sm text-center rounded-md border-none outline-none bg-gray-200 hover:ring-2 hover:scale-105 hover:ring-purple-500 focus:scale-105 focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
            type="search"
            name="query"
            id="query"
            placeholder="Busca tu destino"
            list="destinies"
            ref={queryRef}
          />

          <datalist id="destinies">
            {countriesSpanishNames.map((country) => (
              <option key={country.official} value={country.official} />
            ))}
          </datalist>

          <button
            className="px-4 py-2 rounded-md font-medium text-sm bg-purple-500 text-gray-50 hover:bg-purple-600 hover:scale-110 transition-all duration-300 ease-in-out"
            type="submit"
          >
            Ir al destino
          </button>
        </form>

        <ul className="flex justify-between items-center gap-4">
          <li>
            <NavigationLink path="/" label="Inicio" />
          </li>
          <li>
            <NavigationLink path="/destinies" label="Destinos" />
          </li>
          <li>
            <NavigationLink path="/flags" label="Banderas" />
          </li>
          <li>
            <NavigationLink path="/about" label="Acerca de..." />
          </li>
        </ul>
      </div>
    </nav>
  );
};
