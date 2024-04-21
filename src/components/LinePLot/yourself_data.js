function yourdata() {
    const data = {};
    // Loop through each hour of the day
    for (let hour = 0; hour <= 24; hour++) {
        const hourString = hour.toString().padStart(2, '0') + ':00';
        if (hour == 0) {
            data['00:00'] = {
                "Yourself": 0,
            };
        }
        else {

            const hourstring_prev = (hour - 1).toString().padStart(2, '0') + ':00';
            // Generate random values for each friend
            const hourData = {};
            const friendName = 'Yourself';
            const randomValue = Math.floor(Math.random() * 1000); // Generate random value between 0 and 9999
            const val = data[hourstring_prev][friendName] + randomValue;
            hourData[friendName] = val;
            data[hourString] = hourData;
        }
    }

    return data;
}


const yourselfgenerate = yourdata();

export default yourselfgenerate;