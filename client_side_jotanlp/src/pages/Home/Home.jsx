import MainLayout from "../../layouts/MainLayout";

import papel_faces from "../../assets/images/papel_faces.jpg";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

const Home = () => (
  <MainLayout>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-x-6 gap-y-6 pb-10 pt-32 min-h-screen">
      {/*Spam email detector */}
      <Card className="mt-6 w-3/4 bg-gray-900 text-white">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={papel_faces}
            alt="img-blur-shadow"
            layout="fill"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            Sentiment Analysis
          </Typography>
          <Typography>
            Our sentiment analysis module utilizes natural language processing
            and machine learning techniques to assess and understand the
            emotions behind text. It provides a powerful tool for analyzing the
            tone, opinion, and polarity of any written content, making it easier
            to make informed decisions and understand public perception.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between">
          <Link to={"/sentiment-analysis"}>
            <Button className="bg-white text-black">Try</Button>
          </Link>
        </CardFooter>
      </Card>

      {/*Malicius urls */}
      <Card className="mt-6 w-3/4 bg-gray-900 text-white">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={
              "https://engage.sinch.com/sites/default/files/image/2023-07/chatbots-vs-conversational-AI-01-01.png"
            }
            alt="img-blur-shadow"
            layout="fill"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            ChatBOT
          </Typography>
          <Typography>
            Our chatbot module is a natural language processing application that
            enables users to interact with an artificial intelligence program
            through natural language conversations. It utilizes machine learning
            algorithms to understand and respond to user questions and commands,
            providing an advanced human-machine communication experience.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between">
          <Link to={"/malicious-url-detection"}>
            <Button className="bg-white text-black">Try</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  </MainLayout>
);

export default Home;
