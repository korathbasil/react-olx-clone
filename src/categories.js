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
        featuredAttributes: [
          { name: "Year", unit: "" },
          { name: "KM Driven", unit: "km" },
        ],
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
            name: "Fuel",
            type: "radio",
            options: ["CNC & hybrids", "Diesel", "Electric", "LPG", "Petrol"],
          },
          {
            name: "Transmission",
            type: "radio",
            options: ["Automatic", "Manual"],
          },
          {
            name: "KM Driven",
            type: "input",
          },
          {
            name: "No. of Owners",
            type: "radio",
            options: ["1st", "2nd", "3rd", "4th", "4+"],
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
        featuredAttributes: [
          { name: "Bedrooms", unit: "Bds" },
          { name: "Bathrooms", unit: "Ba" },
          { name: "Super Builtup Area (ft²)", unit: "ft²" },
        ],
        attributes: [
          {
            name: "Type",
            type: "radio",
            options: [
              "Apartments",
              "Builder Floors",
              "Farm Houses",
              "Houses & Villas",
            ],
          },
          {
            name: "Bedrooms",
            type: "radio",
            options: ["1", "2", "3", "4", "4+"],
          },
          {
            name: "Bathrooms",
            type: "radio",
            options: ["1", "2", "3", "4", "4+"],
          },
          {
            name: "Furnishing",
            type: "radio",
            options: ["Furnished", "Semi-Furnished", "Unfurnished"],
          },
          {
            name: "Listed by",
            type: "radio",
            options: ["Builder", "Dealer", "Owner"],
          },
          {
            name: "Super Builtup Area (ft²)",
            type: "input",
          },
          {
            name: "Carpet Area (ft²)",
            type: "input",
          },
          {
            name: "Miantenance (Monthly)",
            type: "input",
          },
          {
            name: "Total Floors",
            type: "input",
          },
          {
            name: "Floor No.",
            type: "input",
          },
          {
            name: "Car Parking",
            type: "radio",
            options: ["0", "1", "2", "3", "3+"],
          },
          {
            name: "Facing",
            type: "select",
            options: [
              "East",
              "North",
              "North-East",
              "North-West",
              "South",
              "South-East",
              "South-West",
              "West",
            ],
          },
          {
            name: "Project Name",
            type: "input",
          },
        ],
      },
      {
        name: "For Rent: Houses & Appartments",
        featuredAttributes: [
          { name: "Bedrooms", unit: "Bds" },
          { name: "Bathrooms", unit: "Ba" },
          { name: "Super Builtup Area (ft²)", unit: "ft²" },
        ],
        attributes: [
          {
            name: "Type",
            type: "radio",
            options: [
              "Apartments",
              "Builder Floors",
              "Farm Houses",
              "Houses & Villas",
            ],
          },
          {
            name: "Bedrooms",
            type: "radio",
            options: ["1", "2", "3", "4", "4+"],
          },
          {
            name: "Bathrooms",
            type: "radio",
            options: ["1", "2", "3", "4", "4+"],
          },
          {
            name: "Furnishing",
            type: "radio",
            options: ["Furnished", "Semi-Furnished", "Unfurnished"],
          },
          {
            name: "Listed by",
            type: "radio",
            options: ["Builder", "Dealer", "Owner"],
          },
          {
            name: "Super Builtup Area (ft²)",
            type: "input",
          },
          {
            name: "Carpet Area (ft²)",
            type: "input",
          },
          {
            name: "Bachelors Allowed",
            type: "radio",
            options: ["No", "Yes"],
          },
          {
            name: "Miantenance (Monthly)",
            type: "input",
          },
          {
            name: "Total Floors",
            type: "input",
          },
          {
            name: "Floor No.",
            type: "input",
          },
          {
            name: "Car Parking",
            type: "radio",
            options: ["0", "1", "2", "3", "3+"],
          },
          {
            name: "Facing",
            type: "select",
            options: [
              "East",
              "North",
              "North-East",
              "North-West",
              "South",
              "South-East",
              "South-West",
              "West",
            ],
          },
          {
            name: "Project Name",
            type: "input",
          },
        ],
      },
      {
        name: "Lands & Plosts",
        attributes: [
          {
            name: "Type",
            type: "radio",
            options: ["For Rent", "For Sale"],
          },
          {
            name: "Listed by",
            type: "radio",
            options: ["Builder", "Dealer", "Owner"],
          },
          {
            name: "Plot Area",
            type: "input",
          },
          {
            name: "Length",
            type: "input",
          },
          {
            name: "Breadth",
            type: "input",
          },
          {
            name: "Facing",
            type: "select",
            options: [
              "East",
              "North",
              "North-East",
              "North-West",
              "South",
              "South-East",
              "South-West",
              "West",
            ],
          },
          {
            name: "Project Name",
            type: "input",
          },
        ],
      },
      {
        name: "For Rent: Shops & Offices",
        attributes: [
          {
            name: "Furnishing",
            type: "radio",
            options: ["Furnished", "Semi-Furnished", "Unfurnished"],
          },
          {
            name: "Listed by",
            type: "radio",
            options: ["Builder", "Dealer", "Owner"],
          },
          {
            name: "Super Builtup Area (ft²)",
            type: "input",
          },
          {
            name: "Carpet Area (ft²)",
            type: "input",
          },
          {
            name: "Miantenance (Monthly)",
            type: "input",
          },
          {
            name: "Car Parking",
            type: "radio",
            options: ["0", "1", "2", "3", "3+"],
          },
          {
            name: "Washrooms",
            type: "input",
          },
          {
            name: "Project Name",
            type: "input",
          },
        ],
      },
      {
        name: "For Sale: Shops & Offices",
        attributes: [
          {
            name: "Furnishing",
            type: "radio",
            options: ["Furnished", "Semi-Furnished", "Unfurnished"],
          },
          {
            name: "Construction Status",
            type: "radio",
            options: ["New Launch", "Ready to Move", "Under Construction"],
          },
          {
            name: "Listed by",
            type: "radio",
            options: ["Builder", "Dealer", "Owner"],
          },
          {
            name: "Super Builtup Area (ft²)",
            type: "input",
          },
          {
            name: "Carpet Area (ft²)",
            type: "input",
          },
          {
            name: "Miantenance (Monthly)",
            type: "input",
          },
          {
            name: "Car Parking",
            type: "radio",
            options: ["0", "1", "2", "3", "3+"],
          },
          {
            name: "Washrooms",
            type: "input",
          },
          {
            name: "Project Name",
            type: "input",
          },
        ],
      },
      {
        name: "PG & guest Houses",
        attributes: [
          {
            name: "Subtype",
            type: "radio",
            options: ["Guest Houses", "PG", "Roommate"],
          },
          {
            name: "Furnishing",
            type: "radio",
            options: ["Furnished", "Semi-Furnished", "Unfurnished"],
          },
          {
            name: "Listed by",
            type: "radio",
            options: ["Builder", "Dealer", "Owner"],
          },
          {
            name: "Car Parking",
            type: "radio",
            options: ["0", "1", "2", "3", "3+"],
          },
          {
            name: "Meals Included",
            type: "radio",
            options: ["No", "Yes"],
          },
        ],
      },
    ],
  },
  {
    name: "Mobiles",
    Icon: MobileIcon,
    subs: [
      {
        name: "Mobile Phones",
        attributes: [
          {
            name: "Brand",
            type: "select",
            options: [
              "Asus",
              "Blackberry",
              "Gionee",
              "Google Pixel",
              "Honor",
              "HTC",
              "Huawei",
              "Infinix",
              "Intex",
              "IPhone",
              "Karbonn",
              "Lava",
              "Lenovo",
              "LG",
              "Mi",
              "Micromax",
              "Motorola",
              "Nokia",
              "OnePlus",
              "OPPO",
              "Realme",
              "Samsung",
              "Sony",
              "Tecno",
              "Vivo",
            ],
          },
        ],
      },
      {
        name: "Accessories",
        attributes: [
          {
            name: "Type",
            type: "radio",
            options: ["Mobile", "Tablets"],
          },
        ],
      },
      {
        name: "Tablets",
        attributes: [
          {
            name: "Type",
            type: "radio",
            options: ["iPads", "Samsung", "Other Tablets"],
          },
        ],
      },
    ],
  },
  {
    name: "Jobs",
    Icon: JobIcon,
    subs: [
      {
        name: "Data Entry & Back office",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Sales & Marketing",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "BPO & Telecaller",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Driver",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Office Assistant",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Delivery & Collection",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Teacher",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Cook",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Receptionist & Front Office",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Operator & Technician",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "IT Engineer & Developer",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Hotel & Travel Executive",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Accountant",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Designer",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
      {
        name: "Other Jobs",
        attributes: [
          {
            name: "Salary Period",
            type: "radio",
            options: ["Hourly", "Monthly", "Weekly", "Yearly"],
          },
          {
            name: "Position Type",
            type: "radio",
            options: ["Contract", "Full-Time", "Part-Time", "Temporary"],
          },
          {
            name: "Salary From",
            type: "input",
          },
          {
            name: "Salary To",
            type: "input",
          },
        ],
      },
    ],
  },
  {
    name: "Bikes",
    Icon: BikeIcon,
    subs: [
      {
        name: "Motorcycles",
        attributes: [
          {
            name: "Brand",
            type: "select",
            options: [
              "Bajaj",
              "Hero",
              "Hero Honda",
              "Honda",
              "KTM",
              "Royal Enfield",
              "Suzuki",
              "TVS",
              "Yamaha",
              "Other Brands",
            ],
          },
          {
            name: "Year",
            type: "input",
          },
          {
            name: "KM driven",
            type: "input",
          },
        ],
      },
      {
        name: "Scooters",
        attributes: [
          {
            name: "Brand",
            type: "select",
            options: [
              "Bajaj",
              "Hero",
              "Honda",
              "Mahindra",
              "Suzuki",
              "TVS",
              "Other Brands",
            ],
          },
          {
            name: "Year",
            type: "input",
          },
          {
            name: "KM driven",
            type: "input",
          },
        ],
      },
      {
        name: "Spare Parts",
      },
      {
        name: "Bicycles",
        attributes: [
          {
            name: "Brand",
            type: "radio",
            options: ["Hercules", "Hero", "Other Brands"],
          },
        ],
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
        attributes: [
          {
            name: "Type",
            type: "select",
            options: [
              "Auto-rickshaws & E-rickshaws",
              "Buses",
              "Trucks",
              "Heavy Machinery",
              "Modified Jeeps",
              "Pickup vans / Pickup trucks",
              "Scap Cars",
              "Taxi Cabs",
              "Tractors",
              "Others",
            ],
          },
          {
            name: "Year",
            type: "input",
          },
          {
            name: "KM driven",
            type: "input",
          },
        ],
      },
      {
        name: "Spare Parts",
        attributes: [
          {
            name: "Type",
            type: "radio",
            options: [
              "Wheels & Tyres",
              "Audio & Other Accessories",
              "Other Spare Parts",
            ],
          },
        ],
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
