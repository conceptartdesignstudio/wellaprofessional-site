import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedImage, getBrandLogo } from "../lib/utils";
import styles from "../styles/Product.module.css";
import ProductBrand from '../components/ProductBrand';

export default function product({
  title,
  brandName,
  content,
  colors,
  displayRules,
  icons,
  productImg,
}) {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: colors.backgroundColor }}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/wella.ico" />
      </Head>

      <div className={styles.content}>
        <section
          className={styles.container}
          style={{ backgroundColor: colors.backgroundColor }}
        >
          <article className={styles.productInfos}>
            <Image
              src={productImg}
              alt="Product Image"
              width={150}
              height={150}
            />
            <h1
              className="productName"
              style={{ color: colors.titleColor }}
              dangerouslySetInnerHTML={{ __html: content.productName }}
            ></h1>
            <h4 style={{ color: colors.textColor }}>Ingredientes:</h4>
            <p style={{ color: colors.textColor }}>{content.ingredients}</p>
          </article>
        </section>
        <section
          className={styles.productSection}
          style={{ backgroundColor: colors.backgroundColor }}
        >
          <div className={styles.productLinks}>
            <svg
              style={{ fill: colors.moreColor }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22px"
              height="22px"
            >
              <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z" />
            </svg>
            <span>
              <Link href={content.link}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: colors.moreColor }}
                >
                  Saiba mais
                </a>
              </Link>
            </span>
          </div>
          <div className={styles.productIcons}>
            <ul key="newIcons">
              {icons.eac ? (
                <li key="eac">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 425.2 425.2"
                    enable-background="new 0 0 425.2 425.2"
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
                    enable-background="new 0 0 425.2 425.2"
                    width="35px"
                    height="35px"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
                    enable-background="new 0 0 425.2 425.2"
                    width="35px"
                    height="35px"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.4252"
                      stroke-miterlimit="10"
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
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      points="209.6,149.9 138.8,178.8 138.8,278.2 209.6,236.8"
                    />
                    <polygon
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      points="209.6,236.8 256.3,281.9 256.3,194.7 209.6,149.9"
                    />
                    <polygon
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill={colors.informativeColor}
                      points="217.3,173.2 247.5,202.3 247.5,229.2 217.3,198.5"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill={colors.informativeColor}
                      d="M202.7,310.3c0,0,0-6.8,0-11.6c0-4.8,18.1-30.5,29-50.1
                  c4.8-8.7-2.3-14.4-8.2-5.3c-5.3,8.3-5.4,9-12.7,19.1c-2.4,3.3-8.1,2.1-8.1-4.2v-48.7c0-7.7-9.1-8.3-9.1,0.5v41
                  c0,3.1-5.8,3.5-5.8-0.4c0-3.3,0-8.3,0-13.8c0-5.7-8-5.7-8,0V251c0,3.2-5.4,3.2-5.4,0v-14.2c0-6-8-5.9-8,0V251c0,3.2-5.4,3.2-5.4,0
                  v-14.2c0-5.7-7.6-5.7-7.6,0c0,0,0,34.9,0,41c0,5.1,7.6,14.5,7.6,18.4c0,3.9,0,14.1,0,14.1H202.7z"
                    />
                    <line
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      x1="151"
                      y1="197"
                      x2="197.9"
                      y2="174"
                    />
                    <line
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      x1="151"
                      y1="208.7"
                      x2="197.9"
                      y2="184"
                    />
                    <line
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      x1="151"
                      y1="219.8"
                      x2="197.9"
                      y2="195.1"
                    />
                    <polyline
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      points="209.6,236.8 209.6,145.9 127.7,165.7 127.7,263 132.9,261.3"
                    />
                    <polyline
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      points="209.6,236.8 209.6,148.3 133,173 133,271.2 138.7,268.6"
                    />
                    <polyline
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      points="266.3,260.4 272.7,263 272.7,182 209.6,145.9 209.6,237.1"
                    />
                    <polyline
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
                      points="209.6,236.8 209.6,148.3 266.2,187.2 266.2,270.7 261.1,268"
                    />
                    <polyline
                      fill="none"
                      stroke={colors.informativeColor}
                      stroke-width="0.2835"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="3.864"
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
                    enable-background="new 0 0 425.2 425.2"
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
                    enable-background="new 0 0 425.2 425.2"
                    width="35px"
                    height="35px"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill={colors.informativeColor}
                      d="M270.8,231c-12.2-10.4-55.7-10.5-57.6-10.5
	c-45.5,0-55.9,10.2-56.3,10.7l-0.5,0.5c0,0,0,49.4,0,50.8c0,1.4,1.4,3.2,1.4,3.2c3.7,4.3,16.2,9.5,55.1,10.2
	c17.7-0.4,58.6-2.5,58.6-12.7v-51.6L270.8,231z M213.3,224.4c0.4,0,37.7,0.1,52,7.7c-15.3,5.1-51.9,4.5-52.3,4.5
	c-34-0.6-46.2-3-50.6-4.4C167.7,229.4,181.6,224.4,213.3,224.4z M267.7,283.2c0,4-25.6,8.2-54.8,8.9c-50.4-0.9-52.6-9.5-52.6-9.6
	c0,0,0-38.3,0-47.2c8.9,3.5,32.7,4.7,52.7,5.1c1.7,0,39.2,0.6,54.7-5.1C267.7,244.1,267.7,283.2,267.7,283.2z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
            </ul>
          </div>
        </section>
        <section
          className={styles.footer}
          style={{ backgroundColor: colors.backgroundColor }}
        >
          <ProductBrand brandName={brandName} key={brandName} />

          <div className={styles.socialMedias}>
            <div className="wrapper">
              {displayRules.instagram ? (
                <Link href={content.socialMedias.instagram}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: colors.socialMediaColor }}
                  >
                    <svg
                      style={{ fill: colors.socialMediaColor }}
                      width="35px"
                      height="35px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              ) : null}

              {displayRules.facebook ? (
                <Link href={content.socialMedias.facebook}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: colors.socialMediaColor }}
                  >
                    <svg
                      style={{ fill: colors.socialMediaColor }}
                      width="35px"
                      height="35px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              ) : null}

              {displayRules.youtube ? (
                <Link href={content.socialMedias.youtube}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: colors.socialMediaColor }}
                  >
                    <svg
                      style={{ fill: colors.socialMediaColor }}
                      width="35px"
                      height="35px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="youtube-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await axios.get(process.env.NEXT_PUBLIC_WELLA_ENV_API);
  const products = res.data;

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { slug: product.slug.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_WELLA_ENV_API}?slug=${params.slug}`);
  const data = await res.data;
  const product = data[0];
  const productImg = await getFeaturedImage(product.acf.product_image);
  const container = "max-w-5xl";
  const isProductPage = true;

  return {
    props: {
      isProductPage,
      title: product.title.rendered,
      brandName: product.acf.selected_product_brand,
      container,
      content: {
        productName: product.acf.product_name,
        ingredients: product.acf.ingredients,
        link: product.acf.more_infos,
        socialMedias: {
          instagram: product.acf.instagram,
          facebook: product.acf.facebook,
          youtube: product.acf.youtube,
        },
      },
      colors: {
        backgroundColor: product.acf.background_color,
        titleColor: product.acf.product_name_color,
        textColor: product.acf.product_inci_color,
        moreColor: product.acf.more_color,
        socialMediaColor: product.acf.social_media_color,
        informativeColor: product.acf.informative_icons_color,
      },
      displayRules: {
        facebook: product.acf.display_facebook,
        instagram: product.acf.display_instagram,
        youtube: product.acf.display_youtube,
      },
      icons: {
        eac: product.acf.eac,
        reciclagem: product.acf.reciclagem,
        retornavel: product.acf.retornavel,
        book: product.acf.book,
        dozeM: product.acf.dozeM,
        descartavel: product.acf.descartavel,
      },
      productImg,
    },
  };
};