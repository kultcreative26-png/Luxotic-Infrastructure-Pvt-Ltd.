import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | LUXOTIC Infrastructure",
    };
  }

  return {
    title: `${project.name} | LUXOTIC Infrastructure`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | LUXOTIC Infrastructure`,
      description: project.shortDescription,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
