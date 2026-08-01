import Link from "next/link";
import styles from "./ActivitySupport.module.css";

export default function ActivitySupport() {
  return (
    <aside
      className={styles.card}
      aria-labelledby="activity-support-title"
    >
      <div className={styles.icon} aria-hidden="true">
        💛
      </div>

      <div className={styles.content}>
        <p className={styles.label}>Savanoriškas projekto palaikymas</p>

        <h2 id="activity-support-title">
          Padėk kurti daugiau nemokamų veiklų
        </h2>

        <p>
          Visos „Pasikartokim.lt“ veiklos yra ir liks nemokamos.
          Savanoriškas projekto palaikymas padeda kurti naujas užduotis ir
          prižiūrėti svetainę.
        </p>

        <Link className={styles.button} href="/palaikyti-projekta">
          Palaikyti projektą
        </Link>
      </div>
    </aside>
  );
}