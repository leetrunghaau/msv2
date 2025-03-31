
import Banner from "@/components/banner/banner";
import ContentList from "@/components/content/contentList";
import { title, subtitle } from "@/components/primitives";
import ProductListItem from "@/components/product/productItem";
import ProductList from "@/components/product/productList";
import products from "@/data/product";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { cn } from "@heroui/theme";

export default function Home() {
  return (
    <div className={cn("flex flex-col items-center justify-start gap-4 py-8 md:py-10")}>
      <Banner />
      <ProductList title="Sản phẩm mới" data={products} />
      <ProductList title="Sản phẩm phổ biến" data={products} />
      <ProductList title="Sản phẩm bán chạy" data={products} />
      <ContentList title="Bài viết" data={["abc", "abc", "abc", "abc", "abc", "abc","abc", "abc", "abc", "abc", "abc", "abc",]} />
    </div>

  )
}
