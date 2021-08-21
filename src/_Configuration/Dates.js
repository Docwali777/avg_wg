function d(){
    var todaysDate = new Date()

    return{
        MM: todaysDate.getMonth() + 1 < 10 ? `0${todaysDate.getMonth() + 1}` : todaysDate.getMonth() + 1,
        DD: todaysDate.getDate() < 10 ? `0${todaysDate.getDate()}` : todaysDate.getDate(),
        YYYY: todaysDate.getFullYear(),
        milliseconds: todaysDate.valueOf()
    }
    
}

export default d()