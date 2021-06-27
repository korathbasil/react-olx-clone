import CarsIcon from "./assets/categories/CarsIcon";
import PropertyIcon from "./assets/categories/PropertyIcon";
import MobileIcon from "./assets/categories/MobileIcon";
import JobIcon from "./assets/categories/JobIcon";
import BikeIcon from "./assets/categories/BikeIcon";
import ElectronicsIcon from "./assets/categories/ElectronicsIcon";
import CommercialIcon from "./assets/categories/CommercialIcon";
import FurnitureIcon from "./assets/categories/FurnitureIcon";
import FashionIcon from "./assets/categories/FashionIcon";
import HobbiesIcon from "./assets/categories/HobbiesIcon";
import PetsIcon from "./assets/categories/PetsIcon";
import ServicesIcon from "./assets/categories/HobbiesIcon";

export const categories = [
  {
    name: "OLX Autos",
    Icon: CarsIcon,
    subs: [
      {
        name: "Cars",
        attributes: [
          {
            name: "Brand",
            type: "select",
            options: [
              "BMW",
              "Mercidez",
              "VolksWagen",
              "Maruti Suzuki",
              "Hyundai",
              "Tata",
              "Mahindra",
              "Toyota",
              "Honda",
            ],
          },
          {
            name: "Year",
            type: "input",
          },
          {
            name: "KM Driven",
            type: "input",
          },
        ],
      },
    ],
  },
  {
    name: "Properties",
    Icon: PropertyIcon,
    subs: [
      {
        name: "For Sale: Houses & Appartments",
      },
      {
        name: "For Rent: Houses & Appartments",
      },
      {
        name: "Lands & Plosts",
      },
      {
        name: "For Rent: Shops & Offices",
      },
      {
        name: "For Sale: Shops & Offices",
      },
      {
        name: "PG & guest Houses",
      },
    ],
  },
  {
    name: "Mobiles",
    Icon: MobileIcon,
    subs: [
      {
        name: "Mobile Phones",
      },
      {
        name: "Accessories",
      },
      {
        name: "Tablets",
      },
    ],
  },
  {
    name: "Jobs",
    Icon: JobIcon,
    subs: [
      {
        name: "Data Entry & Back office",
      },
      {
        name: "Sales & Marketing",
      },
      {
        name: "BPO & Telecaller",
      },
      {
        name: "Driver",
      },
      {
        name: "Office Assistant",
      },
      {
        name: "Delivery & Collection",
      },
      {
        name: "Teacher",
      },
      {
        name: "Cook",
      },
      {
        name: "Receptionist & Front Office",
      },
      {
        name: "Operator & Technician",
      },
      {
        name: "IT Engineer & Developer",
      },
      {
        name: "Hotel & Travel Executive",
      },
      {
        name: "Accountant",
      },
      {
        name: "Designer",
      },
      {
        name: "Other Jobs",
      },
    ],
  },
  {
    name: "Bikes",
    Icon: BikeIcon,
    subs: [
      {
        name: "Motorcycles",
      },
      {
        name: "Scooters",
      },
      {
        name: "Spare Parts",
      },
      {
        name: "Bicycles",
      },
    ],
  },
  {
    name: "Electronics & Appliances",
    Icon: ElectronicsIcon,
    subs: [
      {
        name: "TVs, Video - Audio",
      },
      {
        name: "Kitchen & Other Appliances",
      },
      {
        name: "Computers & Laptops",
      },
      {
        name: "Computer Accessories",
      },
      {
        name: "Hard Disks , Printers & Monitors",
      },
      {
        name: "Cameras & Lenses",
      },
      {
        name: "Games & Entertainment",
      },
      {
        name: "Fridges",
      },
      {
        name: "ACs",
      },
      {
        name: "Washing Machines",
      },
    ],
  },
  {
    name: "Commercial Vehicles & Spares",
    Icon: CommercialIcon,
    subs: [
      {
        name: "Commercial & Other Vehicles",
      },
      {
        name: "Spare Parts",
      },
    ],
  },
  {
    name: "Furniture",
    Icon: FurnitureIcon,
    subs: [
      {
        name: "Sofa & Dining",
      },
      {
        name: "Beds & Wardrobs",
      },
      {
        name: "Home Decor & Garden",
      },
      {
        name: "Kids Furniture",
      },
      {
        name: "Other Household Items",
      },
    ],
  },
  {
    name: "Fashion",
    Icon: FashionIcon,
    subs: [
      {
        name: "Men",
      },
      {
        name: "Women",
      },
      {
        name: "Kids",
      },
    ],
  },
  {
    name: "Books, Sports & Hobbies",
    Icon: HobbiesIcon,
    subs: [
      {
        name: "Books",
      },
      {
        name: "gym & Fitness",
      },
      {
        name: "Musical Instruments",
      },
      {
        name: "Sports Equipment",
      },
      {
        name: "Other Hobbies",
      },
    ],
  },
  {
    name: "Pets",
    Icon: PetsIcon,
    subs: [
      {
        name: "Fishes & Aquarium",
      },
      {
        name: "Pet Food & Accessories",
      },
      {
        name: "Dogs",
      },
      {
        name: "Other Pets",
      },
    ],
  },
  {
    name: "Services",
    Icon: ServicesIcon,
    subs: [
      {
        name: "Electonics & Computer",
      },
      {
        name: "Education & Classes",
      },
      {
        name: "Drivers & Taxi",
      },
      {
        name: "Health & Beauty",
      },
      {
        name: "Other Services",
      },
    ],
  },
];
