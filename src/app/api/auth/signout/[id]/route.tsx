import ConnectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { isValidObjectId } from "mongoose";
import { cookies } from "next/headers";

export async function generateStaticParams() {
  await ConnectToDB();
  
  const users = await UserModel.find({}, '_id'); // Only fetching the '_id' field
  const paths = users.map((user) => ({
    params: { id: user._id.toString() },
  }));
  
  return paths;
}

export async function POST(req: any, { params }: any) {
  await ConnectToDB();
  try {
    const { id } = params;
    
    // Validate ObjectId
    if (!id || !isValidObjectId(id)) {
      return Response.json({ message: "ID is not valid or missing!" }, { status: 409 });
    }

    // Find the user
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      return Response.json({ message: "User not found!" }, { status: 404 });
    }

    // Delete token cookie
    cookies().delete("token");

    return Response.json({ message: "User logged out successfully" }, { status: 200 });
  } catch (err) {
    console.error("Database operation failed:", err); // Log error details
    return Response.json({ message: process.env.serverError || "An error occurred." }, { status: 500 });
  }
}

