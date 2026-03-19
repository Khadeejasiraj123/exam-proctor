import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTest = () => {

    const [test, setTest] = useState([])

    const fetchData = async () => {
        const response = await axios.get("/tests")
        console.log("response is", response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>ViewTest</div>
    )
}

export default ViewTest