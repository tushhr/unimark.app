import { SearchFilterForm } from "@/features/search/search-filter-form";
import { trpc } from "@/shared/trpc";
import { Outlet, useParams } from "react-router-dom";

export function CollectionLayout() {
  const params = useParams();
  const { data: collections } = trpc.collections.list.useQuery();

  const collection = collections?.find((c) => c.id === params.collection_id);
  const title = params.collection_id ? collection?.name : "All Bookmarks";

  return (
    <div className="">
      <div className="border-b flex items-center justify-between py-[22px] px-8">
        <h1 className="text-lg font-medium tracking-tight capitalize">
          {title ?? (
            <div className="h-4 w-40 rounded-md bg-muted/75 animate-pulse"></div>
          )}
        </h1>
        <SearchFilterForm />
      </div>
      <div className="p-8 space-y-8">
        <Outlet />
      </div>
    </div>
  );
}
