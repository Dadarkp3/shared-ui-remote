import Card from "../../molecules/Card";

import CryingSun from "../../../assets/crying-sun.webp";

const SomethingWentWrongCard = () => {
  return (
    <Card>
      <div className="text-center">
        <img src={CryingSun} alt="Error" className="mx-auto mb-4 w-32" />
        <p className="text-gray-600 font-medium">
          Oops! Something went wrong...
        </p>
      </div>
    </Card>
  );
};

export default SomethingWentWrongCard;
