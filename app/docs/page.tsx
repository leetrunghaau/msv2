import ContentItem from "@/components/content/contentItem";
import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>
      <ContentItem title="Page" data={true} />
    </div>
  );
}
