import { NextResponse } from "next/server";
import { subscriptions } from "@/utils/store";

export async function POST(req: Request) {
  try {
    const subscription = await req.json();
    if (!subscription || !subscription.endpoint) return NextResponse.json({ error: "Invalid data" }, { status: 400 });

    const exists = subscriptions.some((sub) => sub.endpoint === subscription.endpoint);
    if (!exists) subscriptions.push(subscription);

    return NextResponse.json({ success: true, count: subscriptions.length });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}