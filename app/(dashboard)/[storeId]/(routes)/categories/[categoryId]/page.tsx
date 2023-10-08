import prismadb from '@/lib/prismadb';
import { CategoryForm } from './components/category-form';
// import { BillboardForm } from '.';

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; billboardId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className="flex-col6">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
