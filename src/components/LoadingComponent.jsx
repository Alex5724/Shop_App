import style from '../styles/LoadingComponent.module.css';

function Loading() {
  return (
    <main className={style.main}>
      <div className={style.loading}></div>
    </main>
  );
}

export default Loading;
