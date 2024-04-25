import { Link } from "react-router-dom";

const SaleSection = () => {
  return (
    <div className="container-custom h-[30rem] min-h-[30rem] flex flex-col mb-10 bg-secondary">
      <div className="content w-full h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col sm:flex-row">
        <div className="img-cont flex-1 w-full h-full relative">
          <img
            loading="lazy"
            className="w-full object-contain h-[90%] absolute bottom-0"
            src="./assets/sale.png"
            alt="sale day image"
          />
        </div>
        <div className="texts flex flex-col justify-center items-start h-full">
          <h1 className="text-6xl font-black leading-snug mb-4">
            <span className="titled-1">Payday</span> <br /> Sale Now
          </h1>
          <p className="text-lg font-medium">Spend minimal $100 get 30% Off</p>
          <p className="text-lg font-medium mb-4">
            voucher code for your next purchase
          </p>
          <h3 className="text-lg font-semibold">1 June - 10 June 2024</h3>
          <p className="text-lg font-medium mb-6">*Terms & Conditions apply</p>
          <Link className="btn btn-neutral" to={""}>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
