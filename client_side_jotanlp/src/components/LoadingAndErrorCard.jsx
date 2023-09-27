import image from "../assets/images/faces.jpg";

import { Typography } from "@material-tailwind/react";
import { ExclamationTriangle } from "react-bootstrap-icons";

const LoadingAndErrorCard = ({ errorMessage, isError, loading }) => {
  return (
    <div className="w-full lg:w-2/5 h-[300px] lg:h-auto lg:min-h-[350px] bg-[#1e293b] text-white flex flex-col justify-center items-center">
      {loading && !isError ? (
        <Typography className="text-4xl font-bold">Analizing...</Typography>
      ) : !isError && !loading ? (
        <img src={image} className="w-full h-[300px] lg:min-h-[350px]" />
      ) : null}
      {isError && (
        <>
          <Typography className="text-3xl text-red-500">
            {errorMessage}
          </Typography>
          <ExclamationTriangle height={100} width={100} color="red" />
        </>
      )}
    </div>
  );
};

export default LoadingAndErrorCard;
