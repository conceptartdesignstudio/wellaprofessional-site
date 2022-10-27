export const PebdSVG = ({ selectedColor }) => {
  return (
    <>
      <svg
        version="1.1"
        id="pebd"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
        width="35px"
        height="35px"
      >
        <g>
          <g>
            <defs>
              <rect id="SVGID_1_" x="0" y="0" width="300" height="300" />
            </defs>
            <clipPath id="SVGID_00000098200983137492771520000000250012177821422256_">
              <use className="visible" xlinkHref="#SVGID_1_" />
            </clipPath>

            <path
              className="st0"
              stroke={selectedColor}
              d="
			M167.59,207.24h60.11c17.74,0,28.93-19.07,20.3-34.56l-40.21-72.13 M80.4,128.87l-24.42,43.81c-8.64,15.49,2.56,34.56,20.3,34.56
			h41.61 M186.13,61.7l-13.84-24.83c-8.86-15.9-31.73-15.9-40.6,0L104.1,86.36"
            />
          </g>
          <polygon
            fill={selectedColor}
            className="st1"
            points="167.44,207.24 167.29,183.58 139.26,207.42 167.6,230.9 167.44,207.24 	"
          />
          <polygon
            fill={selectedColor}
            className="st1"
            points="78.61,131.96 100.43,143.22 92.02,105.97 56.78,120.71 78.61,131.96 	"
          />
          <polygon
            fill={selectedColor}
            className="st1"
            points="182.13,56.9 160.48,69.44 197.06,82.69 203.77,44.37 182.13,56.9 	"
          />
          <text
            fill={selectedColor}
            transform="matrix(1 0 0 1 93.0703 281.9922)"
            className="st1 st2 st3 st4"
          >
            PEBD
          </text>
          <text
            fill={selectedColor}
            transform="matrix(1 0 0 1 127.125 165.3516)"
            className="st1 st2 st5"
          >
            4
          </text>
          <polygon
            fill={selectedColor}
            className="st1"
            points="167.44,207.24 167.29,183.58 139.26,207.42 167.6,230.9 167.44,207.24 	"
          />
          <polygon
            fill={selectedColor}
            className="st1"
            points="78.61,131.96 100.43,143.22 92.02,105.97 56.78,120.71 78.61,131.96 	"
          />
          <polygon
            fill={selectedColor}
            className="st1"
            points="182.13,56.9 160.48,69.44 197.06,82.69 203.77,44.37 182.13,56.9 	"
          />
        </g>
      </svg>
    </>
  )
}
