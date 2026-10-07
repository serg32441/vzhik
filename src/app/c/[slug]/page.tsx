import { notFound } from "next/navigation";
import { CategoryScreen } from "@/components/catalog/CategoryScreen";
import { homeCategories } from "@/content/catalog";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = homeCategories.find((item) => item.id === slug);

  if (!category) {
    notFound();
  }

  return <CategoryScreen categoryId={category.id} />;
}
