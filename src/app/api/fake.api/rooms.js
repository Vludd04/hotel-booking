const rooms = [
  {
    id: "GD5JD6GNBB2SBRZ9X9Z2KBA5",
    name: "King Room",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 400,
    photo: (
      <img
        src={require("../images/new-york/ThompsonCentralPark/room1/room1.jpg")}
      />
    ),
  },
  {
    id: "IGWBSWT14ETU073OZCQ3ZSEK",
    name: "King Room with Park View",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 675,
    photo: (
      <img
        src={require("../images/new-york/ThompsonCentralPark/room1/room3.jpg")}
      />
    ),
  },
  {
    id: "KJNC7CX66HJLGX72RFGVEIRY",
    name: "Double Room with Two Double Beds",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 700,
    photo: (
      <img
        src={require("../images/new-york/ThompsonCentralPark/room1/room2.jpg")}
      />
    ),
  },
  {
    id: "DMD4N21L8KADVDLHTR7M3YV3",
    name: "Deluxe King Room",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 765,
    photo: (
      <img
        src={require("../images/new-york/ThompsonCentralPark/room1/room4.jpg")}
      />
    ),
  },
  {
    id: "2ZR5ZS29XXOFYDMWJVLO6YWS",
    name: "Superior King Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Bathtub",
    price: 800,
    photo: (
      <img src={require("../images/new-york/TheStRegisNewYork/rooms/1.jpg")} />
    ),
  },
  {
    id: "42IXEIGOQ0FGMTQALYCPLE06",
    name: "Deluxe King Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Bathtub",
    price: 940,
    photo: (
      <img src={require("../images/new-york/TheStRegisNewYork/rooms/2.jpg")} />
    ),
  },
  {
    id: "659YUZKTS3682JUPE13H14DL",
    name: "Grand Luxe King Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Bathtub",
    price: 1030,
    photo: (
      <img src={require("../images/new-york/TheStRegisNewYork/rooms/3.jpg")} />
    ),
  },
  {
    id: "Z80Q9OO7U6WZHZ73GET9QKHP",
    name: "One-Bedroom Astor Suite",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Bathtub",
    price: 1880,
    photo: (
      <img src={require("../images/new-york/TheStRegisNewYork/rooms/4.jpg")} />
    ),
  },
  {
    id: "1BQIO51LN9NRXPBHIHK05AV4",
    name: "Standard King Room",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 400,
    photo: (
      <img
        src={require("../images/new-york/HardRockHotelNewYork/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "3FHJDV50PCESCFPMAK11KQZI",
    name: "Superior King Room",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 430,
    photo: (
      <img
        src={require("../images/new-york/HardRockHotelNewYork/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "WIYBTBJERFVKRVT1DNST0GCX",
    name: "Deluxe King Room",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 500,
    photo: (
      <img
        src={require("../images/new-york/HardRockHotelNewYork/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "YLP281NJKJMCGLXFFQJLFWG2",
    name: "Studio",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 550,
    photo: (
      <img
        src={require("../images/new-york/HardRockHotelNewYork/rooms/4.jpg")}
      />
    ),
  },
  {
    id: "0OGUNHRYMMDDW2AU7TAMUMKG",
    name: "Junior Suite",
    facilities:
      "Facilities: 1 queen bed, Private suite, Air conditioning, Minibar",
    price: 310,
    photo: <img src={require("../images/new-york/SixtyLES/rooms/1.jpg")} />,
  },
  {
    id: "TR7V374COP45BREZAW0EJCYV",
    name: "King Studio",
    facilities: "Facilities: 1 king bed, Air conditioning, Minibar",
    price: 350,
    photo: <img src={require("../images/new-york/SixtyLES/rooms/2.jpg")} />,
  },
  {
    id: "VUXNIN8RHSUWQ8SD2ZR5ZS29",
    name: "Premium Junior Suite",
    facilities:
      "Facilities: 1 queen bed, 1 sofa bed, Private suite, Air conditioning, Minibar",
    price: 399,
    photo: <img src={require("../images/new-york/SixtyLES/rooms/3.jpg")} />,
  },
  {
    id: "XXOFYDMWJVLO6YWS42IXEIGO",
    name: "Allen Suite",
    facilities:
      "Facilities: 1 full bed, 1 sofa bed, Private suite, Balcony, Air conditioning, Minibar",
    price: 450,
    photo: <img src={require("../images/new-york/SixtyLES/rooms/4.jpg")} />,
  },
  {
    id: "Q0FGMTQALYCPLE06659YUZKT",
    name: "Queen Studio",
    facilities: "Facilities: 1 queen bed, Flat-screen TV, Soundproof",
    price: 410,
    photo: (
      <img src={require("../images/new-york/TheLudlowHotel/rooms/1.jpg")} />
    ),
  },
  {
    id: "S3682JUPE13H14DLZ80Q9OO7",
    name: "King Studio",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Bathtub",
    price: 460,
    photo: (
      <img src={require("../images/new-york/TheLudlowHotel/rooms/2.jpg")} />
    ),
  },
  {
    id: "U6WZHZ73GET9QKHP1BQIO51L",
    name: "Queen Loft",
    facilities: "Facilities: 1 queen bed, Flat-screen TV, Soundproof, Bathtub",
    price: 460,
    photo: (
      <img src={require("../images/new-york/TheLudlowHotel/rooms/3.jpg")} />
    ),
  },
  {
    id: "N9NRXPBHIHK05AV43FHJDV50",
    name: "King Loft",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Soundproof",
    price: 530,
    photo: (
      <img src={require("../images/new-york/TheLudlowHotel/rooms/4.jpg")} />
    ),
  },
  {
    id: "PCESCFPMAK11KQZIWIYBTBJE",
    name: "Guest Room",
    facilities: "Facilities: 1 king bed, Flat-screen TV, Air conditioning",
    price: 340,
    photo: (
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "RFVKRVT1DNST0GCXYLP281NJ",
    name: "Guest room, City view",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, City view, Air conditioning",
    price: 440,
    photo: (
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "KJMCGLXFFQJLFWG20OGUNHRY",
    name: "Guest room, 2 Double",
    facilities: "Facilities: 2 full beds, Flat-screen TV, Air conditioning",
    price: 460,
    photo: (
      <img
        src={require("../images/new-york/RenaissanceNewYorkChelseaHotel/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "MMDDW2AU7TAMUMKGTR7V374C",
    name: "Standard King Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 450,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkHotel/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "OP45BREZAW0EJCYVVUXNIN8R",
    name: "Luxury King Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 470,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkHotel/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "HSUWQ8SD2ZR5ZS29XXOFYDMW",
    name: "Signature King",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 560,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkHotel/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "JVLO6YWS42IXEIGOQ0FGMTQA",
    name: "King Suite",
    facilities:
      "Facilities: 1 king bed, Private suite, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 650,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkHotel/rooms/4.jpg")}
      />
    ),
  },
  {
    id: "LYCPLE06659YUZKTS3682JUP",
    name: "Deluxe King Room",
    facilities:
      "Facilities: 1 extra-large double bed, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 540,
    photo: (
      <img src={require("../images/toronto/ParkHyattToronto/rooms/1.jpg")} />
    ),
  },
  {
    id: "E13H14DLZ80Q9OO7U6WZHZ73",
    name: "One-Bedroom King Suite",
    facilities:
      "Facilities: 1 extra-large double bed, Private suite, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 575,
    photo: (
      <img src={require("../images/toronto/ParkHyattToronto/rooms/2.jpg")} />
    ),
  },
  {
    id: "GET9QKHP1BQIO51LN9NRXPBH",
    name: "One-Bedroom King Corner Suite",
    facilities:
      "Facilities: 1 extra-large double bed, Private suite, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 625,
    photo: (
      <img src={require("../images/toronto/ParkHyattToronto/rooms/3.jpg")} />
    ),
  },
  {
    id: "IHK05AV43FHJDV50PCESCFPM",
    name: "Queen Room with Two Queen Beds",
    facilities:
      "Facilities: 2 large double beds, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 650,
    photo: (
      <img src={require("../images/toronto/ParkHyattToronto/rooms/4.jpg")} />
    ),
  },
  {
    id: "AK11KQZIWIYBTBJERFVKRVT1",
    name: "Fairmont Gold King Room",
    facilities:
      "Facilities: 1 extra-large double bed, City view, Flat-screen TV, Air conditioning, Coffee machine",
    price: 720,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "DNST0GCXYLP281NJKJMCGLXF",
    name: "Fairmont Gold King Studio Suite",
    facilities:
      "Facilities: 1 extra-large double bed, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 800,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "FQJLFWG20OGUNHRYMMDDW2AU",
    name: "Fairmont Gold King Suite",
    facilities:
      "Facilities: 1 extra-large double bed, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 1000,
    photo: (
      <img
        src={require("../images/toronto/FairmontRoyalYorkGoldExperience/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "7TAMUMKGTR7V374COP45BREZ",
    name: "Historic Studio Suite",
    facilities:
      "Facilities: 1 king bed, Private kitchenette, Flat-screen TV, Air conditioning, Coffee machine, Dishwasher",
    price: 350,
    photo: (
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "AW0EJCYVVUXNIN8RHSUWQ8SD",
    name: "Historic Superior Suite",
    facilities:
      "Facilities: 1 king bed, Private kitchenette, Flat-screen TV, Air conditioning, Coffee machine, Dishwasher",
    price: 370,
    photo: (
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "GFI838T22DFHBT3YNBCQADNU",
    name: "Tower Deluxe Suite",
    facilities:
      "Facilities: 1 king bed, Private kitchenette, Flat-screen TV, Air conditioning, Coffee machine, Dishwasher",
    price: 385,
    photo: (
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "9I90IYXH4G69R9HDPN3IZURZ",
    name: "Historic Superior Suite",
    facilities: "Facilities: 1 king bed, Air conditioning, Dishwasher",
    price: 405,
    photo: (
      <img
        src={require("../images/toronto/OneKingWestHotelandResidence/rooms/4.jpg")}
      />
    ),
  },
  {
    id: "BL0RYEBVWJX16ZLRRQUAEJ4D",
    name: "Queen Room with Two Queen Beds",
    facilities:
      "Facilities: 2 queen beds, Flat-screen TV, Air conditioning, Coffee machine",
    price: 480,
    photo: (
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "DORTN4F9YMO2MPYWKTBBU08S",
    name: "King Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine",
    price: 500,
    photo: (
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "6R8K2KSO1P5T152AMW239QM6",
    name: "Studio King Suite",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine",
    price: 660,
    photo: (
      <img
        src={require("../images/toronto/RadissonBluDowntownToronto/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "8UZCIAWTTSWLQV6POZSUP6QB",
    name: "Deluxe Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine",
    price: 420,
    photo: (
      <img
        src={require("../images/toronto/TheOmniKingEdwardHotel/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "AXP4XR07VVMM5BK3H3JW4WUQ",
    name: "Premier Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine",
    price: 500,
    photo: (
      <img
        src={require("../images/toronto/TheOmniKingEdwardHotel/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "20G5CGEMYYDEL1O8J6ANTM84",
    name: "Deluxe Suite",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine",
    price: 600,
    photo: (
      <img
        src={require("../images/toronto/TheOmniKingEdwardHotel/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "537XSXI0Q1460H1NC91F82CJ",
    name: "Luxury Executive Suite",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine",
    price: 700,
    photo: (
      <img
        src={require("../images/toronto/TheOmniKingEdwardHotel/rooms/4.jpg")}
      />
    ),
  },
  {
    id: "77YO7NV5S4VXF751ECS7OSPX",
    name: "King Room",
    facilities:
      "Facilities: 1 king bed, City view, Flat-screen TV, Air conditioning, Coffee machine",
    price: 375,
    photo: (
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "ZAOQW3ZKV7LZVN9GGFI838T2",
    name: "Executive One-Bedroom King Suite",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, City view, Flat-screen TV, Air conditioning, Coffee machine",
    price: 390,
    photo: (
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "2DFHBT3YNBCQADNU9I90IYXH",
    name: "Premier One-Bedroom King Suite",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, City view, Flat-screen TV, Air conditioning, Coffee machine",
    price: 400,
    photo: (
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "4G69R9HDPN3IZURZBL0RYEBV",
    name: "Senior Penthouse",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, Balcony, City view, Flat-screen TV, Patio, Air conditioning, Coffee machine",
    price: 860,
    photo: (
      <img
        src={require("../images/vancouver/HotelLeSoleilbyExecutiveHotels/rooms/4.jpg")}
      />
    ),
  },
  {
    id: "WJX16ZLRRQUAEJ4DDORTN4F9",
    name: "Fairmont Room",
    facilities:
      "Facilities: 1 king bed, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 380,
    photo: (
      <img
        src={require("../images/vancouver/FairmontHotelVancouver/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "YMO2MPYWKTBBU08S6R8K2KSO",
    name: "Fairmont Room with Two Queen Beds",
    facilities:
      "Facilities: 2 queen beds, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 380,
    photo: (
      <img
        src={require("../images/vancouver/FairmontHotelVancouver/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "1P5T152AMW239QM68UZCIAWT",
    name: "Deluxe Corner Room with King Bed",
    facilities:
      "Facilities: 1 king bed, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 400,
    photo: (
      <img
        src={require("../images/vancouver/FairmontHotelVancouver/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "TSWLQV6POZSUP6QBAXP4XR07",
    name: "One-Bedroom Suite with King Bed",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 590,
    photo: (
      <img
        src={require("../images/vancouver/FairmontHotelVancouver/rooms/4.jpg")}
      />
    ),
  },
  {
    id: "VVMM5BK3H3JW4WUQ20G5CGEM",
    name: "Fairmont City View Room",
    facilities:
      "Facilities: 1 king bed, Garden view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 405,
    photo: (
      <img
        src={require("../images/vancouver/FairmontWaterfront/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "YYDEL1O8J6ANTM84537XSXI0",
    name: "Deluxe City View Room with Queen Bed",
    facilities:
      "Facilities: 1 queen bed, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 415,
    photo: (
      <img
        src={require("../images/vancouver/FairmontWaterfront/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "Q1460H1NC91F82CJ77YO7NV5",
    name: "Deluxe Partial Harbor View",
    facilities:
      "Facilities: 1 king bed, Mountain view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 420,
    photo: (
      <img
        src={require("../images/vancouver/FairmontWaterfront/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "S4VXF751ECS7OSPXZAOQW3ZK",
    name: "Fairmont Gold City View",
    facilities:
      "Facilities: 1 king bed, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 450,
    photo: (
      <img
        src={require("../images/vancouver/FairmontWaterfront/rooms/4.jpg")}
      />
    ),
  },
  {
    id: "V7LZVN9GGFI838T22DFHBT3Y",
    name: "Boutique King Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine",
    price: 390,
    photo: (
      <img src={require("../images/vancouver/L'HermitageHotel/rooms/1.jpg")} />
    ),
  },
  {
    id: "NBCQADNU9I90IYXH4G69R9HD",
    name: "Signature One Bedroom Suite",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, Private kitchen, Dishwasher, Flat-screen TV, Air conditioning, Coffee machine",
    price: 440,
    photo: (
      <img src={require("../images/vancouver/L'HermitageHotel/rooms/2.jpg")} />
    ),
  },
  {
    id: "PN3IZURZBL0RYEBVWJX16ZLR",
    name: "Deluxe King Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Soundproof, Coffee machine",
    price: 390,
    photo: (
      <img
        src={require("../images/vancouver/EXchangeHotelVancouver/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "RQUAEJ4DDORTN4F9YMO2MPYW",
    name: "Superior King Room",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, Flat-screen TV, Air conditioning, Soundproof, Coffee machine",
    price: 410,
    photo: (
      <img
        src={require("../images/vancouver/EXchangeHotelVancouver/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "KTBBU08S6R8K2KSO1P5T152A",
    name: "Blue Chip Suite",
    facilities:
      "Facilities: 1 king bed, Balcony, Bathtub, Patio, Flat-screen TV, Air conditioning, Terrace, Soundproof, Coffee machine",
    price: 885,
    photo: (
      <img
        src={require("../images/vancouver/EXchangeHotelVancouver/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "MW239QM68UZCIAWTTSWLQV6P",
    name: "Patio Suite",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, Balcony, Bathtub, Patio, Flat-screen TV, Air conditioning, Terrace, Soundproof, Coffee machine",
    price: 1030,
    photo: (
      <img
        src={require("../images/vancouver/EXchangeHotelVancouver/rooms/4.jpg")}
      />
    ),
  },
  {
    id: "OZSUP6QBAXP4XR07VVMM5BK3",
    name: "Standard Guest Room",
    facilities:
      "Facilities: 1 king bed, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 250,
    photo: (
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/rooms/1.jpg")}
      />
    ),
  },
  {
    id: "H3JW4WUQ20G5CGEMYYDEL1O8",
    name: "Premium Guest Room, Marina & City View",
    facilities:
      "Facilities: 1 king bed, Ocean view, City view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 270,
    photo: (
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/rooms/2.jpg")}
      />
    ),
  },
  {
    id: "J6ANTM84537XSXI0Q1460H1N",
    name: "Junior 1 Bedroom Suite",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, Balcony, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 345,
    photo: (
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/rooms/3.jpg")}
      />
    ),
  },
  {
    id: "C91F82CJ77YO7NV5S4VXF751",
    name: "Lanai 1 Bedroom Suite",
    facilities:
      "Facilities: 1 king bed, 1 sofa bed, Balcony, Ocean view, Flat-screen TV, Air conditioning, Coffee machine, Minibar",
    price: 510,
    photo: (
      <img
        src={require("../images/vancouver/TheWestinBayshoreVancouver/rooms/4.jpg")}
      />
    ),
  },
];

export function fetchAll() {
  return rooms;
}
