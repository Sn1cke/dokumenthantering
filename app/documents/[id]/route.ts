import dbQuery from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const result = await dbQuery({
    sql: "SELECT * FROM documents where id = " + parseInt(id),
    values: [],
  });
  console.log(result);
  return NextResponse.json(result);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();
  const { title, content, textStyling } = body;
  console.log("Received PATCH request:", { id, title, content, textStyling });

  const result = await dbQuery({
    sql:
      "UPDATE documents SET title=?, content=?, textStyling=? WHERE id=" +
      parseInt(id),
    values: [title, content, textStyling],
  });
  return NextResponse.json(result, { status: 200 });
}
