import styles from './Card.module.scss'

function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.card__imageBox}>
            <img src='' alt='' className={styles.card__imageBox__image} />{' '}
        </div>
        <div className={styles.card__infoBox}>
            <div className={styles.card__infoBox__row}>
                <div className={styles.label}>작성자</div>
                <div className={styles.value}>값</div>
            </div>
            <div className={styles.card__infoBox__row}>
                <div className={styles.label}>이미지 크기</div>
                <div className={styles.value}>값</div>
            </div>
            <div className={styles.card__infoBox__row}>
                <div className={styles.label}>업로드 날짜</div>
                <div className={styles.value}>값</div>
            </div>
            <div className={styles.card__infoBox__row}>
                <div className={styles.label}>마지막 업데이트</div>
                <div className={styles.value}>값</div>
            </div>
            <div className={styles.card__infoBox__row}>
                <div className={styles.label}>다운로드 수</div>
                <div className={styles.value}>값</div>
            </div>
        </div>
    </div>
  )
}

export default Card