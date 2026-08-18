function RenderBagArticle({ cartItems, addItem, removeItem, style }) {
  return (
    <section className={style.itemsSection} aria-label="Cart items">
      {cartItems.map((item) => (
        <article className={style.article} key={item.id}>
          <figure>
            <img src={item.image} alt={item.title} />
            <figcaption>{item.title}</figcaption>
          </figure>

          <section className={style.details} aria-label="Product controls">
            <div className={style.quantity}>
              <button
                type="button"
                onClick={() => removeItem(item)}
                aria-label="Decrease quantity"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                type="button"
                onClick={() => addItem(item)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <p className={style.price}>{item.cost} €</p>
          </section>
        </article>
      ))}
    </section>
  );
}
export default RenderBagArticle;
