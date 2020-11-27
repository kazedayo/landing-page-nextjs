import styles from "./footer.module.css"

export default function Footer({text}) {
    return (
        <div className={styles.footer}>
            <p className={styles.footerText}>{text}</p>
        </div>
    )
}