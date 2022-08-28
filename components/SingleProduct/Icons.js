import styles from '../../styles/Product.module.css'

export const Icons = ({ colors, icons }) => {
  return (
    <>
      <div className={styles.productIcons}>
        <ul key="newIcons">
          {icons.eac ? (
            <li key="eac">
              <svg
                version="1.1"
                id="Layer_1"
                viewBox="0 0 425.2 425.2"
                enableBackground="new 0 0 425.2 425.2"
                width="35px"
                height="35px"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill={colors.informativeColor}
                  d="M132.1,211.2h20.8v20.8h-20.8v62.5h20.8v20.8h-41.7V127.8h41.7v20.9h-20.8V211.2z M215.5,232.1v83.4h20.9
	V127.8h-62.5v187.6h20.8v-83.4H215.5z M215.5,211.2h-20.8v-62.5h20.8V211.2z M278,148.7h20.8v-20.9h-41.7v187.6h41.7v-20.8H278
	V148.7z"
                />
              </svg>
            </li>
          ) : null}
          {icons.reciclagem ? (
            <li key="reciclagem">
              <svg
                version="1.1"
                id="Layer_1"
                viewBox="0 0 425.2 425.2"
                enableBackground="new 0 0 425.2 425.2"
                width="35px"
                height="35px"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={colors.informativeColor}
                  d="M106.8,192.1l48.2-0.2l23.7,42.4c0,0-12.3-7.2-12.9-7.6
	c-3.5-2-3.5-2-6,2.5c-1.3,2.3-12.6,22.3-12.6,22.3H137c-12.3,0-32.9-18.2-23.2-33.1c-0.1-0.1,6.8-12.1,6.8-12.1
	c2.6-4.6,2.6-4.5-0.4-6.3C116.7,198.1,106.8,192.1,106.8,192.1z"
                />
                <path
                  fill={colors.informativeColor}
                  d="M147.1,251.5c0,0,49.3,0,50.6,0c2.2,0,3.9,0.8,3.9,3.6v38.2c0,2.5-1.2,3.6-4,3.6H159
	c-2.8,0-9.3-0.8-13.6-8.1c-4.3-7.3-29.8-50-29.8-50L147.1,251.5z"
                />
                <path
                  fill={colors.informativeColor}
                  d="M231.7,129.9c3.3,0,12.4-1.6,18.5,9c0.1,0,6.8,12,6.8,12c2.6,4.6,2.6,4.6,5.6,2.9c3.6-2,13.8-7.4,13.8-7.4
	l-24.6,41.4l-48.6-1.6l13.2-7.2c3.5-1.9,3.5-1.9,0.9-6.5c-1.3-2.4-16.8-29.3-16.8-29.3s-6.8-13.2-16.1-13.5L231.7,129.9z"
                />
                <path
                  fill={colors.informativeColor}
                  d="M204.6,150.5c0,0-25.3,42.1-26,43.2c-1.2,2-2.7,3-5.1,1.5c-3.9-2.3-31.5-18.9-32.7-19.7
	c-2.1-1.3-2.5-2.9-1-5.3c1.6-2.7,18.5-30.7,19.9-33.1c1.4-2.4,5.5-7.6,13.9-7.5c8.4,0.1,58.2,0.2,58.2,0.2L204.6,150.5z"
                />
                <path
                  fill={colors.informativeColor}
                  d="M269.3,285.1c-1.6,2.8-4.6,11.6-16.8,11.8c-0.1,0.1-13.9,0.1-13.9,0.1c-5.3,0-5.3,0-5.2,3.5
	c0,4.1-0.2,15.6-0.2,15.6l-24.3-41.6l24.9-41.7l-0.1,15c0,4,0,4,5.2,4c2.7,0,33.8-0.4,33.8-0.4s14.9,0.4,19.6-7.5L269.3,285.1z"
                />
                <path
                  fill={colors.informativeColor}
                  d="M264.4,251.3c0,0-24.5-42.5-25.2-43.6c-1.1-2-1.3-3.8,1.2-5.2c3.9-2.3,31.8-18.4,33.1-19.1
	c2.2-1.2,3.7-0.8,5.1,1.7c1.6,2.7,17.9,31,19.3,33.4c1.4,2.5,3.9,8.5-0.2,15.8c-4.1,7.4-28.4,50.8-28.4,50.8L264.4,251.3z"
                />
              </svg>
            </li>
          ) : null}
          {icons.retornavel ? (
            <li key="retornavel">
              <svg
                version="1.1"
                id="Layer_1"
                viewBox="0 0 425.2 425.2"
                enableBackground="new 0 0 425.2 425.2"
                width="35px"
                height="35px"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.4252"
                  strokeMiterlimit="10"
                  cx="196.5"
                  cy="213.1"
                  r="81.1"
                />
                <path
                  fill={colors.informativeColor}
                  d="M295.6,171.9c-11.2,0-20.3-9.1-20.3-20.3c0-11.2,9.1-20.2,20.3-20.2c11.2,0,20.3,9.1,20.3,20.2
	C315.9,162.8,306.8,171.9,295.6,171.9z M295.6,135.1c-9,0-16.2,7.4-16.2,16.5c0,9.1,7.3,16.5,16.2,16.5c9,0,16.2-7.4,16.2-16.5
	C311.9,142.5,304.6,135.1,295.6,135.1z M305.9,162.3h-4.8l-4-7.8h-5.4v7.7h-4.2v-22.3h10.7c4.7,0,7.7,2.9,7.7,7.3
	c0,3.2-1.8,5.8-4.6,6.8L305.9,162.3z M298.2,150.3c1.7,0,3.5-0.9,3.5-3.4c0-2.5-1.3-3.4-3.5-3.4h-6.6v6.8
	C294,150.3,298.2,150.3,298.2,150.3z"
                />
                <path
                  fill={colors.informativeColor}
                  d="M135,266.2c14.9,17.2,36.9,28.1,61.5,28.1c24.6,0,46.5-10.9,61.4-28.1c12.3-14.3,19.8-32.8,19.8-53.2
	c0-44.9-36.4-81.3-81.3-81.3c-44.9,0-81.3,36.4-81.3,81.3C115.2,233.4,122.7,252,135,266.2z M196.8,158.6l0.1-22.8
	c12.7,6.4,33.7,21.9,41,43.3c-5.9,19.6-25.5,37.4-40.6,44.3v-22.3c-12.3,4.1-37.8,29.6-39.2,42.8c3.1,14.1,28.2,38.7,38.7,41.4
	c0,0-0.3-20,0-20.9c42.9,0,64.7-40.1,64.5-64.7c0-24.4-9.7-47.1-30.4-58.8c26.9,12.9,45.6,40.4,45.6,72.3c0,44.2-35.8,80.1-80,80.1
	c-1.9,0-3.8-0.1-5.6-0.2C110.4,280.1,120.3,165,196.8,158.6z"
                />
              </svg>
            </li>
          ) : null}
          {icons.book ? (
            <li key="book">
              <svg
                version="1.1"
                id="Layer_1"
                style={{ fill: colors.informativeColor }}
                className="book"
                width="35px"
                height="35px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 425.2 425.2"
              >
                <polygon
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  points="209.6,149.9 138.8,178.8 138.8,278.2 209.6,236.8"
                />
                <polygon
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  points="209.6,236.8 256.3,281.9 256.3,194.7 209.6,149.9"
                />
                <polygon
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={colors.informativeColor}
                  points="217.3,173.2 247.5,202.3 247.5,229.2 217.3,198.5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={colors.informativeColor}
                  d="M202.7,310.3c0,0,0-6.8,0-11.6c0-4.8,18.1-30.5,29-50.1
                  c4.8-8.7-2.3-14.4-8.2-5.3c-5.3,8.3-5.4,9-12.7,19.1c-2.4,3.3-8.1,2.1-8.1-4.2v-48.7c0-7.7-9.1-8.3-9.1,0.5v41
                  c0,3.1-5.8,3.5-5.8-0.4c0-3.3,0-8.3,0-13.8c0-5.7-8-5.7-8,0V251c0,3.2-5.4,3.2-5.4,0v-14.2c0-6-8-5.9-8,0V251c0,3.2-5.4,3.2-5.4,0
                  v-14.2c0-5.7-7.6-5.7-7.6,0c0,0,0,34.9,0,41c0,5.1,7.6,14.5,7.6,18.4c0,3.9,0,14.1,0,14.1H202.7z"
                />
                <line
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  x1="151"
                  y1="197"
                  x2="197.9"
                  y2="174"
                />
                <line
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  x1="151"
                  y1="208.7"
                  x2="197.9"
                  y2="184"
                />
                <line
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  x1="151"
                  y1="219.8"
                  x2="197.9"
                  y2="195.1"
                />
                <polyline
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  points="209.6,236.8 209.6,145.9 127.7,165.7 127.7,263 132.9,261.3"
                />
                <polyline
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  points="209.6,236.8 209.6,148.3 133,173 133,271.2 138.7,268.6"
                />
                <polyline
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  points="266.3,260.4 272.7,263 272.7,182 209.6,145.9 209.6,237.1"
                />
                <polyline
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  points="209.6,236.8 209.6,148.3 266.2,187.2 266.2,270.7 261.1,268"
                />
                <polyline
                  fill="none"
                  stroke={colors.informativeColor}
                  strokeWidth="0.2835"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="3.864"
                  points="209.6,148.3 261.1,191.2 261.1,276.7 256.3,272.7"
                />
              </svg>
            </li>
          ) : null}
          {icons.descartavel ? (
            <li key="descartavel">
              <svg
                version="1.1"
                id="Layer_1"
                viewBox="0 0 425.2 425.2"
                enableBackground="new 0 0 425.2 425.2"
                width="35px"
                height="35px"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill={colors.informativeColor}
                  d="M215.8,164.9c0.2-1.1-20.3-3.4-22-3.6c-1.5-0.1-7.1,0.2-7.3-0.1c-1-1.6-3.6-1.6-4.7-1
	c-0.4,0.3-2.2,5.4-2.2,5.4c-3.1,5.8-10.2,10.5-10.6,10.7c-0.2,5.9,8.6,2.8,9.1,3.7c0.9,0.8,8.1,0.4,13.7-1c3.1-0.2,8.7-0.2,9.2-0.1
	C204.5,172.6,216,166,215.8,164.9z M217.7,156.6c1.5,1,7.4,0.5,7,2.4c0.5,1.8-0.3,4.9-1.1,5.8c-1.6,2.6-4.8,5-7.5,7.7
	c-3.4,3.2-6.3,6.6-7.4,6.8c-0.3,0.1-1.7,1.5-1.7,2c-0.1,1,1.3,3-0.6,4.7c-0.8,0-5.1-1.3-10.5-0.9c-9.6,2.2-22,3-23.6,1.6
	c-0.8-1.5-13.8-1.4-13.4-11.6c0.6-0.4,10.7-3.1,16-13.2c0,0,3-9,3.8-9.4c1.9-1.1,6.4-1,8.1,1.7c0.4,0.5,10-0.1,12.6,0.2
	c3,0.2,10-3.8,10-3.8c1.1-0.3,2.2-0.7,3-1.5C215.8,150.6,217,156.6,217.7,156.6z"
                />
                <path
                  fill={colors.informativeColor}
                  d="M261.7,126.6l0.1-1.1c-9.6-1-17.1-9.1-17.1-19c0-10.5,8.5-19.1,19.1-19.1c10.5,0,19.1,8.6,19.1,19.1
	c0,9.9-7.6,18-17.2,19l0,0.9c0.2,0.4,18.5,0.1,19.8,0.4c0.7,0.5,26.1,44.4,24.9,53.8c-0.4,1.2-1.6,1.8-7.3,2.4
	c-16.8,1-38.7,3-38.5,3c0,0,42,1,45.6,1.8c-0.3,12.7-12.1,108.6-12.4,109.5c-5.1,9-13.8-63.5-18.9-65.5
	c-3.7-0.3-39.2,76.9-41.5,65.5c-0.5-5,14.4-88.1,17.8-107c0.4-2.2,2.3-4.2,2.3-4.4c-0.3-0.9-9.1-34.1-9.3-35
	c-0.5-0.1-49.6-13.8-66.2-19c-2.1-1.1-2.7-2.8-1.4-4.9C184.4,126.8,261.5,126.6,261.7,126.6z"
                />
                <path
                  fill={colors.informativeColor}
                  d="M208,292.2h4.4c0.7,0,1.3-4.7,1.3-4.7c0-0.9-0.6-1.7-1.3-1.7H208c-0.7,0-1.2,4.7-1.2,4.7
	C206.8,291.5,207.3,292.2,208,292.2z M194,220.2c-1,0-1.7,1-1.7,2.3v4.2c0,1.3,0.8,2.3,1.7,2.3h7.6c1,0,1.7-1.1,1.7-2.3v-4.2
	c0-1.3-0.8-2.3-1.7-2.3H194z M176.5,220.7c-0.9,0-1.7,1-1.7,2.4v3.8c0,1.3,0.8,2.3,1.7,2.3h8c1,0,1.7-1.1,1.7-2.3V223
	c0-1.3-0.8-2.4-1.7-2.4H176.5z M160.6,220.2c-1,0-1.7,1-1.7,2.3c0,0,0.8,6.5,1.7,6.5h6c1,0,1.8-1.1,1.8-2.3c0,0-0.8-6.5-1.8-6.5
	H160.6z M212,229.1h6.1c0.9,0,1.7-6.5,1.7-6.5c0-1.3-0.8-2.4-1.7-2.4H212c-1,0-1.7,6.5-1.7,6.5C210.3,228,211.1,229.1,212,229.1z
	M194.2,237.3c-0.9,0-1.6,1-1.6,2.2v3.8c0,1.2,0.7,2.2,1.6,2.2h6.9c0.9,0,1.6-1,1.6-2.2v-3.8c0-1.2-0.7-2.2-1.6-2.2H194.2z
	M178.1,237.8c-0.9,0-1.6,1-1.6,2.1v3.6c0,1.2,0.7,2.2,1.6,2.2h7.4c0.9,0,1.6-1,1.6-2.2v-3.6c0-1.2-0.7-2.1-1.6-2.1H178.1z
	M163.4,237.3c-0.9,0-1.6,1-1.6,2.2c0,0,0.7,6,1.6,6h5.6c0.9,0,1.6-1,1.6-2.2c0,0-0.7-6-1.6-6H163.4z M210.8,245.4h5.6
	c0.9,0,1.6-6,1.6-6c0-1.2-0.7-2.2-1.6-2.2h-5.6c-0.9,0-1.6,6-1.6,6C209.2,244.5,209.9,245.4,210.8,245.4z M194.3,253.8
	c-0.8,0-1.5,0.9-1.5,2v3.5c0,1.1,0.7,2,1.5,2h6.4c0.8,0,1.5-0.9,1.5-2v-3.5c0-1.1-0.6-2-1.5-2H194.3z M179.5,254.2
	c-0.8,0-1.5,0.9-1.5,2v3.3c0,1.1,0.7,2,1.5,2h6.8c0.8,0,1.5-0.9,1.5-2v-3.3c0-1.1-0.7-2-1.5-2H179.5z M166,253.8
	c-0.8,0-1.5,0.9-1.5,2c0,0,0.7,5.5,1.5,5.5h5.1c0.8,0,1.5-0.9,1.5-2c0,0-0.7-5.5-1.5-5.5H166z M209.6,261.3h5.1
	c0.8,0,1.5-5.5,1.5-5.5c0-1.1-0.7-2-1.5-2h-5.1c-0.8,0-1.5,5.5-1.5,5.5C208.1,260.4,208.8,261.3,209.6,261.3z M194.8,270.2
	c-0.7,0-1.3,0.8-1.3,1.8v3.2c0,1,0.6,1.8,1.3,1.8h5.9c0.7,0,1.3-0.8,1.3-1.8V272c0-1-0.6-1.8-1.3-1.8H194.8z M181.2,270.6
	c-0.8,0-1.4,0.8-1.4,1.8v3c0,1,0.6,1.8,1.4,1.8h6.3c0.7,0,1.3-0.8,1.3-1.8v-3c0-1-0.6-1.8-1.3-1.8H181.2z M168.7,270.2
	c-0.8,0-1.4,0.8-1.4,1.8c0,0,0.6,5.1,1.4,5.1h4.7c0.8,0,1.3-0.8,1.3-1.8c0,0-0.6-5.1-1.3-5.1H168.7z M208.8,277.1h4.7
	c0.7,0,1.3-5.1,1.3-5.1c0-1-0.6-1.8-1.3-1.8h-4.7c-0.8,0-1.4,5.1-1.4,5.1C207.5,276.3,208.1,277.1,208.8,277.1z M195.1,285.9
	c-0.7,0-1.2,0.8-1.2,1.7v3c0,0.9,0.6,1.7,1.2,1.7h5.4c0.7,0,1.2-0.8,1.2-1.7v-3c0-0.9-0.5-1.7-1.2-1.7H195.1z M182.6,286.2
	c-0.7,0-1.2,0.8-1.2,1.7v2.7c0,0.9,0.6,1.7,1.2,1.7h5.8c0.7,0,1.3-0.8,1.3-1.7v-2.7c0-0.9-0.6-1.7-1.3-1.7H182.6z M171.1,285.9
	c-0.7,0-1.2,0.8-1.2,1.7c0,0,0.5,4.7,1.2,4.7h4.4c0.7,0,1.2-0.8,1.2-1.7c0,0-0.6-4.7-1.2-4.7H171.1z M193.7,201.8
	c-1,0-1.9,1.1-1.9,2.6v4.5c0,1.4,0.9,2.6,1.9,2.6h8.2c1,0,1.9-1.1,1.9-2.6v-4.5c0-1.4-0.8-2.6-1.9-2.6H193.7z M174.7,202.3
	c-1,0-1.9,1.1-1.9,2.6v4.2c0,1.4,0.8,2.6,1.9,2.6h8.7c1,0,1.9-1.1,1.9-2.6v-4.2c0-1.4-0.9-2.6-1.9-2.6H174.7z M157.3,201.8
	c-1,0-1.9,1.1-1.9,2.6c0,0,0.8,7.1,1.9,7.1h6.6c1,0,1.9-1.1,1.9-2.6c0,0-0.8-7-1.9-7H157.3z M213.3,211.4h6.6c1,0,1.9-7.1,1.9-7.1
	c0-1.4-0.9-2.6-1.9-2.6h-6.6c-1,0-1.9,7.1-1.9,7.1C211.4,210.2,212.2,211.4,213.3,211.4z M148.5,201.8c-2-0.2-3.6-2.3-3.6-4.9
	c0-2.7,1.7-4.9,3.8-4.9h79.2c2.1,0,3.8,2.2,3.8,4.9c0,2.4-1.4,4.5-3.2,4.9c-1.4,2.7-8.5,75.7-10.5,94.4c-1.1,3.1-2.9,3.7-2.9,3.7
	h-48c-0.2-0.6-1.7-0.8-1.9-3.7C161.6,275.7,148.6,204.4,148.5,201.8z"
                />
              </svg>
            </li>
          ) : null}
          {icons.dozeM ? (
            <li key="12m">
              <svg
                version="1.1"
                id="Layer_1"
                viewBox="0 0 425.2 425.2"
                enableBackground="new 0 0 425.2 425.2"
                width="35px"
                height="35px"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={colors.informativeColor}
                  d="M270.8,231c-12.2-10.4-55.7-10.5-57.6-10.5
	c-45.5,0-55.9,10.2-56.3,10.7l-0.5,0.5c0,0,0,49.4,0,50.8c0,1.4,1.4,3.2,1.4,3.2c3.7,4.3,16.2,9.5,55.1,10.2
	c17.7-0.4,58.6-2.5,58.6-12.7v-51.6L270.8,231z M213.3,224.4c0.4,0,37.7,0.1,52,7.7c-15.3,5.1-51.9,4.5-52.3,4.5
	c-34-0.6-46.2-3-50.6-4.4C167.7,229.4,181.6,224.4,213.3,224.4z M267.7,283.2c0,4-25.6,8.2-54.8,8.9c-50.4-0.9-52.6-9.5-52.6-9.6
	c0,0,0-38.3,0-47.2c8.9,3.5,32.7,4.7,52.7,5.1c1.7,0,39.2,0.6,54.7-5.1C267.7,244.1,267.7,283.2,267.7,283.2z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill={colors.informativeColor}
                  d="M257.3,155.6l-6.1-17.5l-0.2-0.1c-1.1-0.2-2.6,0.1-4.6,0.7
	c-14,4-47.7,24.4-55.2,29c-41.6,25.9-49.5,31.6-50.6,33.9l-0.2,0.3l7,18.3l1.9-0.9c3.2-1.5,77.8-36.9,107.2-62.9L257.3,155.6z
	 M193.1,170.9c16-9.8,38.3-22.4,49.9-27.1c-14.8,10.2-54.3,36.7-89.7,52.6C160.2,191.7,172.1,183.9,193.1,170.9z M149.3,214.9
	c-1-2.5-3.3-8.7-4.2-10.9c42.4-17,94.3-53,104-59.9c1,2.9,3,8.5,3.6,10.2C225.1,178.2,158.7,210.4,149.3,214.9z"
                />
                <g>
                  <path
                    fill={colors.informativeColor}
                    d="M189.6,277.7h-14.9v-4.4h5.2v-13.2h-5.1v-3.8c2.7,0,5.9-1.1,6.4-3.5h3.6v20.5h4.8V277.7z"
                  />
                  <path
                    fill={colors.informativeColor}
                    d="M212.5,277.7h-16.8v-3.4c3-7.1,11.6-8.9,11.6-13.9c0-2.1-1.5-3.5-3.8-3.5c-2,0-4,1.1-5.2,2.5l-2.9-2.7
		c1.6-2.5,4.6-4.2,8.3-4.2c4.7,0,8.4,2.8,8.4,7.6c0,7.2-8.3,9.2-10.1,13.1h10.5V277.7z"
                  />
                  <path
                    fill={colors.informativeColor}
                    d="M226.8,252.2l7.6,15.7l7.5-15.7h5.4l1,25.5H243l-0.6-17.3l-6.5,13.9h-3.5l-6.7-13.9l-0.6,17.2h-5l1-25.5
		H226.8z"
                  />
                </g>
              </svg>
            </li>
          ) : null}
          {icons.pead ? (
            <li key="pead">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 69.26 90.91"
                className="pead"
                width="35px"
                height="35px"
              >
                <path
                  fill={colors.informativeColor}
                  fillRule="evenodd"
                  d="M53.4,46.49c0-1.74.51-2.93,2.15-2.93a1.55,1.55,0,0,1,1.72,1.74c0,1-1.19,1.62-1.92,2.07-1.82,1.1-3.87,2.18-5.05,3.84a5.35,5.35,0,0,0-1,3.52H61.61V51.25H55.16v0c2.68-1.64,6.24-2.78,6.24-6.42,0-3-2.35-4.48-5.81-4.48-3.82,0-6.26,2.25-6,6.16Z"
                  transform="translate(-21.41 -10.21)"
                />
                <path
                  fill={colors.informativeColor}
                  fillRule="evenodd"
                  d="M49.47,72.2H29.08A7.92,7.92,0,0,1,24.86,71a7.4,7.4,0,0,1-2.53-2.66,7.21,7.21,0,0,1-.92-3.54,7.62,7.62,0,0,1,1.21-4.09l9.13-15.81L30.14,44l5.68-3.37-.18,6.56-1.55-.9L24.93,62.12l0,0a5.06,5.06,0,0,0-.8,2.66,4.58,4.58,0,0,0,2.18,3.9,5.24,5.24,0,0,0,2.79.77H49.47ZM37.75,34.44,49.53,14.18a7.6,7.6,0,0,1,3-3,7.27,7.27,0,0,1,7.08,0,7.56,7.56,0,0,1,3,3h0L73.45,33,75,32.11l.17,6.56L69.59,35.3l1.53-.9L60.26,15.5v0a5,5,0,0,0-1.94-2,4.62,4.62,0,0,0-4.48,0,5,5,0,0,0-1.94,2v0L40.09,35.8ZM62.23,74l-5.76-3.19,5.76-3.19v1.84H83a4.89,4.89,0,0,0,2.69-.65,4.6,4.6,0,0,0,1.61-1.61A4.74,4.74,0,0,0,88,65a5.21,5.21,0,0,0-.74-2.8h0L77,44.57l2.34-1.35L89.54,60.85a7.79,7.79,0,0,1,1.13,4.27,7.46,7.46,0,0,1-1,3.48,7.3,7.3,0,0,1-2.56,2.56,7.63,7.63,0,0,1-4.17,1H62.23Z"
                  transform="translate(-21.41 -10.21)"
                />
                <path
                  fill={colors.informativeColor}
                  d="M41.14,87.37V79.28h2.63a9.87,9.87,0,0,1,1.94.11,2.22,2.22,0,0,1,1.17.8,2.52,2.52,0,0,1,.47,1.58A2.78,2.78,0,0,1,47.08,83a2.17,2.17,0,0,1-.69.8,2.37,2.37,0,0,1-.85.38,9.08,9.08,0,0,1-1.7.12H42.78v3.05Zm1.64-6.72v2.29h.89A4,4,0,0,0,45,82.81a1.08,1.08,0,0,0,.52-.39,1.11,1.11,0,0,0,.18-.63,1,1,0,0,0-.26-.73,1.13,1.13,0,0,0-.66-.36,7.51,7.51,0,0,0-1.17,0Z"
                  transform="translate(-21.41 -10.21)"
                />
                <polygon
                  fill={colors.informativeColor}
                  points="27.28 77.16 27.28 69.06 33.29 69.06 33.29 70.43 28.92 70.43 28.92 72.23 32.98 72.23 32.98 73.59 28.92 73.59 28.92 75.8 33.45 75.8 33.45 77.16 27.28 77.16"
                />
                <path
                  fill={colors.informativeColor}
                  d="M63.54,87.38H61.77l-.71-1.84H57.82l-.67,1.84H55.41l3.16-8.1H60.3Zm-3-3.21-1.11-3-1.1,3Z"
                  transform="translate(-21.41 -10.21)"
                />
                <path
                  fill={colors.informativeColor}
                  d="M64.4,79.28h3a6,6,0,0,1,1.54.15,2.74,2.74,0,0,1,1.22.74,3.61,3.61,0,0,1,.78,1.32,5.84,5.84,0,0,1,.26,1.91A5.45,5.45,0,0,1,71,85.12a3.73,3.73,0,0,1-.87,1.44,2.88,2.88,0,0,1-1.15.64,4.79,4.79,0,0,1-1.45.17H64.4ZM66,80.65V86h1.22a4.55,4.55,0,0,0,1-.08,1.58,1.58,0,0,0,.66-.33,1.67,1.67,0,0,0,.43-.79,5.28,5.28,0,0,0,.16-1.48,4.83,4.83,0,0,0-.16-1.44,1.75,1.75,0,0,0-.47-.78,1.5,1.5,0,0,0-.75-.39,7.84,7.84,0,0,0-1.34-.07Z"
                  transform="translate(-21.41 -10.21)"
                />
                <polygon
                  fill={colors.informativeColor}
                  points="10.26 90.76 10.26 81.86 16.26 81.86 16.26 82.9 11.44 82.9 11.44 85.66 15.62 85.66 15.62 86.72 11.44 86.72 11.44 90.76 10.26 90.76"
                />
                <path
                  fill={colors.informativeColor}
                  d="M39.05,101v-8.9h4a5.26,5.26,0,0,1,1.81.24,1.92,1.92,0,0,1,1,.85,2.49,2.49,0,0,1,.38,1.34,2.22,2.22,0,0,1-.62,1.59,3.08,3.08,0,0,1-1.89.83,2.91,2.91,0,0,1,.71.45,5.88,5.88,0,0,1,1,1.18L46.9,101H45.41l-1.18-1.85c-.34-.54-.63-.94-.85-1.23a2.51,2.51,0,0,0-.6-.59,1.63,1.63,0,0,0-.54-.24,3.25,3.25,0,0,0-.65,0H40.22v4Zm1.17-5h2.54A3.82,3.82,0,0,0,44,95.83a1.37,1.37,0,0,0,.69-.53,1.44,1.44,0,0,0,.24-.8,1.32,1.32,0,0,0-.46-1A2.15,2.15,0,0,0,43,93.05H40.22Z"
                  transform="translate(-21.41 -10.21)"
                />
                <path
                  fill={colors.informativeColor}
                  d="M46.86,101l3.42-8.9h1.27l3.64,8.9H53.85l-1-2.69H49.08l-1,2.69Zm2.57-3.66h3l-.93-2.46c-.28-.75-.5-1.36-.64-1.85a11.61,11.61,0,0,1-.47,1.7Z"
                  transform="translate(-21.41 -10.21)"
                />
                <path
                  fill={colors.informativeColor}
                  d="M55.56,98.11l1.11-.1a2.31,2.31,0,0,0,.37,1.1,2,2,0,0,0,.9.7,3.44,3.44,0,0,0,1.36.26,3.12,3.12,0,0,0,1.19-.21,1.67,1.67,0,0,0,.77-.54,1.26,1.26,0,0,0,.25-.76,1.19,1.19,0,0,0-.24-.74,1.82,1.82,0,0,0-.8-.52c-.24-.09-.77-.24-1.58-.44a8,8,0,0,1-1.73-.55,2.37,2.37,0,0,1-.95-.83,2,2,0,0,1-.31-1.11,2.3,2.3,0,0,1,.38-1.26,2.39,2.39,0,0,1,1.12-.89,4.76,4.76,0,0,1,3.38,0,2.51,2.51,0,0,1,1.16.93,2.76,2.76,0,0,1,.44,1.41l-1.13.08a1.83,1.83,0,0,0-.61-1.27A2.44,2.44,0,0,0,59.08,93a2.46,2.46,0,0,0-1.55.4,1.15,1.15,0,0,0-.49.94,1,1,0,0,0,.34.79,4.57,4.57,0,0,0,1.78.63,12.26,12.26,0,0,1,2,.57,2.7,2.7,0,0,1,1.15.91,2.27,2.27,0,0,1,.36,1.27,2.44,2.44,0,0,1-.4,1.34,2.62,2.62,0,0,1-1.17,1,4,4,0,0,1-1.72.35,5,5,0,0,1-2-.35,2.84,2.84,0,0,1-1.28-1.06,2.93,2.93,0,0,1-.49-1.6"
                  transform="translate(-21.41 -10.21)"
                />
                <path
                  fill={colors.informativeColor}
                  d="M70.44,97.85l1.17.3a3.92,3.92,0,0,1-1.33,2.21,3.66,3.66,0,0,1-2.35.76,4.26,4.26,0,0,1-2.35-.58,3.65,3.65,0,0,1-1.37-1.7,6.14,6.14,0,0,1-.47-2.39A5.29,5.29,0,0,1,64.27,94a3.72,3.72,0,0,1,1.51-1.58,4.43,4.43,0,0,1,2.16-.53,3.6,3.6,0,0,1,2.25.68,3.51,3.51,0,0,1,1.27,1.91l-1.16.27a2.74,2.74,0,0,0-.9-1.41,2.35,2.35,0,0,0-1.48-.44,2.88,2.88,0,0,0-1.71.48,2.55,2.55,0,0,0-1,1.33,5.56,5.56,0,0,0,.05,3.69,2.43,2.43,0,0,0,1,1.27,2.86,2.86,0,0,0,1.51.41,2.54,2.54,0,0,0,1.68-.56,3.06,3.06,0,0,0,.93-1.7"
                  transform="translate(-21.41 -10.21)"
                />
                <path
                  fill={colors.informativeColor}
                  d="M72.53,96.63a4.87,4.87,0,0,1,1.19-3.47,4.08,4.08,0,0,1,3.08-1.25A4.28,4.28,0,0,1,79,92.5a3.86,3.86,0,0,1,1.51,1.64,5.74,5.74,0,0,1,0,4.82A3.74,3.74,0,0,1,79,100.57a4.39,4.39,0,0,1-2.16.55,4.25,4.25,0,0,1-2.25-.6A3.94,3.94,0,0,1,73,98.86a5,5,0,0,1-.51-2.23m1.22,0a3.6,3.6,0,0,0,.86,2.54,3,3,0,0,0,4.37,0,3.79,3.79,0,0,0,.86-2.65,4.47,4.47,0,0,0-.38-1.9,2.82,2.82,0,0,0-1.07-1.26,2.89,2.89,0,0,0-1.59-.45,3,3,0,0,0-2.15.87,3.81,3.81,0,0,0-.9,2.86"
                  transform="translate(-21.41 -10.21)"
                />
              </svg>
            </li>
          ) : null}
          {icons.pp ? (
            <li key="pp">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 74.02 96.99"
                className="pp"
                width="35px"
                height="35px"
              >
                <defs>
                  <clipPath id="clip-path" transform="translate(-19.68 -8.2)">
                    <polyline
                      fill="none"
                      points="113.39 113.39 0 113.39 0 0 113.39 0"
                    />
                  </clipPath>
                </defs>
                <g>
                  <path
                    fillRule="evenodd"
                    fill={colors.informativeColor}
                    d="M61.62,40.64H51.17L49.6,49.41h4.06a2.37,2.37,0,0,1,2.21-1,2,2,0,0,1,2.18,2.12,2.14,2.14,0,0,1-2.31,2,2.75,2.75,0,0,1-1.73-.5,1.82,1.82,0,0,1-.61-1H49.09c-.13,1.5.9,5,6.52,5,4.39,0,6.82-2.28,6.82-5.36,0-3.58-2.25-5.16-5-5.16a5.57,5.57,0,0,0-3.32.9l0,0,.44-2h7.08ZM49.67,74.44H27.89a8.44,8.44,0,0,1-4.51-1.26,7.83,7.83,0,0,1-3.7-6.62A8.19,8.19,0,0,1,21,62.19l9.76-16.9-1.72-1,6.06-3.6-.19,7-1.65-1L23.45,63.67l0,0a5.37,5.37,0,0,0-.85,2.85,4.85,4.85,0,0,0,.62,2.38,5,5,0,0,0,1.71,1.79,5.59,5.59,0,0,0,3,.81H49.67ZM37.15,34.09,49.73,12.43A8.28,8.28,0,0,1,53,9.17a7.85,7.85,0,0,1,7.56,0,8.31,8.31,0,0,1,3.2,3.24h0L75.3,32.57l1.65-1,.19,7-6-3.6,1.64-1L61.2,13.85v0a5.26,5.26,0,0,0-2.07-2.11,4.92,4.92,0,0,0-4.78,0,5.28,5.28,0,0,0-2.08,2.11v0L39.65,35.54ZM63.31,76.4,57.16,73l6.15-3.41v2H85.53a5.23,5.23,0,0,0,2.87-.69,4.93,4.93,0,0,0,2.4-4.08,5.38,5.38,0,0,0-.79-3h0L79.11,44.92l2.5-1.45L92.5,62.31a8.4,8.4,0,0,1,1.2,4.56,8,8,0,0,1-1.09,3.73,7.71,7.71,0,0,1-2.74,2.73,8.06,8.06,0,0,1-4.45,1.11H63.31Z"
                    transform="translate(-19.68 -8.2)"
                  />
                  <path
                    fill={colors.informativeColor}
                    d="M49.62,90.66V82h2.8a9.94,9.94,0,0,1,2.08.13,2.3,2.3,0,0,1,1.25.85,2.69,2.69,0,0,1,.5,1.68A2.86,2.86,0,0,1,56,86a2.39,2.39,0,0,1-.73.86,2.73,2.73,0,0,1-.91.41,10.3,10.3,0,0,1-1.81.12H51.36v3.27Zm1.74-7.19v2.45h1a4.17,4.17,0,0,0,1.38-.14,1.16,1.16,0,0,0,.55-.42,1.2,1.2,0,0,0,.2-.67,1.08,1.08,0,0,0-.28-.78,1.2,1.2,0,0,0-.7-.39,8.79,8.79,0,0,0-1.26,0Z"
                    transform="translate(-19.68 -8.2)"
                  />
                  <path
                    fill={colors.informativeColor}
                    d="M57.68,90.66V82h2.81a10,10,0,0,1,2.08.13,2.27,2.27,0,0,1,1.24.85,2.62,2.62,0,0,1,.5,1.68A3,3,0,0,1,64,86a2.41,2.41,0,0,1-.74.86,2.73,2.73,0,0,1-.91.41,10.22,10.22,0,0,1-1.81.12H59.43v3.27Zm1.75-7.19v2.45h1a4.2,4.2,0,0,0,1.39-.14,1.22,1.22,0,0,0,.55-.42,1.19,1.19,0,0,0,.19-.67,1.08,1.08,0,0,0-.28-.78,1.14,1.14,0,0,0-.7-.39,8.71,8.71,0,0,0-1.25,0Z"
                    transform="translate(-19.68 -8.2)"
                  />
                  <polygon
                    fill={colors.informativeColor}
                    points="17.63 96.99 17.63 88.59 14.5 88.59 14.5 87.47 22.04 87.47 22.04 88.59 18.89 88.59 18.89 96.99 17.63 96.99"
                  />
                  <path
                    fill={colors.informativeColor}
                    d="M42,105.19l3.66-9.52H47l3.9,9.52H49.44l-1.11-2.88h-4l-1,2.88Zm2.75-3.91h3.22l-1-2.64c-.3-.8-.53-1.45-.68-2a12,12,0,0,1-.51,1.82Z"
                    transform="translate(-19.68 -8.2)"
                  />
                  <path
                    fill={colors.informativeColor}
                    d="M51.84,105.19V95.67h1.9L56,102.41c.21.63.36,1.1.46,1.41.1-.35.27-.86.5-1.53l2.28-6.62h1.69v9.52H59.71v-8l-2.76,8H55.81l-2.75-8.1v8.1Z"
                    transform="translate(-19.68 -8.2)"
                  />
                  <path
                    fill={colors.informativeColor}
                    d="M63,105.19V95.67h3.58a8.69,8.69,0,0,1,1.45.09,2.91,2.91,0,0,1,1.18.45,2.33,2.33,0,0,1,.76.92,3.07,3.07,0,0,1-.49,3.35,3.69,3.69,0,0,1-2.79.84H64.21v3.87Zm1.25-5h2.46a2.58,2.58,0,0,0,1.73-.45,1.6,1.6,0,0,0,.52-1.28,1.73,1.73,0,0,0-.3-1,1.42,1.42,0,0,0-.8-.56,5,5,0,0,0-1.17-.09H64.21Z"
                    transform="translate(-19.68 -8.2)"
                  />
                  <path
                    fill={colors.informativeColor}
                    d="M70.78,105.19l3.65-9.52h1.36l3.89,9.52H78.25l-1.12-2.88h-4l-1,2.88Zm2.74-3.91h3.23l-1-2.64c-.3-.8-.53-1.45-.67-2a12,12,0,0,1-.51,1.82Z"
                    transform="translate(-19.68 -8.2)"
                  />
                </g>
              </svg>
            </li>
          ) : null}
          {icons.lixeira ? (
            <li key="lixeira">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65.67 77.16"
                className="lixeira"
                width="35px"
                height="35px"
              >
                <path
                  fill={colors.informativeColor}
                  d="M87.88,67.6v-.44a5.67,5.67,0,0,0-.36-1.83l-1.29-3.12A1.44,1.44,0,0,0,85,61.35h-7.3a1.45,1.45,0,0,0-1.28.86l-1.29,3.12a5.72,5.72,0,0,0-.36,1.82v.45a1.33,1.33,0,0,0,1.33,1.33H86.54a1.33,1.33,0,0,0,1.34-1.33m-2.94-5.3a.54.54,0,0,1,.41.27l1.28,3.12a4.63,4.63,0,0,1,.29,1.47v.44a.38.38,0,0,1-.38.38H76.05a.38.38,0,0,1-.37-.38v-.44A4.91,4.91,0,0,1,76,65.69l1.29-3.12a.54.54,0,0,1,.4-.27ZM31.05,23.69A5.73,5.73,0,1,0,36.78,18a5.73,5.73,0,0,0-5.73,5.73M58.07,51a2.8,2.8,0,1,0,0-5.6H52l-.68-1.49-.25-.56L47.2,34.72a5.33,5.33,0,0,0-5-3.21l-10.79,0a5.82,5.82,0,0,0-5.8,5.8v21a2.89,2.89,0,0,0,2.82,2.93,2.93,2.93,0,0,0,.9-.15V91.58a3.42,3.42,0,1,0,6.84,0V65.15a.86.86,0,0,1,.84-.86.84.84,0,0,1,.84.86V91.58a3.42,3.42,0,1,0,6.84,0V42.73s2.13,4.83,2.73,6.09A3.1,3.1,0,0,0,50.32,51Zm9.5,17H57.08a.37.37,0,0,1-.38-.37v-.45A4.62,4.62,0,0,1,57,65.69l1.29-3.12a.52.52,0,0,1,.4-.27h.13l.28,1.92L61,65.48l4.12-1.8L65,62.3h1a.52.52,0,0,1,.4.27l1.29,3.12A4.92,4.92,0,0,1,68,67.15v.45a.37.37,0,0,1-.38.37m3.76,26.2H54.19a.87.87,0,0,1-.88-.88V67.79a8.17,8.17,0,0,1,.46-2.45l1.89-5a1.66,1.66,0,0,1,1.4-1H58.4l.27,1.94a1.44,1.44,0,0,0-1.28.86L56.1,65.33a5.66,5.66,0,0,0-.36,1.82v.45a1.34,1.34,0,0,0,1.34,1.33H67.57A1.34,1.34,0,0,0,68.9,67.6v-.44a5.67,5.67,0,0,0-.36-1.83l-1.28-3.12A1.46,1.46,0,0,0,66,61.35H64.82l-.28-1.94h3a1.66,1.66,0,0,1,1.39,1l2.35,6.14Zm18.1,0H72.29V66.52l2.35-6.14a1.66,1.66,0,0,1,1.39-1H86.56a1.66,1.66,0,0,1,1.4,1l1.9,5a8.49,8.49,0,0,1,.45,2.45v25.5a.87.87,0,0,1-.88.88M88.85,60a2.6,2.6,0,0,0-2.29-1.57H76A2.6,2.6,0,0,0,73.75,60l-1.94,5.06L69.88,60a2.62,2.62,0,0,0-2.29-1.57H64.4L64,55.6l-1.94-1.26-4.13,1.79.34,2.33h-1.2A2.57,2.57,0,0,0,54.78,60l-1.91,5a9.42,9.42,0,0,0-.51,2.79v25.5a1.84,1.84,0,0,0,1.83,1.84H89.43a1.84,1.84,0,0,0,1.83-1.84V67.79A9.11,9.11,0,0,0,90.75,65ZM59.33,82l.27-.38.22.12,1.26.68-1.67-3-3.77.07,1.6.86.21.11-.28.38-.85,1.35a.92.92,0,0,0-.13.49.86.86,0,0,0,.11.45l.07.11h0l0,.07L57.46,85l0,.06h0l0,.06a0,0,0,0,1,0,0l0,0h0l0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0h0a1.39,1.39,0,0,0,.56.16h3.18V83.34H58.5Zm9.41.94s0,0,0,0a0,0,0,0,1,0,0s0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0v-.07a.43.43,0,0,1,0-.05v-.15h0a1.21,1.21,0,0,0-.16-.56L67,79.22l-1.92,1.2,1.68,2.66H64.66V81.23L62.8,84.44l1.86,2.9V85.53l.63,0,1.66,0a.94.94,0,0,0,.49-.15,1,1,0,0,0,.32-.33l.06-.12h0l.87-1.83v0l0-.07a0,0,0,0,0,0,0M62,78.61l3.61-.16,1.74-2.93-1.57.91-.18.1-.17-.38-.7-1.43a1.07,1.07,0,0,0-.35-.38,1,1,0,0,0-.45-.14h-.13l-2,0h-.43l0,0h0l0,0h-.08a1.47,1.47,0,0,0-.43.39L59,77.47,61,78.66,62.6,76l.68,1.39.19.38-.26.15Z"
                  transform="translate(-25.6 -17.96)"
                />
              </svg>
            </li>
          ) : null}
        </ul>
      </div>
    </>
  )
}