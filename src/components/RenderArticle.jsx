function RenderArticle({ products, style }) {
  return (
    <>
      {products.map((product) => (
        <article className={style.productCard} key={product.id}>
          <figure>
            <img src={product.image} alt={product.title} />
            <figcaption>
              <span>{product.title}</span>
              <span className={style.price}>{product.price} €</span>
            </figcaption>
          </figure>

          <button type="button" className={style.addBtn}>
            Add to cart
          </button>
        </article>
      ))}
    </>
  );
}

export default RenderArticle;
