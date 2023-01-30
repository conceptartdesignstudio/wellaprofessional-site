import styles from '../../styles/Group.module.css'
import Image from 'next/image'

export const GroupHeader = ({ groupImage, groupName, colors }) => {
  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: colors.backgroundColor }}
      >
        <div className={styles.groupInfos}>
          {groupImage && (
            <Image
              src={groupImage}
              alt="Product Image"
              width={150}
              height={150}
              priority
            />
          )}
          {groupName && (
            <h1
              className="groupName"
              style={{ color: colors.textColor }}
              dangerouslySetInnerHTML={{ __html: groupName }}
            ></h1>
          )}
        </div>
      </div>
    </>
  )
}
