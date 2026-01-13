import styles from './AnnouncementBar.module.css'

const messages = ['Envíos a todo Chile', 'Welcome to Bearysad World']
const text = messages.join(' • ')

export function AnnouncementBar() {
  return (
    <div className={styles.announcement}>
      <div className={styles.track}>{text} • {text}</div>
    </div>
  )
}
