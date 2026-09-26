import type { Metadata } from "next";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Продукция — Caspi Polymer",
  description:
    "FFS, стретч-худ, парниковая, термоусадочная, мульчирующая и техническая плёнка: модели, толщина и ширина. Цены по запросу.",
};

export default function ProductsPage() {
  return <ProductCatalog />;
}
