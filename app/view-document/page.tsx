"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Document } from "@/interfaces";

export default function CreateDocument() {
  const router = useRouter();
  const [documentData, setDocumentData] = useState<Document | undefined>(
    undefined
  );

  const searchParams = useSearchParams();
  const documentID = searchParams.get("id");
  useEffect(() => {
    const getDocument = async () => {
      const res = await fetch(`documents/${documentID}`);
      const data = await res.json();
      setDocumentData(data[0]);
    };
    if (documentID) getDocument();
  }, []);

  const renderHTML = (htmlString: string | undefined) => {
    return { __html: htmlString || "" };
  };

  const handleDelete = async () => {
    const res = await fetch(`documents/${documentID}`, {
      method: "DELETE",
    });
  };

  const handleEdit = () => {
    router.push("/edit-document/?id=" + documentID);
  };

  return (
    <div className="container mx-auto p-4 mb-16 mt-8">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-2">
          {documentData?.title}
        </h2>
        <div
          className="flex flex-col"
          dangerouslySetInnerHTML={renderHTML(documentData?.textStyling)}
        />
        <div className="flex gap-4 justify-end mt-4">
          <button
            className="btn btn-secondary self-end mt-3"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
          <button
            onClick={() => handleEdit()}
            className="btn btn-secondary self-end mt-3"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
