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

  const confirmDelete = async () => {
    const res = await fetch(`documents/${documentID}`, {
      method: "DELETE",
    });
    router.push("/documents");
  };

  const handleEdit = () => {
    router.push("/edit-document/?id=" + documentID);
  };

  const modalDelete = (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl">Deleting document</h3>
        <p className="py-4">
          Are you sure you wish to delete{" "}
          <span className="font-semibold">{documentData?.title}</span>?
        </p>
        <div className="text-center">
          <form method="dialog">
            <button
              onClick={() => confirmDelete()}
              className="btn btn-accent text-white"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );

  return (
    <div className="container mx-auto p-4 mb-16 mt-8">
      {documentData ? (
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
              className="btn btn-accent text-white self-end mt-3"
              onClick={() => {
                const modal = document?.getElementById(
                  "my_modal_3"
                ) as HTMLDialogElement | null;
                if (modal) {
                  modal.showModal();
                }
              }}
            >
              Delete
            </button>
            {modalDelete}
            <button
              onClick={() => handleEdit()}
              className="btn btn-secondary self-end mt-3"
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex justify-center py-4 gap-4">
          <span className="loading loading-spinner loading-md"></span>{" "}
          <span>Loading document...</span>
        </div>
      )}
    </div>
  );
}
