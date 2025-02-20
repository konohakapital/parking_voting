"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import CommentsSection from "../../components/CommentsSection";
import VotingSection from "../../components/VotingSection";

const VotingPage = () => {
  const { votingSectionId } = useParams(); 

  const [comments, setComments] = useState<{ user: string; text: string; time: string }[]>([]);

  const addComment = (comment: { user: string; text: string; time: string }) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  type VotingSectionType = "radio" | "slider" | "toggle" | "checkbox";

  const votingSections: { [key: string]: { title: string; description: string; options: string[]; type: VotingSectionType } } = {
    "truck-parking": {
      title: "Truck Parking",
      description: "Vote on the number of truck parking spaces and their layout.",
      options: ["100 Parallel Spaces", "150 Angled Spaces", "200 Mixed Layout"],
      type: "radio",
    },
    "fueling-stations": {
      title: "Fueling Stations",
      description: "Choose the types of fueling stations to include.",
      options: ["Diesel Only", "Diesel & Electric", "Diesel, Electric & Natural Gas"],
      type: "radio",
    },
  };

  const section = votingSections[votingSectionId as keyof typeof votingSections];

  if (!section) {
    return <p>Voting section not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Join the Discussion: {section.title}</h1>
        <VotingSection title={section.title} description={section.description} options={section.options} type={section.type} />

        <CommentsSection title={section.title} comments={comments} onAddComment={addComment} />

        <div className="mt-8 text-center">
          <p className="text-lg">Make your voice heard! Leave a comment below.</p>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
