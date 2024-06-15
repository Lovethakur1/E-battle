import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Carousel, Container, PostCard } from "../components";
import { Link } from "react-router-dom";


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
        <div className="w-full py-8 mt-4 text-center " >
        <Container>
          <div className="flex flex-wrap bg-black rounded-lg" style={{ backgroundImage: "('pic/tour/240_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV-transformed.jpeg')" }}>
            <div className="p-2 w-full">
              <div className="text-center p-4">
                
                <div class="container mx-auto py-8 text-white text-2xl text-center">
    <h1 class="text-4xl font-bold mb-4">🎮 Join the Ultimate Gaming Arena at E-BATTLE! 🚀</h1>

    <p class="text-lg mb-8">
      Attention, fellow gamers! Are you ready to embark on a journey of epic battles, thrilling competitions, and non-stop gaming action? E-BATTLE, the premier online tournament platform, invites you to step into the virtual battleground and showcase your gaming prowess.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      <div class="col-span-2 lg:col-span-4 mb-8">
        <h2 class="text-2xl font-bold mb-4">🔥 Why E-BATTLE?</h2>
        <ul class="list-disc list-inside">
          <li><strong>✨ Unleash Your Skills:</strong> Compete against the best in the gaming community and prove your mettle in a variety of exhilarating tournaments.</li>
          <li><strong>✨ Diverse Games:</strong> Whether you're into FPS, MOBA, or strategy games, we've got tournaments for every gaming enthusiast.</li>
          <li><strong>✨ Exciting Prizes:</strong> Win awesome prizes, exclusive in-game items, and, of course, the bragging rights that come with being a champion.</li>
          <li><strong>✨ Connect with Gamers:</strong> Join a thriving community of like-minded gamers who share your passion for gaming. Forge new friendships, discuss strategies, and celebrate victories together.</li>
        </ul>
      </div>

      
      <div class="col-span-1 lg:col-span-4">
        <h2 class="text-2xl font-bold mb-4">🎉 Calling All Gamers - Your Mission Awaits! 🚀</h2>
        <p class="mb-4">Gear up, grab your controllers, and get ready to immerse yourself in the ultimate gaming experience. E-BATTLE is not just a tournament; it's an adventure waiting to unfold. Your victories are just a login away!</p>
        <Link  to="login" class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-600">👉 Login Now: E-BATTLE</Link>
      </div>
    </div>

    <div class="mt-8">
      <p class="mb-4">Become a Legend. Play at E-BATTLE. 🏆</p>
    </div>

  </div>

              </div>
            </div>
          </div>
        </Container>
      </div>
      
    );
  }
  return (
    <>
      <Carousel />
      <div className="w-full ">
        <div className="text-center p-4 " >
            <button className="text-3xl text-white text-center font-bold bg-black rounded-xl  p-2  ">
                <h1  >
            TOURNAMENT
          </h1>
            </button>

          
        </div>

        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
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

export default Home;
