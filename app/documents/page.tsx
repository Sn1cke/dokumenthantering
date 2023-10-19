import Link from "next/link";
import { Document } from "@/interfaces";
import { HiDocumentText } from "react-icons/hi";

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
const dateCreated = [currentYear, currentMonth, currentDay].join("/");

const documents: Document[] = [
  {
    id: 1,
    title: "Survey planning",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam modi autem eligendi, eveniet fugiat!",
    author: "Benny Benknäckare",
    dateCreated: dateCreated,
  },
  {
    id: 2,
    title: "Planning list",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium natus quidem dignissimos. Et vitae perferendis provident eius eveniet minima unde perspiciatis.",

    author: "Adam Bodybuilder",
    dateCreated: dateCreated,
  },
  {
    id: 3,
    title: "Cars to purchase",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",

    author: "Richard Rik",
    dateCreated: dateCreated,
  },
  {
    id: 4,
    title: "Whispers of the Heart",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    author: "Niclas Broberg",
    dateCreated: dateCreated,
  },
  {
    id: 5,
    title: "Lost in the Stars",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    author: "Anton Lusläs",
    dateCreated: dateCreated,
  },
  {
    id: 6,
    title: "Eternal Flame Rekindled",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    author: "Emma Enbärsdottir",
    dateCreated: dateCreated,
  },
  {
    id: 7,
    title: "Echoes of Forgotten Dreams",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    author: "Maik Seql",
    dateCreated: dateCreated,
  },
  {
    id: 8,
    title: "Waves of Silent Emotion",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    author: "Testo Dokuso",
    dateCreated: dateCreated,
  },
  {
    id: 9,
    title: "Beneath the Midnight Sky",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    author: "Benny Dokument",
    dateCreated: dateCreated,
  },
  {
    id: 10,
    title: "Shadow of my Wings",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam amet dicta maiores iusto cum?",
    author: "Benny Dokument",
    dateCreated: dateCreated,
  },
];

export default function DocumentsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Title</th>
              <th className="hidden md:table-cell">Preview</th>
              <th className="hidden sm:table-cell">Author</th>
              <th>Date created</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document: Document) => {
              const truncatedContent =
                document.content.length > 25
                  ? `${document.content.substring(0, 35)}...`
                  : document.content;

              return (
                <tr key={`document-${document.id}`} className="hover">
                  <Link href={`/documents/${document.id}`}>
                    <td className="flex gap-2 items-center">
                      <HiDocumentText className="h-8 w-8 text-secondary" />
                      {document.title}
                    </td>
                  </Link>

                  <td className="hidden md:table-cell">{truncatedContent}</td>
                  <td className="hidden sm:table-cell">{document.author}</td>
                  <td>{document.dateCreated}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
