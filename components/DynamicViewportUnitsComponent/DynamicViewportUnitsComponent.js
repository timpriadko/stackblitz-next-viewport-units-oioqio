import styles from './DynamicViewportUnitsComponent.module.css';

export default function DynamicViewportUnitsComponent() {
  return (
    <>
      <div className={`${styles.block} ${styles.block__sv}`}></div>
      <div className={`${styles.block}  ${styles.block__lv}`}></div>
      <div className={`${styles.block}  ${styles.block__dv}`}></div>
    </>
  );
}
