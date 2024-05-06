import { ProductsProps } from "@/interfaces/products";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductReviews(params: ProductsProps) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (Number(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <>
      <h1>
        Product {params.productId} Reviews {params.reviewId}
      </h1>

      <article>
        <h5>Lorem ipsum dolor</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          minima labore eius consequuntur veritatis repellendus quod maiores
          fuga officiis facilis, sit quidem qui unde illo reiciendis, placeat
          quam. Ad, voluptatem?
        </p>
        <small>SS</small>
      </article>
      <article>
        <h5>Lorem ipsum dolor</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          minima labore eius consequuntur veritatis repellendus quod maiores
          fuga officiis facilis, sit quidem qui unde illo reiciendis, placeat
          quam. Ad, voluptatem?
        </p>
        <small>A+</small>
      </article>
    </>
  );
}
