const rooms = {
  room1: {
    id: "GD5JD6GNBB2SBRZ9X9Z2KBA5",
    name: "King Room",
    price: 400,
    photo: (
      <img
        src={require("../images/new-york/ThompsonCentralPark/room1/room1.jpg")}
      />
    ),
  },
  room2: {
    id: "IGWBSWT14ETU073OZCQ3ZSEK",
    name: "King Room with Park View",
    price: 675,
    photo: (
      <img
        src={require("../images/new-york/ThompsonCentralPark/room1/room3.jpg")}
      />
    ),
  },
  room3: {
    id: "KJNC7CX66HJLGX72RFGVEIRY",
    name: "Double Room with Two Double Beds",
    price: 700,
    photo: (
      <img
        src={require("../images/new-york/ThompsonCentralPark/room1/room2.jpg")}
      />
    ),
  },
  room4: {
    id: "DMD4N21L8KADVDLHTR7M3YV3",
    name: "Deluxe King Room",
    price: 765,
    photo: (
      <img
        src={require("../images/new-york/ThompsonCentralPark/room1/room4.jpg")}
      />
    ),
  },
  room5: {
    id: "2ZR5ZS29XXOFYDMWJVLO6YWS",
    name: "Superior King Room",
    price: 800,
    photo: (
      <img src={require("../images/new-york/TheStRegisNewYork/rooms/1.jpg")} />
    ),
  },
  room6: {
    id: "42IXEIGOQ0FGMTQALYCPLE06",
    name: "Deluxe King Room",
    price: 940,
    photo: (
      <img src={require("../images/new-york/TheStRegisNewYork/rooms/2.jpg")} />
    ),
  },
  room7: {
    id: "659YUZKTS3682JUPE13H14DL",
    name: "Grand Luxe King Room",
    price: 1030,
    photo: (
      <img src={require("../images/new-york/TheStRegisNewYork/rooms/3.jpg")} />
    ),
  },
  room8: {
    id: "Z80Q9OO7U6WZHZ73GET9QKHP",
    name: "One-Bedroom Astor Suite",
    price: 1880,
    photo: (
      <img src={require("../images/new-york/TheStRegisNewYork/rooms/4.jpg")} />
    ),
  },
  room9: {
    id: "1BQIO51LN9NRXPBHIHK05AV4",
    name: "Standard King Room",
    price: 400,
    photo: (
      <img
        src={require("../images/new-york/HardRockHotelNewYork/rooms/1.jpg")}
      />
    ),
  },
  room10: {
    id: "3FHJDV50PCESCFPMAK11KQZI",
    name: "Superior King Room",
    price: 430,
    photo: (
      <img
        src={require("../images/new-york/HardRockHotelNewYork/rooms/2.jpg")}
      />
    ),
  },
  room11: {
    id: "WIYBTBJERFVKRVT1DNST0GCX",
    name: "Deluxe King Room",
    price: 500,
    photo: (
      <img
        src={require("../images/new-york/HardRockHotelNewYork/rooms/3.jpg")}
      />
    ),
  },
  room12: {
    id: "YLP281NJKJMCGLXFFQJLFWG2",
    name: "Studio",
    price: 550,
    photo: (
      <img
        src={require("../images/new-york/HardRockHotelNewYork/rooms/4.jpg")}
      />
    ),
  },
  room13: {
    id: "0OGUNHRYMMDDW2AU7TAMUMKG",
    name: "Junior Suite",
    price: 310,
    photo: <img src={require("../images/new-york/SixtyLES/rooms/1.jpg")} />,
  },
  room14: {
    id: "TR7V374COP45BREZAW0EJCYV",
    name: "King Studio",
    price: 350,
    photo: <img src={require("../images/new-york/SixtyLES/rooms/2.jpg")} />,
  },
  room15: {
    id: "VUXNIN8RHSUWQ8SD2ZR5ZS29",
    name: "Premium Junior Suite",
    price: 399,
    photo: <img src={require("../images/new-york/SixtyLES/rooms/3.jpg")} />,
  },
  room16: {
    id: "XXOFYDMWJVLO6YWS42IXEIGO",
    name: "Allen Suite",
    price: 450,
    photo: <img src={require("../images/new-york/SixtyLES/rooms/4.jpg")} />,
  },
  room17: {
    id: "Q0FGMTQALYCPLE06659YUZKT",
    name: "Queen Studio",
    price: 410,
    photo: (
      <img src={require("../images/new-york/TheLudlowHotel/rooms/1.jpg")} />
    ),
  },
  room18: {
    id: "S3682JUPE13H14DLZ80Q9OO7",
    name: "King Studio",
    price: 460,
    photo: (
      <img src={require("../images/new-york/TheLudlowHotel/rooms/2.jpg")} />
    ),
  },
  room19: {
    id: "U6WZHZ73GET9QKHP1BQIO51L",
    name: "Queen Loft",
    price: 460,
    photo: (
      <img src={require("../images/new-york/TheLudlowHotel/rooms/3.jpg")} />
    ),
  },
  room20: {
    id: "N9NRXPBHIHK05AV43FHJDV50",
    name: "King Loft",
    price: 530,
    photo: (
      <img src={require("../images/new-york/TheLudlowHotel/rooms/4.jpg")} />
    ),
  },
  room21: {
    id: "PCESCFPMAK11KQZIWIYBTBJE",
    name: "Guest Room",
    price: 340,
    photo: (
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/rooms/1.jpg")}
      />
    ),
  },
  room22: {
    id: "RFVKRVT1DNST0GCXYLP281NJ",
    name: "Guest room, City view",
    price: 440,
    photo: (
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/rooms/2.jpg")}
      />
    ),
  },
  room23: {
    id: "KJMCGLXFFQJLFWG20OGUNHRY",
    name: "Guest room, 2 Double",
    price: 460,
    photo: (
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/rooms/3.jpg")}
      />
    ),
  },
  room24: {
    id: "MMDDW2AU7TAMUMKGTR7V374C",
    name: "Standard King Room",
    price: 450,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkHotel/rooms/1.jpg")}
      />
    ),
  },
  room25: {
    id: "OP45BREZAW0EJCYVVUXNIN8R",
    name: "Luxury King Room",
    price: 470,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkHotel/rooms/2.jpg")}
      />
    ),
  },
  room26: {
    id: "HSUWQ8SD2ZR5ZS29XXOFYDMW",
    name: "Signature King",
    price: 560,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkHotel/rooms/3.jpg")}
      />
    ),
  },
  room27: {
    id: "JVLO6YWS42IXEIGOQ0FGMTQA",
    name: "King Suite",
    price: 650,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkHotel/rooms/4.jpg")}
      />
    ),
  },
  room28: {
    id: "LYCPLE06659YUZKTS3682JUP",
    name: "Deluxe King Room",
    price: 540,
    photo: (
      <img src={require("../images/toronto/ParkHyattToronto/rooms/1.jpg")} />
    ),
  },
  room29: {
    id: "E13H14DLZ80Q9OO7U6WZHZ73",
    name: "One-Bedroom King Suite",
    price: 575,
    photo: (
      <img src={require("../images/toronto/ParkHyattToronto/rooms/2.jpg")} />
    ),
  },
  room30: {
    id: "GET9QKHP1BQIO51LN9NRXPBH",
    name: "One-Bedroom King Corner Suite",
    price: 625,
    photo: (
      <img src={require("../images/toronto/ParkHyattToronto/rooms/3.jpg")} />
    ),
  },
  room31: {
    id: "IHK05AV43FHJDV50PCESCFPM",
    name: "Queen Room with Two Queen Beds",
    price: 650,
    photo: (
      <img src={require("../images/toronto/ParkHyattToronto/rooms/4.jpg")} />
    ),
  },
  room32: {
    id: "AK11KQZIWIYBTBJERFVKRVT1",
    name: "Fairmont Gold King Room",
    price: 720,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/rooms/1.jpg")}
      />
    ),
  },
  room33: {
    id: "DNST0GCXYLP281NJKJMCGLXF",
    name: "Fairmont Gold King Studio Suite",
    price: 800,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/rooms/2.jpg")}
      />
    ),
  },
  room34: {
    id: "FQJLFWG20OGUNHRYMMDDW2AU",
    name: "Fairmont Gold King Suite",
    price: 1000,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/rooms/3.jpg")}
      />
    ),
  },
  room35: {
    id: "7TAMUMKGTR7V374COP45BREZ",
    name: "Historic Studio Suite",
    price: 350,
    photo: (
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/rooms/1.jpg")}
      />
    ),
  },
  room36: {
    id: "AW0EJCYVVUXNIN8RHSUWQ8SD",
    name: "Historic Superior Suite",
    price: 370,
    photo: (
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/rooms/2.jpg")}
      />
    ),
  },
  room37: {
    id: "GFI838T22DFHBT3YNBCQADNU",
    name: "Tower Deluxe Suite",
    price: 385,
    photo: (
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/rooms/3.jpg")}
      />
    ),
  },
  room38: {
    id: "9I90IYXH4G69R9HDPN3IZURZ",
    name: "Historic Superior Suite",
    price: 405,
    photo: (
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/rooms/4.jpg")}
      />
    ),
  },
  room39: {
    id: "BL0RYEBVWJX16ZLRRQUAEJ4D",
    name: "Queen Room with Two Queen Beds",
    price: 480,
    photo: (
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/rooms/1.jpg")}
      />
    ),
  },
  room40: {
    id: "DORTN4F9YMO2MPYWKTBBU08S",
    name: "King Room",
    price: 500,
    photo: (
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/rooms/2.jpg")}
      />
    ),
  },
  room41: {
    id: "6R8K2KSO1P5T152AMW239QM6",
    name: "Studio King Suite",
    price: 660,
    photo: (
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/rooms/3.jpg")}
      />
    ),
  },
  room42: {
    id: "8UZCIAWTTSWLQV6POZSUP6QB",
    name: "Deluxe Room",
    price: 420,
    photo: (
      <img
        src={require("../images/toronto/TheOmniKingEdwardHotel/rooms/1.jpg")}
      />
    ),
  },
  room43: {
    id: "AXP4XR07VVMM5BK3H3JW4WUQ",
    name: "Premier Room",
    price: 500,
    photo: (
      <img
        src={require("../images/toronto/TheOmniKingEdwardHotel/rooms/2.jpg")}
      />
    ),
  },
  room44: {
    id: "20G5CGEMYYDEL1O8J6ANTM84",
    name: "Deluxe Suite",
    price: 600,
    photo: (
      <img
        src={require("../images/toronto/TheOmniKingEdwardHotel/rooms/3.jpg")}
      />
    ),
  },
  room45: {
    id: "537XSXI0Q1460H1NC91F82CJ",
    name: "Luxury Executive Suite",
    price: 700,
    photo: (
      <img
        src={require("../images/toronto/TheOmniKingEdwardHotel/rooms/4.jpg")}
      />
    ),
  },
  room46: {
    id: "77YO7NV5S4VXF751ECS7OSPX",
    name: "King Room",
    price: 375,
    photo: (
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/rooms/1.jpg")}
      />
    ),
  },
  room47: {
    id: "ZAOQW3ZKV7LZVN9GGFI838T2",
    name: "Executive One-Bedroom King Suite",
    price: 390,
    photo: (
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/rooms/2.jpg")}
      />
    ),
  },
  room48: {
    id: "2DFHBT3YNBCQADNU9I90IYXH",
    name: "Premier One-Bedroom King Suite",
    price: 400,
    photo: (
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/rooms/3.jpg")}
      />
    ),
  },
  room49: {
    id: "4G69R9HDPN3IZURZBL0RYEBV",
    name: "Senior Penthouse",
    price: 860,
    photo: (
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/rooms/4.jpg")}
      />
    ),
  },
  room50: {
    id: "WJX16ZLRRQUAEJ4DDORTN4F9",
    name: "Fairmont Room",
    price: 380,
    photo: (
      <img
        src={require("../images/vancouver/FairmontHotelVancouver/rooms/1.jpg")}
      />
    ),
  },
  room51: {
    id: "YMO2MPYWKTBBU08S6R8K2KSO",
    name: "Fairmont Room with Two Queen Beds",
    price: 380,
    photo: (
      <img
        src={require("../images/vancouver/FairmontHotelVancouver/rooms/2.jpg")}
      />
    ),
  },
  room52: {
    id: "1P5T152AMW239QM68UZCIAWT",
    name: "Deluxe Corner Room with King Bed",
    price: 400,
    photo: (
      <img
        src={require("../images/vancouver/FairmontHotelVancouver/rooms/3.jpg")}
      />
    ),
  },
  room53: {
    id: "TSWLQV6POZSUP6QBAXP4XR07",
    name: "One-Bedroom Suite with King Bed",
    price: 590,
    photo: (
      <img
        src={require("../images/vancouver/FairmontHotelVancouver/rooms/4.jpg")}
      />
    ),
  },
  room54: {
    id: "VVMM5BK3H3JW4WUQ20G5CGEM",
    name: "Fairmont City View Room",
    price: 405,
    photo: (
      <img
        src={require("../images/vancouver/FairmontWaterfront/rooms/1.jpg")}
      />
    ),
  },
  room55: {
    id: "YYDEL1O8J6ANTM84537XSXI0",
    name: "Deluxe City View Room with Queen Bed",
    price: 415,
    photo: (
      <img
        src={require("../images/vancouver/FairmontWaterfront/rooms/2.jpg")}
      />
    ),
  },
  room56: {
    id: "Q1460H1NC91F82CJ77YO7NV5",
    name: "Deluxe Partial Harbor View",
    price: 420,
    photo: (
      <img
        src={require("../images/vancouver/FairmontWaterfront/rooms/3.jpg")}
      />
    ),
  },
  room57: {
    id: "S4VXF751ECS7OSPXZAOQW3ZK",
    name: "Fairmont Gold City View",
    price: 450,
    photo: (
      <img
        src={require("../images/vancouver/FairmontWaterfront/rooms/4.jpg")}
      />
    ),
  },
  room58: {
    id: "V7LZVN9GGFI838T22DFHBT3Y",
    name: "Boutique King Room",
    price: 390,
    photo: (
      <img src={require("../images/vancouver/L'HermitageHotel/rooms/1.jpg")} />
    ),
  },
  room59: {
    id: "NBCQADNU9I90IYXH4G69R9HD",
    name: "Signature One Bedroom Suite",
    price: 440,
    photo: (
      <img src={require("../images/vancouver/L'HermitageHotel/rooms/2.jpg")} />
    ),
  },
  room60: {
    id: "PN3IZURZBL0RYEBVWJX16ZLR",
    name: "Deluxe King Room",
    price: 390,
    photo: (
      <img
        src={require("../images/vancouver/EXchangeHotelVancouver/rooms/1.jpg")}
      />
    ),
  },
  room61: {
    id: "RQUAEJ4DDORTN4F9YMO2MPYW",
    name: "Superior King Room",
    price: 410,
    photo: (
      <img
        src={require("../images/vancouver/EXchangeHotelVancouver/rooms/2.jpg")}
      />
    ),
  },
  room62: {
    id: "KTBBU08S6R8K2KSO1P5T152A",
    name: "Blue Chip Suite",
    price: 885,
    photo: (
      <img
        src={require("../images/vancouver/EXchangeHotelVancouver/rooms/3.jpg")}
      />
    ),
  },
  room63: {
    id: "MW239QM68UZCIAWTTSWLQV6P",
    name: "Patio Suite",
    price: 1030,
    photo: (
      <img
        src={require("../images/vancouver/EXchangeHotelVancouver/rooms/4.jpg")}
      />
    ),
  },
  room64: {
    id: "OZSUP6QBAXP4XR07VVMM5BK3",
    name: "Standard Guest Room",
    price: 250,
    photo: (
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/rooms/1.jpg")}
      />
    ),
  },
  room65: {
    id: "H3JW4WUQ20G5CGEMYYDEL1O8",
    name: "Premium Guest Room, Marina & City View",
    price: 270,
    photo: (
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/rooms/2.jpg")}
      />
    ),
  },
  room66: {
    id: "J6ANTM84537XSXI0Q1460H1N",
    name: "Junior 1 Bedroom Suite",
    price: 345,
    photo: (
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/rooms/3.jpg")}
      />
    ),
  },
  room67: {
    id: "C91F82CJ77YO7NV5S4VXF751",
    name: "Lanai 1 Bedroom Suite",
    price: 510,
    photo: (
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/rooms/4.jpg")}
      />
    ),
  },
};

