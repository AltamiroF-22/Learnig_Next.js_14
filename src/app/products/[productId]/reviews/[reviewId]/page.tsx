export default function ProductReviews({
  params,
}: {
  params: {
    reviewId: string;
  };
}) {
  return (
    <>
      <h1>Product Reviews {params.reviewId}</h1>

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
