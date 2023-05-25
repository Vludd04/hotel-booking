const cities = [
  {
    id: "IF7LF8IPDD4VDT2CZB14MEC8",
    name: "New York",
    link: "newyork",
    photo: (
      <img
        src={require("../images/new-york/new-york.jpg")}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    ),
  },
  {
    id: "B8O3KOMUW6LMT0WGR4IVRK6C",
    name: "Toronto",
    link: "toronto",
    photo: (
      <img
        src={require("../images/toronto/toronto.jpg")}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    ),
  },
  {
    id: "ALNPJ1B6VJKYILVTHQ88RW5P",
    name: "Vancouver",
    link: "vancouver",
    photo: (
      <img
        src={require("../images/vancouver/vancouver-2.jpg")}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    ),
  },
];

export const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(cities.find((city) => city.link === id));
    }, 1000);
  });

export function fetchAll() {
  return cities;
}
