import style from '../styles/FilledBag.module.css';
import RenderBagArticle from './RenderBagArticle';

function FilledBag({ cartItems, addItem, removeItem }) {
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.cost, 0);
  const shipping = 3.99;
  const total = (subtotal + shipping).toFixed(2);

  return (
    <main className={style.main}>
      <RenderBagArticle
        cartItems={cartItems}
        addItem={addItem}
        removeItem={removeItem}
        style={style}
      />

      <div className={style.summaryWrapper}>
        <aside className={style.summary} aria-label="Order summary">
          <section className={style.breakdown} aria-label="Cost breakdown">
            <article className={style.itemCost}>
              <p>Subtotal</p>
              <p>{subtotal.toFixed(2)} €</p>
            </article>

            <article className={style.shippingCost}>
              <p>Shipping</p>
              <p>{shipping} €</p>
            </article>
          </section>

          <section className={style.total} aria-label="Total amount">
            <article className={style.totalCost}>
              <h3>Total</h3>
              <p>
                <strong>{total} €</strong>
              </p>
            </article>
          </section>
        </aside>

        <button className={style.payBtn} type="button">
          Pay
        </button>
      </div>
    </main>
  );
}

export default FilledBag;
