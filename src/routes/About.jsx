import styles from '~/styles/About.module.scss';

export default function About() {
  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.profile}>
        <img src="/assets/pic1.jpg" alt="" />
      </div>
      <div>tjehddnr997@gmail.com</div>
      <a href="https://github.com/foodeco" target="_blank" rel="noreferrer">
        github.com/foodeco
      </a>
      <div>+82-01-7126-6578</div>
    </div>
  );
}
