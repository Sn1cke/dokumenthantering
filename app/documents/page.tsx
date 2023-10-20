"use client";
import Link from "next/link";
import { Document } from "@/interfaces";
import { HiDocumentText } from "react-icons/hi";
import dbQuery from "@/lib/db";
import { useEffect, useState } from "react";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const getDocumentsData = async () => {
      const result = await fetch("/api");
      const documentsFromAPI = await result.json();
      setDocuments(documentsFromAPI);
    };
    getDocumentsData();
  }, []);

  const documentsData = documents.map((document: Document) => {
    const truncatedContent =
      document.content.length > 25
        ? `${document.content.substring(0, 35)}...`
        : document.content;

    return (
      <tr key={`document-${document.id}`} className="hover">
        <td className="flex gap-2 items-center">
          <HiDocumentText className="h-8 w-8 text-secondary" />
          <Link href={`/documents/${document.id}`}>{document.title}</Link>
        </td>

        <td className="hidden md:table-cell">{truncatedContent}</td>
        <td className="hidden sm:table-cell">{document.author}</td>
        <td>{document.dateCreated}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="container mx-auto p-4 mb-16 mt-8">
        <h2 className="text-xl font-bold text-secondary">Documents</h2>
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
      </div>
    </div>
  );
}
