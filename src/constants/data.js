import images from "./images";

const wines = [
  {
    title: "Maui, Hawaii",
    price: "From $560",
    tags: "Flight | Hotel",
  },
  {
    title: "Las Vegas, Nevada",
    price: "From $399",
    tags: "Flight | Hotel",
  },
  {
    title: "Dominican Republic",
    price: "From $449",
    tags: "Flight | Resort",
  },
  {
    title: "Tokyo, Japan",
    price: "From $610",
    tags: "Flight | Airbnb",
  },
  {
    title: "London, England",
    price: "From $565",
    tags: "Flight | Car Rental",
  },
];

const cocktails = [
  {
    title: "Barcelona, Spain",
    price: "$2000",
    tags: "Hotel | First Class Flight | Car Rental | All-inclusive",
  },
  {
    title: "Rio De Janeiro, Brazil",
    price: "$1600",
    tags: "Resort | First Class Flight | Car Rental | All-inclusive",
  },
  {
    title: "Tulum, Mexico",
    price: "$1000",
    tags: "Hotel | Flight | Car Rental | All-inclusive",
  },
  {
    title: "Melbourne, Australia",
    price: "$3100",
    tags: "Hotel | Flight | Car Rental | All-inclusive",
  },
  {
    title: "Athens, Greece",
    price: "$2600",
    tags: "Hotel | Flight | Car Rental | All-inclusive",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Best Host Agency",
    subtitle: "From Royal Caribbean & Enterprise Holdings.",
  },
  {
    imgUrl: images.award01,
    title: "ASTA Sustainable Travel Award",
    subtitle: "The travel industry can “change the world” for the better.",
  },
  {
    imgUrl: images.award05,
    title: "Hotel Partner of the Year",
    subtitle: "From Oasis Travel Network.",
  },
  {
    imgUrl: images.award03,
    title: "International Chapter of the Year Award",
    subtitle: "Recognizes excellent International Chapter Presidents.",
  },
];

export default { wines, cocktails, awards };
