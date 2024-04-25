import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const category = [
  {
    title: "Trending on instagram",
    subTitle: "Explore Now!",
    slug: "/",
    image: "./assets/fav1.png",
  },
  {
    title: "All Under 500",
    subTitle: "Explore Now!",
    slug: "/",
    image: "./assets/fav2.png",
  },
];

const FavouriteSection = () => {
  return (
    <div className="w-full min-h-[25rem] flex flex-col mb-10">
      <h1 className="text-3xl font-black uppercase blob">Our Favourites</h1>
      <div className="sections flex justify-center gap-20 items-center mt-10 mb-10 flex-wrap">
        {category.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            subTitle={card.subTitle}
            slug={card.slug}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  image: string;
  title: string;
  subTitle: string;
  slug: string;
}

const Card = ({ title, image, subTitle, slug }: CardProps) => {
  return (
    <div className="flex w-[28rem] h-64 flex-col mx-4">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-cover h-full flex-1 w-full rounded-lg"
      />
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="mt-2 text-lg font-semibold">{title}</h3>
          <p className="">{subTitle}</p>
        </div>
        <Link to={slug}>
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default FavouriteSection;
