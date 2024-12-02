import styles from "./Cover.module.scss"

export default function Cover() {
  return (
    <section className={`${styles.section} xsection`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.frame} title3`}>
          <p>Supermanifold</p>
          <p>
            Intelligent products for cozy living
            <span className={`${styles.highlight}`}>*</span>.
          </p>
          <p>Designed and manufactured in Montréal, Canada.</p>
        </div>
      </div>
    </section>
  )
}
