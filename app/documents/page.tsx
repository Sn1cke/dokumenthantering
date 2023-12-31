"use client";
import Link from "next/link";
import { Document } from "@/interfaces";
import { HiDocumentText } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([]);
  const router = useRouter();

  const viewDocument = (document: Document) => {
    router.push("/view-document/?id=" + document.id);
  };

  useEffect(() => {
    const getDocumentsData = async () => {
      const result = await fetch("/api/documents");
      const documentsFromAPI = await result.json();
      setDocuments(documentsFromAPI.reverse());
    };
    getDocumentsData();
  }, []);

  const documentsData = documents.map((document: Document) => {
    const truncatedContent =
      document.content.length > 25
        ? `${document.content.substring(0, 35)}...`
        : document.content;

    const formattedDate = format(new Date(document.dateCreated), "yyyy-MM-dd");

    return (
      <tr
        onClick={() => viewDocument(document)}
        key={`document-${document.id}`}
        className="hover"
      >
        <td className="flex gap-2 items-center font-semibold hover:cursor-pointer">
          <HiDocumentText className="h-8 w-8 text-secondary" />
          {document.title}
        </td>

        <td className="hidden md:table-cell">{truncatedContent}</td>
        <td className="hidden sm:table-cell font-medium">{document.author}</td>
        <td>{formattedDate}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="container mx-auto p-4 mb-16 mt-8">
        <h2 className="text-2xl font-bold text-secondary">Documents</h2>
        {documents ? (
          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Title</th>
                  <th className="hidden md:table-cell">Preview</th>
                  <th className="hidden sm:table-cell">Author</th>
                  <th>Date created</th>
                </tr>
              </thead>
              <tbody>{documentsData}</tbody>
            </table>
          </div>
        ) : (
          <div className="mx-auto flex flex-col justify-center items-center py-4 gap-4 max-w-md">
            <span className="text-lg">
              There doesn't seem to be anything here!
            </span>
            <Link href="/create">
              <button className="btn btn-secondary">Get started</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
