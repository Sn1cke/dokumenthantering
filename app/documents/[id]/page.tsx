import React from "react";

export default function SingleDocument({ params }: { params: { id: number } }) {
  return (
    <div className="container mx-auto p-4">SingleDocument {params.id}</div>
  );
}
