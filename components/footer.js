import styles from "./footer.module.css"

export default function Footer({children}) {
    return (
        <div className={styles.footer}>
            <p className={styles.footerText}>{children}</p>
        </div>
    )
}