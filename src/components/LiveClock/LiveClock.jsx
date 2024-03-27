import React, { useEffect } from 'react'

const LiveClock = () => {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            const newTime = new Date().toLocaleTimeString()
            setTime(newTime)
        }, 1000)
    })

    return (
        <center>
            <strong>
                {time}
            </strong>
        </center>
    )
}

export default LiveClock
