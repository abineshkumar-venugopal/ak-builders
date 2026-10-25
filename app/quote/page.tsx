import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell AK Builders about your construction or renovation project in Chennai.",
};

export default function QuotePage() {
  redirect("/#contact");
}
