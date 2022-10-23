import axios from 'axios'


export const getLaunches = async (data) => {
    let launches = 'https://api.spaceXdata.com/v3/launches?limit=100'
    if (data.launch !== null) {
        launches += `&launch_success=${data.launch}`
    }
    if (data.landing !== null) {
        launches += `&land_success=${data.landing}`
    }
    if (data.year !== null) {
        launches += `&launch_year=${data.year}`
    }

    try {
        console.log("API", launches)
        let res = await axios.get(launches)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// Launch Success Filter: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true
// Launch & Land Filter:
// https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
// All:
// https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014