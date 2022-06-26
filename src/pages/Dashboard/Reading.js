import styles from './style.module.css'


// Creator : Team F - Asael
const userData = [{
        firstName: {
                type: "Oren",
                required: true
        },
        lastName: {
                type: "Argaman",
                required: true
        },
        calibration: {
                type: "very good",
                required: true
        },
        WPM: {
                type: 300,
                required: true
        },
        LPM: {
                type: 50,
                required: true
        }
}
]

function Reading() {
        return <div>
                <span> {userData.LPM} LPM </span>
                <h1>Reading</h1>
        </div>
}


export default Reading