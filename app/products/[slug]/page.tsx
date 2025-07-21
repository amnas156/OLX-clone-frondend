import { auth } from "@/auth";
import Header from "@/components/navbar/Header";
import ProductInfo from "@/components/productDetail/ProductInfo";
import { getProduct } from "@/lib/api";


const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProduct(params.slug);
  const session = await auth();
  const userToken = session?.user?.email;

  return (
    <>
      <Header/>
      <ProductInfo userToken={userToken!} product={product} />
    </>
  );
};

export default ProductPage;
