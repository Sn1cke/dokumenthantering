import { Document } from "@/interfaces";

const documents: Document[] = [
  {
    id: 1,
    title: "Survey planning",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam modi autem eligendi, eveniet fugiat!",
    bgColor: "#10c23f",
  },
  {
    id: 2,
    title: "Planning list",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium natus quidem dignissimos. Et vitae perferendis provident eius eveniet minima unde perspiciatis.",
    bgColor: "#10c23f",
  },
  {
    id: 3,
    title: "Cars to purchase",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    textColor: "#c2105d",
  },
  {
    id: 4,
    title: "Whispers of the Heart",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    textColor: "#c2105d",
  },
  {
    id: 5,
    title: "Lost in the Stars",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    textColor: "#c2105d",
  },
  {
    id: 6,
    title: "Eternal Flame Rekindled",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    textColor: "#c2105d",
  },
  {
    id: 7,
    title: "Echoes of Forgotten Dreams",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    textColor: "#c2105d",
  },
  {
    id: 8,
    title: "Waves of Silent Emotion",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    textColor: "#c2105d",
  },
  {
    id: 9,
    title: "Beneath the Midnight Sky",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    textColor: "#c2105d",
  },
  {
    id: 10,
    title: "Shadow of my Wings",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    textColor: "#c2105d",
  },
];

export default function DocumentsPage() {
  return (
    <div className="container mx-auto p-4">
      {documents.map((document: Document, index) => {
        return (
          <div key={`document-${index}`}>
            <h1>{document.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
