import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed residential, commercial, and construction projects by AK Builders in Chennai and across South India.",
};

export default function ProjectsLayout({
  children,
  modal,
}: LayoutProps<"/projects">) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
