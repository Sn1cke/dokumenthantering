import React from "react";

export default function SingleDocument({ params }: { params: { id: number } }) {
  return (
    <div className="container mx-auto p-4">
      SingleDocument <span className="text-blue-300">{params.id}</span>
    </div>
  );
}
