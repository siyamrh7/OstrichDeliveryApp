import React from 'react'
import styles from './CloseHeader.module.css'
import { useNavigate } from 'react-router-dom'
const CloseHeader = ({text}) => {
    const navigate=useNavigate()
    const goBack=()=>{
      navigate(-1)
    }
  return (
    <div className={styles.titleTopSubTitle1}>
    <img onClick={goBack} className={styles.iconlyregularlightarrowD} alt="" src="/x.svg" />
    <div className={styles.lorem1}>{text} </div>
  </div>
  )
}

export default CloseHeader