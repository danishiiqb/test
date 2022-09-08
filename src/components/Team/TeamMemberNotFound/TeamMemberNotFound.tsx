import React from 'react'
import styles from "./TeamMemberNotFound.module.css"

function TeamMemberNotFound() {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>Team member not found.</div>
        <span className={styles.message}>Maybe she/he is not yet in your team?</span>
    </div>
  )
}

export default TeamMemberNotFound