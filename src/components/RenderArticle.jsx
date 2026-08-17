function RenderArticle({ products, style, addItem, cartItems, removeItem }) {
  return (
    <>
      {products.map((product) => {
        const inCart = cartItems.find((item) => item.id === product.id);

        return (
          <article className={style.productCard} key={product.id}>
            <figure>
              <img src={product.image} alt={product.title} />
              <figcaption>
                <h2 className={style.title}>{product.title}</h2>
                <p className={style.price}>{product.price} €</p>
              </figcaption>
            </figure>

            <section className={style.actions}>
              {inCart ? (
                <div className={style.quantityControls}>
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => removeItem(product)}
                  >
                    −
                  </button>

                  <p className={style.quantityDisplay}>{inCart.quantity}</p>

                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => addItem(product)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className={style.addBtn}
                  onClick={() => addItem(product)}
                >
                  Add to cart
                </button>
              )}
            </section>
          </article>
        );
      })}
    </>
  );
}

export default RenderArticle;
