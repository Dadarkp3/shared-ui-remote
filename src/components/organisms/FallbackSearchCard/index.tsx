import Card from "../../molecules/Card";

import SunglassesSun from "../../../assets/sunglasses-sun.webp";

const FallbackSearchCard = () => {
  return (
    <Card>
      <div className="text-center">
        <img
          src={SunglassesSun}
          alt="Placeholder"
          className="mx-auto mb-4 w-32"
        />
        <p className="text-gray-700 font-medium">Search for a place</p>
      </div>
    </Card>
  );
};

export default FallbackSearchCard;
