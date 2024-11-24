import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div>
        <h1 className={styles.header}>
          Phonebook manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
