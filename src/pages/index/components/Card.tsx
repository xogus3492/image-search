import styles from './Card.module.scss'
import { CardDTO } from '../types/card'

interface Props { // props : 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할때 사용
  data: CardDTO
  handleDialog: (eventValue: boolean) => void
}

function Card({ data, handleDialog }: Props) {
const openDialog = () => {
    console.log('함수호출')
    handleDialog(true)
}

  return (
    <div className={styles.card} onClick={openDialog}>
        <img src={data.urls.small} alt={data.alt_description} className={styles.card__image} />
    </div>
  )
}

export default Card