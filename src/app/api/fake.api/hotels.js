const Hotels = [
  {
    hotelID: "YVN1UOX5TSKAT8HREQHJ1TRN",
    name: "Thompson Central Park",
    address: "119 West 56th Street",
    stars: 5,
    cityName: "newyork",
    mainPhoto: (
      <img src={require("../images/new-york/NewYorkHotelsPhotos/1.jpg")} />
    ),
  },
  {
    hotelID: "214UPUFONZ13XFPK9WYCWZ9G",
    name: "The St. Regis New York",
    address: "Two East 55th Street at Fifth Avenue, Midtown East",
    stars: 5,
    cityName: "newyork",
    mainPhoto: (
      <img src={require("../images/new-york/NewYorkHotelsPhotos/3.jpg")} />
    ),
  },
  {
    hotelID: "V4VM4KJ2Q2SVDV3YB9P4LGDL",
    name: "Hard Rock Hotel New York",
    address: "159 West 48th Street",
    stars: 5,
    cityName: "newyork",
    mainPhoto: (
      <img src={require("../images/new-york/NewYorkHotelsPhotos/4.jpg")} />
    ),
  },
  {
    hotelID: "RDU6O6EANBRFNROW8IOPVC8S",
    name: "Sixty LES",
    address: "190 Allen Street, Lower East Side",
    stars: 4,
    cityName: "newyork",
    mainPhoto: (
      <img src={require("../images/new-york/NewYorkHotelsPhotos/7.jpg")} />
    ),
  },
  {
    hotelID: "UGLY3WIFFEH7CHSBALEGBSCX",
    name: "The Ludlow Hotel",
    address: "180 Ludlow Street, Lower East Side",
    stars: 4,
    cityName: "newyork",
    mainPhoto: (
      <img src={require("../images/new-york/NewYorkHotelsPhotos/8.jpg")} />
    ),
  },
  {
    hotelID: "WJBQJCMTHH88RX6P3O5IQIGC",
    name: "Renaissance New York Chelsea Hotel",
    address: "112 West 25th Street, Chelsea",
    stars: 4,
    cityName: "newyork",
    mainPhoto: (
      <img src={require("../images/new-york/NewYorkHotelsPhotos/9.jpg")} />
    ),
  },
  {
    hotelID: "I5JMSL7DDCGW05QZZADE9Q1V",
    name: "Fairmont Royal York Hotel",
    address: "100 Front Street West, M5J 1E3",
    stars: 5,
    cityName: "toronto",
    mainPhoto: (
      <img src={require("../images/toronto/TorontoHotelsPhotos/1.jpg")} />
    ),
  },
  {
    hotelID: "NBRFNROW8IOPVC8SUGLY3WIF",
    name: "Park Hyatt Toronto",
    address: "4 Avenue Road, M5R 2E8",
    stars: 5,
    cityName: "toronto",
    mainPhoto: (
      <img src={require("../images/toronto/TorontoHotelsPhotos/3.jpg")} />
    ),
  },
  {
    hotelID: "FEH7CHSBALEGBSCXWJBQJCMT",
    name: "Fairmont Royal York Gold Experience",
    address: "100 Front Street West Fairmont Gold Floor, M5J 1E3",
    stars: 5,
    cityName: "toronto",
    mainPhoto: (
      <img src={require("../images/toronto/TorontoHotelsPhotos/4.jpg")} />
    ),
  },
  {
    hotelID: "CNQSM3N9YVN1UOX5TSKAT8HR",
    name: "One King West Hotel and Residence",
    address: "1 King Street West, M5H 1A1",
    stars: 4,
    cityName: "toronto",
    mainPhoto: (
      <img src={require("../images/toronto/TorontoHotelsPhotos/7.jpg")} />
    ),
  },
  {
    hotelID: "EQHJ1TRN0YDTAEBJLWABIPL6",
    name: "Radisson Blu Downtown Toronto",
    address: "249 Queen's Quay West, M5J 2N5",
    stars: 4,
    cityName: "toronto",
    mainPhoto: (
      <img src={require("../images/toronto/TorontoHotelsPhotos/8.jpg")} />
    ),
  },
  {
    hotelID: "GT7LH9V2214UPUFONZ13XFPK",
    name: "The Omni King Edward Hotel",
    address: "37 King Street East, M5C 1E9",
    stars: 4,
    cityName: "toronto",
    mainPhoto: (
      <img src={require("../images/toronto/TorontoHotelsPhotos/9.jpg")} />
    ),
  },
  {
    hotelID: "RP5K153BDN23AGDX8LZC81NT",
    name: "Hotel Le Soleil by Executive Hotels",
    address: "567 Hornby Street, V6C 2E8",
    stars: 5,
    cityName: "vancouver",
    mainPhoto: (
      <img src={require("../images/vancouver/VancouverHotelsPhotos/2.jpg")} />
    ),
  },
  {
    hotelID: "USWLHM7GFQTVP6HC1OQ4OR08",
    name: "Fairmont Hotel Vancouver",
    address: "900 W. Georgia Street, V6C 2W6",
    stars: 5,
    cityName: "vancouver",
    mainPhoto: (
      <img src={require("../images/vancouver/VancouverHotelsPhotos/3.jpg")} />
    ),
  },
  {
    hotelID: "MVNDWBBUHTKM4NUQ31GWD74D",
    name: "Fairmont Waterfront",
    address: "900 Canada Place Way, V6C 3L5",
    stars: 5,
    cityName: "vancouver",
    mainPhoto: (
      <img src={require("../images/vancouver/VancouverHotelsPhotos/4.jpg")} />
    ),
  },
  {
    hotelID: "L8CPVOA6769Z38K22D682J4P",
    name: "L'Hermitage Hotel",
    address: "788 Richards Street, V6B 3A4",
    stars: 4,
    cityName: "vancouver",
    mainPhoto: (
      <img src={require("../images/vancouver/VancouverHotelsPhotos/7.jpg")} />
    ),
  },
  {
    hotelID: "GEUIQURZBCRSYF1MXJO16ZLI",
    name: "EXchange Hotel Vancouver",
    address: "475 Howe Street, V6B 2B3",
    stars: 4,
    cityName: "vancouver",
    mainPhoto: (
      <img src={require("../images/vancouver/VancouverHotelsPhotos/9.jpg")} />
    ),
  },
  {
    hotelID: "IHKA5AVE4FHJEVF0PMETMFPW",
    name: "The Westin Bayshore, Vancouver",
    address: "1601 Bayshore Drive, V6G 2V4",
    stars: 4,
    cityName: "vancouver",
    mainPhoto: (
      <img src={require("../images/vancouver/VancouverHotelsPhotos/10.jpg")} />
    ),
  },
];

export const getByCity = (cityId) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(Hotels.filter((hotel) => hotel.cityName === cityId));
    }, 1000);
  });
