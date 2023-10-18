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
];

export default function DocumentsPage() {
  return (
    <div className="container mx-auto p-4">
      {documents.map((document: Document) => {
        return (
          <div>
            <h1>{document.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
