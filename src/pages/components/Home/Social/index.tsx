import styles from './styles.module.css';

export default function Social() {
  return (
    <div className={styles.social}>
      <img
        className={styles.icon}
        src='/images/GithubLogo.svg'
        alt='Logo GitHub'
      />
      <img
        className={styles.icon}
        src='/images/TelegramLogo.svg'
        alt='Logo GitHub'
      />
      <img
        className={styles.icon}
        src='/images/DiscordLogo.svg'
        alt='Logo GitHub'
      />
    </div>
  );
}
