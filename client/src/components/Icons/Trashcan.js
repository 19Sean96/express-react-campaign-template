import React from 'react'
export default props => {
    const { color } = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 26"
        >
            <g id="Trash" transform="translate(0.037 1)">
                <path
                    d="M603.2,738l-.77,16.9a3.978,3.978,0,0,1-3.8,3.965h-6.071a3.978,3.978,0,0,1-3.8-3.965L588,738"
                    transform="translate(-585.663 -734.87)"
                    fill="none"
                    stroke={color}
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
                <line
                    x2="20"
                    transform="translate(-0.037 3)"
                    fill="none"
                    stroke={color}
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
                <line
                    x2="0.475"
                    y2="11.478"
                    transform="translate(7.325 7.304)"
                    fill="none"
                    stroke={color}
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
                <line
                    x1="0.475"
                    y2="11.478"
                    transform="translate(12.076 7.304)"
                    fill="none"
                    stroke={color}
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
                <path
                    d="M596,735.13l.517-1.7a1.925,1.925,0,0,1,1.8-1.427h2.962a1.925,1.925,0,0,1,1.8,1.427l.517,1.7"
                    transform="translate(-589.863 -732)"
                    fill="none"
                    stroke={color}
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
            </g>
        </svg>
    )
}