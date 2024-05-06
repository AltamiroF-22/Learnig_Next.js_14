import { Metadata } from "next";
interface Props {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    resolve(`iPhone ${params.productId}`);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h1>Product Details {params.productId}</h1>
    </>
  );
}
