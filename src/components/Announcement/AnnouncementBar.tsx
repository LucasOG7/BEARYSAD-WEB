import styles from './AnnouncementBar.module.css'

const messages = ['Envíos a todo el país', 'MAKECHILEANARTISTGREATAGAIN']
const text = messages.join(' • ')

export function AnnouncementBar() {
  return (
    <div className={styles.announcement}>
      <div className={styles.track}>{text} • {text}</div>
    </div>
  )
}