const hotel = [
  {
    hotelID: "YVN1UOX5TSKAT8HREQHJ1TRN",
    name: "Thompson Central Park",
    address: "119 West 56th Street",
    stars: 5,
    cityName: "newyork",
    description:
      "A New York Classic, Remastered. The property offers a combination of suites and rooms with varying views and low floor options. Designed to accommodate work and play, our rooms have been upgraded with refined finishes — warm woods, sleek marble, jewel-toned pops — and unexpected touches, like sculptural ombré lighting, ribbed wall detailing and an inventive geometric étagére. And starting in early 2022, our guests can also expect an elevated New York experience from our Upper Stories collection of rooms and suites perched on our topmost guest floors.",
    highlights: [
      "Free WiFi",
      "Private Parking",
      "Non-smoking rooms",
      "Fitness center",
      "Restaurant",
      "24-hour front desk",
      "Bar",
    ],
    photos: [
      <img src={require("../images/new-york/ThompsonCentralPark/1.jpg")} />,
      <img src={require("../images/new-york/ThompsonCentralPark/2.jpg")} />,
      <img src={require("../images/new-york/ThompsonCentralPark/3.jpg")} />,
    ],
    rooms: [rooms.room1, rooms.room2, rooms.room3, rooms.room4],
  },
  {
    hotelID: "214UPUFONZ13XFPK9WYCWZ9G",
    name: "The St. Regis New York",
    address: "Two East 55th Street at Fifth Avenue, Midtown East",
    stars: 5,
    cityName: "newyork",
    description:
      "With two onsite dining options, The St. Regis New York offers guests exclusive dining experiences. Rooms offer 24-hour butler service. This hotel is located 484 m from The Museum of Modern Art.The spacious guest rooms provide flat-screen cable TVs, seating areas with sofas and desks. They have mini-bars, refrigerators, bathrobes and safety deposit boxes. WiFi is available.The St. Regis New York offers guests a gym and business center. It provides meeting rooms, a beauty and florist shop.",
    highlights: [
      "Free WiFi",
      "Private Parking",
      "Non-smoking rooms",
      "Fitness center",
      "Restaurant",
      "24-hour front desk",
      "Bar",
    ],
    photos: [
      <img src={require("../images/new-york/TheStRegisNewYork/1.jpg")} />,
      <img src={require("../images/new-york/TheStRegisNewYork/2.jpg")} />,
      <img src={require("../images/new-york/TheStRegisNewYork/3.jpg")} />,
    ],
    rooms: [rooms.room5, rooms.room6, rooms.room7, rooms.room8],
  },
  {
    hotelID: "V4VM4KJ2Q2SVDV3YB9P4LGDL",
    name: "Hard Rock Hotel New York",
    address: "159 West 48th Street",
    stars: 5,
    cityName: "newyork",
    description:
      "In a prime location in New York, Hard Rock Hotel New York provides air-conditioned rooms, a fitness center, free WiFi and a restaurant. This 5-star hotel offers room service and a 24-hour front desk. Guests can use a bar.All guest rooms at the hotel are equipped with a flat-screen TV and a safety deposit box.A continental, American or vegetarian breakfast is available every morning at the property.",
    highlights: [
      "Free WiFi",
      "Parking",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "24-hour front desk",
      "Bar",
    ],
    photos: [
      <img src={require("../images/new-york/HardRockHotelNewYork/1.jpg")} />,
      <img src={require("../images/new-york/HardRockHotelNewYork/2.jpg")} />,
      <img src={require("../images/new-york/HardRockHotelNewYork/3.jpg")} />,
    ],
    rooms: [rooms.room9, rooms.room10, rooms.room11, rooms.room12],
  },
  {
    hotelID: "RDU6O6EANBRFNROW8IOPVC8S",
    name: "Sixty LES",
    address: "190 Allen Street, Lower East Side",
    stars: 4,
    cityName: "newyork",
    description:
      "Located in New York’s trendy Lower East Side, SIXTY LES features a seasonal rooftop pool, beer garden and sushi restaurant, 500 m from the New Museum. Free WiFi access is offered.Rooms with bespoke Jim Walrod interior design elements feature floor-to-ceiling windows, iconic photography by Lee Friedlander and gourmet snacks. Private bathrooms offer slate showers with rain showerheads, oversize bathrobes by Frette and complimentary luxury bath amenities by REN.",
    highlights: [
      "Free WiFi",
      "Outdoor swimming pool",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "Restaurant",
      "Bar",
    ],
    photos: [
      <img src={require("../images/new-york/SixtyLES/1.jpg")} />,
      <img src={require("../images/new-york/SixtyLES/2.jpg")} />,
      <img src={require("../images/new-york/SixtyLES/3.jpg")} />,
    ],
    rooms: [rooms.room13, rooms.room14, rooms.room15, rooms.room16],
  },
  {
    hotelID: "UGLY3WIFFEH7CHSBALEGBSCX",
    name: "The Ludlow Hotel",
    address: "180 Ludlow Street, Lower East Side",
    stars: 4,
    cityName: "newyork",
    description:
      "Featuring spectacular views of the skyscrapers and bridges of New York City, this hotel is located in the Lower East Side neighborhood of Manhattan. WiFi access is provided in each guestroom free of charge.Hardwood floors, handmade silk rugs and artisan-crafted Moroccan lamps are featured in every room at The Ludlow Hotel. A mini-bar featuring local products is also provided. The private bathroom, decked out in marble mosaics, includes a deep soaking bathtub and brass rain shower.A 24-hour front desk welcomes guests to the Ludlow Hotel, which provides a trellis-covered garden for relaxation. Guests can also grab a drink in the lobby bar and lounge, or use the 24-hour fitness center. Parking is available nearby.",
    highlights: [
      "Free WiFi",
      "Facilities for disabled guests",
      "Non-smoking rooms",
      "Fitness center",
      "Terrace",
      "Bar",
      "Room service",
    ],
    photos: [
      <img src={require("../images/new-york/TheLudlowHotel/1.jpg")} />,
      <img src={require("../images/new-york/TheLudlowHotel/2.jpg")} />,
      <img src={require("../images/new-york/TheLudlowHotel/3.jpg")} />,
    ],
    rooms: [rooms.room17, rooms.room18, rooms.room19, rooms.room20],
  },
  {
    hotelID: "WJBQJCMTHH88RX6P3O5IQIGC",
    name: "Renaissance New York Chelsea Hotel",
    address: "112 West 25th Street, Chelsea",
    stars: 4,
    cityName: "newyork",
    description:
      "Located a 12-minute walk from Penn Station, Renaissance New York Chelsea Hotel offers 4-star accommodations in New York and features a terrace, a restaurant and a bar. Featuring a fitness center, the 4-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. The property provides room service and a 24-hour front desk for guests.All guest rooms at the hotel are equipped with a flat-screen TV with cable channels and a safety deposit box. At Renaissance New York Chelsea Hotel all rooms come with bed linen and towels.Buffet and American breakfast options are available every morning at the accommodation.",
    highlights: [
      "Free WiFi",
      "Parking",
      "Non-smoking rooms",
      "Fitness center",
      "Restaurant",
      "Bar",
      "Room service",
    ],
    photos: [
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/1.jpg")}
      />,
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/2.jpg")}
      />,
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/3.jpg")}
      />,
    ],
    rooms: [rooms.room21, rooms.room22, rooms.room23],
  },
  {
    hotelID: "I5JMSL7DDCGW05QZZADE9Q1V",
    name: "Fairmont Royal York Hotel",
    address: "100 Front Street West, M5J 1E3",
    stars: 5,
    cityName: "toronto",
    description:
      "Boasting a skylit indoor pool and 3 on-site dining options, this hotel is located across the street from Union Station. The eco-friendly property is adjacent from an airport express train to Toronto Pearson International Airport, 18 mi away. An airport shuttle to Billy Bishop Toronto City Airport, 1.9 mi away, is also available.A flat-screen cable TV, mini-bar and a coffee maker are provided in each room at Fairmont Royal York. The spacious rooms include designer bath toiletries and robes.Touring the Fairmont’s historic ballroom, working out in the gym or shopping on site are just a sample of activities this hotel features. A concierge desk and a business center are offered for guest convenience. Wi-Fi and wired internet are available upon request with surcharge.",
    highlights: [
      "2 swimming pools",
      "Private Parking",
      "WiFi in all areas",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "Bar",
    ],
    photos: [
      <img src={require("../images/toronto/FairmontRoyalYorkHotel/1.jpg")} />,
      <img src={require("../images/toronto/FairmontRoyalYorkHotel/2.jpg")} />,
      <img src={require("../images/toronto/FairmontRoyalYorkHotel/3.jpg")} />,
    ],
    rooms: [rooms.room24, rooms.room25, rooms.room26, rooms.room27],
  },
  {
    hotelID: "WJBQJCMTHH88RX6P3O5IQIGC",
    name: "Renaissance New York Chelsea Hotel",
    address: "112 West 25th Street, Chelsea",
    stars: 4,
    cityName: "newyork",
    description:
      "Located a 12-minute walk from Penn Station, Renaissance New York Chelsea Hotel offers 4-star accommodations in New York and features a terrace, a restaurant and a bar. Featuring a fitness center, the 4-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. The property provides room service and a 24-hour front desk for guests.All guest rooms at the hotel are equipped with a flat-screen TV with cable channels and a safety deposit box. At Renaissance New York Chelsea Hotel all rooms come with bed linen and towels.Buffet and American breakfast options are available every morning at the accommodation.",
    highlights: [
      "Free WiFi",
      "Parking",
      "Non-smoking rooms",
      "Fitness center",
      "Restaurant",
      "Bar",
      "Room service",
    ],
    photos: [
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/1.jpg")}
      />,
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/2.jpg")}
      />,
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/3.jpg")}
      />,
    ],
    rooms: [rooms.room21, rooms.room22, rooms.room23],
  },
  {
    hotelID: "I5JMSL7DDCGW05QZZADE9Q1V",
    name: "Fairmont Royal York Hotel",
    address: "100 Front Street West, M5J 1E3",
    stars: 5,
    cityName: "toronto",
    description:
      "Boasting a skylit indoor pool and 3 on-site dining options, this hotel is located across the street from Union Station. The eco-friendly property is adjacent from an airport express train to Toronto Pearson International Airport, 18 mi away. An airport shuttle to Billy Bishop Toronto City Airport, 1.9 mi away, is also available.A flat-screen cable TV, mini-bar and a coffee maker are provided in each room at Fairmont Royal York. The spacious rooms include designer bath toiletries and robes.Touring the Fairmont’s historic ballroom, working out in the gym or shopping on site are just a sample of activities this hotel features. A concierge desk and a business center are offered for guest convenience. Wi-Fi and wired internet are available upon request with surcharge.",
    highlights: [
      "2 swimming pools",
      "Private Parking",
      "WiFi in all areas",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "Bar",
    ],
    photos: [
      <img src={require("../images/toronto/FairmontRoyalYorkHotel/1.jpg")} />,
      <img src={require("../images/toronto/FairmontRoyalYorkHotel/2.jpg")} />,
      <img src={require("../images/toronto/FairmontRoyalYorkHotel/3.jpg")} />,
    ],
    rooms: [rooms.room24, rooms.room25, rooms.room26, rooms.room27],
  },
  {
    hotelID: "NBRFNROW8IOPVC8SUGLY3WIF",
    name: "Park Hyatt Toronto",
    address: "4 Avenue Road, M5R 2E8",
    stars: 5,
    cityName: "toronto",
    description:
      "We look forward to welcoming guests back to the newly revamped Park Hyatt Toronto starting on September 15th, 2021.This is our guests' favorite part of Toronto, according to independent reviews.",
    highlights: [
      "Free WiFi",
      "Parking",
      "Non-smoking rooms",
      "Fitness center",
      "Spa",
      "Restaurant",
      "Room service",
    ],
    photos: [
      <img src={require("../images/toronto/ParkHyattToronto/1.jpg")} />,
      <img src={require("../images/toronto/ParkHyattToronto/2.jpg")} />,
      <img src={require("../images/toronto/ParkHyattToronto/3.jpg")} />,
    ],
    rooms: [rooms.room28, rooms.room29, rooms.room30, rooms.room31],
  },
  {
    hotelID: "FEH7CHSBALEGBSCXWJBQJCMT",
    name: "Fairmont Royal York Gold Experience",
    address: "100 Front Street West Fairmont Gold Floor, M5J 1E3",
    stars: 5,
    cityName: "toronto",
    description:
      "Located in Toronto, a 18-minute walk from Sugar Beach, Fairmont Royal York Gold Experience has accommodations with a shared lounge, private parking and a bar. Offering a restaurant, the property also has free bikes, as well as an indoor pool and a fitness center. The property provides room service, a 24-hour front desk and currency exchange for guests.The hotel will provide guests with air-conditioned rooms with a desk, a coffee machine, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At Fairmont Royal York Gold Experience rooms contain bed linen and towels.",
    highlights: [
      "2 swimming pools",
      "Private Parking",
      "WiFi in all areas",
      "Non-smoking rooms",
      "Fitness center",
      "Spa",
      "Restaurant",
    ],
    photos: [
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/1.jpg")}
      />,
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/2.jpg")}
      />,
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/3.jpg")}
      />,
    ],
    rooms: [rooms.room32, rooms.room33, rooms.room34],
  },
  {
    hotelID: "CNQSM3N9YVN1UOX5TSKAT8HR",
    name: "One King West Hotel and Residence",
    address: "1 King Street West, M5H 1A1",
    stars: 4,
    cityName: "toronto",
    description:
      "Built in 1914, this downtown Toronto hotel blends historic charm and elegance with modern conveniences. St. Lawrence Market and the Hockey Hall of Fame are less than 10 minutes' walk away.Accommodations at this all-suite hotel are furnished with a variety of thoughtful amenities, including microwaves, refrigerators and coffeemakers. They also feature separate sleeping, dining and working areas.One King West Hotel and Residence has an on-site fitness center along with a restaurant and a bar.",
    highlights: [
      "Non-smoking rooms",
      "Restaurant",
      "Free WiFi",
      "Private Parking",
      "Room service",
      "Fitness center",
      "Bar",
    ],
    photos: [
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/1.jpg")}
      />,
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/2.jpg")}
      />,
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/3.jpg")}
      />,
    ],
    rooms: [rooms.room35, rooms.room36, rooms.room37, rooms.room38],
  },
  {
    hotelID: "EQHJ1TRN0YDTAEBJLWABIPL6",
    name: "Radisson Blu Downtown Toronto",
    address: "249 Queen's Quay West, M5J 2N5",
    stars: 4,
    cityName: "toronto",
    description:
      "This harbourfront hotel in Toronto city center features on-site dining as well as a rooftop patio with a seasonal pool. A mini-fridge and coffee maker are included in each guest room.A large work desk and flat-screen TV are common to all rooms at Radisson Blu Downtown Toronto. A pool, harbor or city view may be featured in these rooms.Showcasing regional ingredients, Watermark Restaurant specializes in Canadian cuisine. Light snacks are served at Radisson Admiral’s Watermark Lounge, along with local beers and wines.A fitness center is among recreational facilities available at Radisson Blu Downtown Toronto.",
    highlights: [
      "Outdoor swimming pool",
      "Parking on site",
      "Free WiFi",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "Restaurant",
    ],
    photos: [
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/1.jpg")}
      />,
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/2.jpg")}
      />,
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/3.jpg")}
      />,
    ],
    rooms: [rooms.room39, rooms.room40, rooms.room41],
  },
  {
    hotelID: "GT7LH9V2214UPUFONZ13XFPK",
    name: "The Omni King Edward Hotel",
    address: "37 King Street East, M5C 1E9",
    stars: 4,
    cityName: "toronto",
    description:
      "Featuring a bar, The Omni King Edward Hotel is located in the center of Toronto, a 14-minute walk from Sugar Beach. This 4-star hotel offers a concierge service and a tour desk. The property has room service, a 24-hour front desk and currency exchange for guests.The hotel will provide guests with air-conditioned rooms with a desk, a coffee machine, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At The Omni King Edward Hotel rooms include bed linen and towels.A buffet, à la carte or continental breakfast is served at the property. At the accommodation you'll find a restaurant serving American and International cuisine. Vegetarian, vegan and dairy-free options can also be requested.",
    highlights: [
      "Parking on site",
      "WiFi",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "Spa",
      "Restaurant",
    ],
    photos: [
      <img src={require("../images/toronto/TheOmniKingEdwardHotel/1.jpg")} />,
      <img src={require("../images/toronto/TheOmniKingEdwardHotel/2.jpg")} />,
      <img src={require("../images/toronto/TheOmniKingEdwardHotel/3.jpg")} />,
    ],
    rooms: [rooms.room42, rooms.room43, rooms.room44, rooms.room45],
  },
  {
    hotelID: "RP5K153BDN23AGDX8LZC81NT",
    name: "Hotel Le Soleil by Executive Hotels",
    address: "567 Hornby Street, V6C 2E8",
    stars: 5,
    cityName: "vancouver",
    description:
      "This Vancouver hotel offers an on-site restaurant and bar. Keurig coffee machine and refrigerator are included in each room. Vancouver Convention Center is 5 minutes’ walk away.A 42 flat-screen TV is offered in all rooms at Hotel Le Soleil by Executive Hotels. All rooms feature a separate living area and work desk. An private bathroom offers Luxury bath amenities, bathrobe, and slippers.Alouette Bistro borrows its culinary philosophies from the enduring dishes and methods of classic French bistros and invigorates them utilizing West Coast flavors.Hotel Le Soleil features an on-site cardio room. State of the art full fitness facility, with top-of-the-line cardio machines, free weights, functional training, and indoor lap pool. Located next to the hotel. We will be delighted to offer you a complimentary full access guest pass, please visit the Front Desk to obtain your passes. Guests must be 15 years of age or older to use the facilities.",
    highlights: [
      "Private Parking",
      "Free WiFi",
      "Non-smoking rooms",
      "Restaurant",
      "Room service",
      "24-hour front desk",
      "Bar",
    ],
    photos: [
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/1.jpg")}
      />,
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/2.jpg")}
      />,
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/3.jpg")}
      />,
    ],
    rooms: [rooms.room46, rooms.room47, rooms.room48, rooms.room49],
  },
  {
    hotelID: "USWLHM7GFQTVP6HC1OQ4OR08",
    name: "Fairmont Hotel Vancouver",
    address: "900 W. Georgia Street, V6C 2W6",
    stars: 5,
    cityName: "vancouver",
    description:
      "Located in Vancouver city center, this hotel offers an on-site restaurant and bar. A flat-screen cable TV is offered in each room. Vancouver City Center Skytrain station is 5 minutes’ walk away.Tea and coffee-making facilities are offered in all guest rooms at The Fairmont Hotel Vancouver. Each air-conditioned room features a mini-bar. Select rooms offer city views.Located in the lobby, Notch8 Restaurant & Bar offers internationally inspired cuisine featuring local produce.The Health Club at Fairomont Vancouver is open 24 hours a day and offers spa and sauna facilities. Guests can enjoy the indoor swimming pool. A business center is located on-site for guest convenience.",
    highlights: [
      "Indoor swimming pool",
      "Parking on site",
      "WiFi in all areas",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "Spa",
    ],
    photos: [
      <img src={require("../images/vancouver/FairmontHotelVancouver/1.jpg")} />,
      <img src={require("../images/vancouver/FairmontHotelVancouver/2.jpg")} />,
      <img src={require("../images/vancouver/FairmontHotelVancouver/3.jpg")} />,
    ],
    rooms: [rooms.room50, rooms.room51, rooms.room52, rooms.room53],
  },
  {
    hotelID: "MVNDWBBUHTKM4NUQ31GWD74D",
    name: "Fairmont Waterfront",
    address: "900 Canada Place Way, V6C 3L5",
    stars: 5,
    cityName: "vancouver",
    description:
      "Featuring an outdoor heated pool, this hotel is connected to the Vancouver Convention Center and Canada Place Cruise Ship Terminal. Vancouver’s Gastown is just 5 minutes’ walk away.Each room at The Fairmont Waterfront contains contemporary décor. The rooms are furnished with flat-screen TVs, a mini-bar and in-room safes. Bathrobes are also provided along with coffee and tea facilities.ARC Food & Drink offers fresh, local, and handcrafted cuisine for breakfast, lunch and dinner.An on-site health club with a modern gym and a hot tub are provided at the Vancouver Fairmont Waterfront. Steam rooms are available and guests can sit on the pool patio which offers views of the harbor and mountains.",
    highlights: [
      "Outdoor swimming pool",
      "Private Parking",
      "WiFi",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "Restaurant",
    ],
    photos: [
      <img src={require("../images/vancouver/FairmontWaterfront/1.jpg")} />,
      <img src={require("../images/vancouver/FairmontWaterfront/2.jpg")} />,
      <img src={require("../images/vancouver/FairmontWaterfront/3.jpg")} />,
    ],
    rooms: [rooms.room54, rooms.room55, rooms.room56, rooms.room57],
  },
  {
    hotelID: "L8CPVOA6769Z38K22D682J4P",
    name: "L'Hermitage Hotel",
    address: "788 Richards Street, V6B 3A4",
    stars: 4,
    cityName: "vancouver",
    description:
      "Offering a heated outdoor lap pool and hot tub, L'Hermitage Hotel includes rooms with a flat-screen TV. Vancouver City Center SkyTrain is 300 m away. Rogers Arena is 10 minutes’ walk from this Vancouver hotel.An iPod docking station and free WiFi are provided in the rooms at L’Hermitage Hotel. All rooms include luxury bathrobes and an Italian marble bathroom. Select rooms include a fireplace and a sofa bed.Guests at the L’Hermitage can relax on the garden patio or work in the business center, which includes a library. The hotel also offers a 24-hour gym. The L’Hermitage offers concierge services with information on area events and attractions.",
    highlights: [
      "Outdoor swimming pool",
      "Non-smoking rooms",
      "Restaurant",
      "Free WiFi",
      "Private Parking",
      "Room service",
      "Bar",
    ],
    photos: [
      <img src={require("../images/vancouver/L'HermitageHotel/1.jpg")} />,
      <img src={require("../images/vancouver/L'HermitageHotel/2.jpg")} />,
      <img src={require("../images/vancouver/L'HermitageHotel/3.jpg")} />,
    ],
    rooms: [rooms.room58, rooms.room59],
  },
  {
    hotelID: "GEUIQURZBCRSYF1MXJO16ZLI",
    name: "EXchange Hotel Vancouver",
    address: "475 Howe Street, V6B 2B3",
    stars: 4,
    cityName: "vancouver",
    description:
      "Offering a heated outdoor lap pool and hot tub, L'Hermitage Hotel includes rooms with a flat-screen TV. Vancouver City Center SkyTrain is 300 m away. Rogers Arena is 10 minutes’ walk from this Vancouver hotel.An iPod docking station and free WiFi are provided in the rooms at L’Hermitage Hotel. All rooms include luxury bathrobes and an Italian marble bathroom. Select rooms include a fireplace and a sofa bed.Guests at the L’Hermitage can relax on the garden patio or work in the business center, which includes a library. The hotel also offers a 24-hour gym. The L’Hermitage offers concierge services with information on area events and attractions.",
    highlights: [
      "Non-smoking rooms",
      "Restaurant",
      "Free WiFi",
      "Private Parking",
      "Room service",
      "Fitness center",
      "Bar",
    ],
    photos: [
      <img src={require("../images/vancouver/EXchangeHotelVancouver/1.jpg")} />,
      <img src={require("../images/vancouver/EXchangeHotelVancouver/2.jpg")} />,
      <img src={require("../images/vancouver/EXchangeHotelVancouver/3.jpg")} />,
    ],
    rooms: [rooms.room60, rooms.room61, rooms.room62, rooms.room63],
  },
  {
    hotelID: "IHKA5AVE4FHJEVF0PMETMFPW",
    name: "The Westin Bayshore, Vancouver",
    address: "1601 Bayshore Drive, V6G 2V4",
    stars: 4,
    cityName: "vancouver",
    description:
      "The Westin Bayshore, Vancouver is in perfect balance with its breathtaking urban and natural surroundings. An elegant base to explore Vancouver, this waterfront resort-style property is a hub of well-being. Direct access to the Vancouver Seawall and iconic Stanley Park, a variety of signature wellness programs, outdoor (heated) and indoor pool, and an on-site spa promote a feeling of excellence, amid food and beverage offerings that recharge body and mind.",
    highlights: [
      "2 swimming pools",
      "Parking on site",
      "Free WiFi",
      "Family rooms",
      "Non-smoking rooms",
      "Fitness center",
      "Bar",
    ],
    photos: [
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/1.jpg")}
      />,
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/2.jpg")}
      />,
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/3.jpg")}
      />,
    ],
    rooms: [rooms.room64, rooms.room65, rooms.room66, rooms.room67],
  },
];

export const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(hotel.find((hotel) => hotel.hotelID === id));
    }, 1000);
  });

export function fetchAll() {
  return rooms;
}
