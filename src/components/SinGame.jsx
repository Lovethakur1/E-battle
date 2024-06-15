import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Carousel, Container, PostCard, Button } from "../components";
import { Link, useParams } from "react-router-dom";

function SinGame() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  const [nStatus, setNStatus] = useState("active"); // State to track the status

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const handleStatusChange = (status) => {
    setNStatus(status);
  };

  const currentDate = new Date(); // Current date

  return (
    <>
      <div className="flex ">
        <Button
          onClick={() => handleStatusChange("active")}
          className={` rounded-none  ${
            nStatus === "active" ? "bg-red-500" : "bg-blue-500"
          } text-white `}
        >
          Active
        </Button>
        <Button
          onClick={() => handleStatusChange("inactive")}
          className={`${
            nStatus === "inactive" ? "bg-red-500" : "bg-blue-500"
          } text-white`}
        >
          Inactive
        </Button>
      </div>

      <div>
        <Container>
          <div className="flex flex-wrap">
            {posts
              .filter((item) => item.gameName === slug)
              .filter((item) =>
                nStatus
                  ? (item.status === nStatus &&
                      new Date(item.date) > currentDate) ||
                    (nStatus === "inactive" &&
                      new Date(item.date) <= currentDate)
                  : true
              )
              .map((post) => (
                <div key={post.$id} className="p-2 w-1/3">
                  <PostCard {...post} />
                </div>
              ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default SinGame;
