import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import Title from "../../components/Title";
import LoadingAndErrorCard from "../../components/LoadingAndErrorCard";
import FormFields from "../../components/FormFields";

import useApi from "../../hooks/useApi";

import { API_URL } from "../../utils/UtilitiesConts";

import { Typography } from "@material-tailwind/react";
import { ArrowLeftRight } from "react-bootstrap-icons";

const Index = () => {
  const { loading, isError, data, error, post, setData } = useApi();

  const [isEnglish, setIsEnglish] = useState(true);
  const [text, setText] = useState({ text: "" });

  const handleSubmit = async () => {
    await post(
      `${API_URL}/sentiment-analysis-${isEnglish ? "en" : "es"}/`,
      text
    );
  };

  const changeLanguage = (state) => {
    setIsEnglish(state);
    setData(null);
  };

  const { special_characters, language } = data ? data.text_info : {};
  const { prediction } = data ? data : {};
  const { percentage } = data && isEnglish ? data : {};
  const { predictions } = data && !isEnglish ? data : {};

  return (
    <MainLayout>
      <div className="w-full min-h-screen flex flex-col items-center">
        <Title title={"Sentiment analysis"} className={"pt-[100px]"} />
        <div className="w-full flex flex-col items-center my-6">
          <div className="flex mb-6 items-center">
            <Typography
              className={`mr-2 font-bold text-3xl ${
                isEnglish && "text-green-500"
              }`}
            >
              English
            </Typography>
            <ArrowLeftRight
              onClick={() => changeLanguage(!isEnglish)}
              className="cursor-pointer"
            />
            <Typography
              className={`ml-2 font-bold text-3xl ${
                !isEnglish && "text-green-500"
              }`}
            >
              Spanish
            </Typography>
          </div>
          <div className="w-11/12 sm:w-3/4 flex flex-col lg:flex-row h-full">
            <div className="relative w-full lg:w-3/5 bg-black h-auto lg:h-[350px] flex flex-col justify-between p-2">
              <Typography
                color="white"
                className="my-2 mx-2 text-justify uppercase"
              >
                Introduce a text for analize
              </Typography>
              <FormFields
                textName={"text"}
                label={isEnglish ? "This is a good day" : "Este es un buen dia"}
                loading={loading}
                textValue={text}
                setTextValue={setText}
                handleClick={handleSubmit}
              />
            </div>
            {data && !isError ? (
              <div className="w-full lg:w-2/5 h-auto lg:min-h-[350px] pb-4 bg-[#1e293b] text-white lg:shadow-2xl shadow-black">
                <Typography className="text-center text-2xl mt-6 font-bold">
                  Text Analysis details
                </Typography>
                <div className="border-t w-11/12 my-6 m-auto opacity-70"></div>
                <div className="mx-2 flex">
                  <Typography className="font-bold">
                    Special Characters Count:
                  </Typography>
                  <Typography className="ml-2">{special_characters}</Typography>
                </div>
                <div className="mx-2 flex mt-2">
                  <Typography className="font-bold">Language:</Typography>
                  <Typography className="ml-2">{language}</Typography>
                </div>
                {isEnglish && (
                  <div className="mx-2 flex mt-2">
                    <Typography className="font-bold">Percentage:</Typography>
                    <Typography className="ml-2">
                      {percentage} % (Positive)
                    </Typography>
                  </div>
                )}
                {!isEnglish && (
                  <>
                    <div className="border-t w-11/12 my-6 m-auto opacity-70"></div>
                    <Typography className="text-center text-2xl font-bold">
                      Sentiments percentages
                    </Typography>
                    {predictions &&
                      predictions.map((pred, index) => (
                        <div className="mx-2 flex mt-4" key={index}>
                          <Typography className={`font-bold`}>
                            {pred.class == 0
                              ? "Negative"
                              : pred.class == 1
                              ? "Positive"
                              : pred.class == 2
                              ? "Neutral"
                              : pred.class == 3
                              ? "Mixed"
                              : ""}
                            :{" "}
                          </Typography>
                          <Typography className={`ml-2`}>
                            {pred.percentage + " %"}
                          </Typography>
                        </div>
                      ))}
                  </>
                )}
                <div className="border-t w-11/12 my-6 m-auto opacity-70"></div>
                <div className="mx-2 flex flex-col items-center mt-4">
                  <Typography className="font-bold text-2xl">
                    General Sentiment
                  </Typography>
                  <Typography
                    className={`text-xl font-bold ${
                      prediction == 0
                        ? "text-black"
                        : prediction == 1
                        ? "text-green-300"
                        : prediction == 2
                        ? "text-yellow-400"
                        : prediction == 3
                        ? "text-blue-400"
                        : ""
                    }`}
                  >
                    {prediction == 0
                      ? `Negative`
                      : prediction == 1
                      ? `Positive`
                      : prediction == 2
                      ? "Neutral"
                      : prediction == 3
                      ? "Mixed"
                      : ""}
                  </Typography>
                </div>
              </div>
            ) : (
              <LoadingAndErrorCard
                isError={isError}
                loading={loading}
                errorMessage={"Submision Error"}
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
