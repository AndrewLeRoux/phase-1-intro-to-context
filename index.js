function createEmployeeRecord(array){
    return {
        'firstName': array[0],
        'familyName': array[1],
        'title': array[2],
        'payPerHour': array[3],
        'timeInEvents': [],
        'timeOutEvents': []
    }
}

function createEmployeeRecords(array) {
    const newArray = []
for (const arr of array) {
    newArray.push(createEmployeeRecord(arr))
}
return newArray
}


function createTimeInEvent(object, dateStamp){
    
    object.timeInEvents.push({
        'type': "TimeIn",
        'hour': parseInt(dateStamp.slice(11)),
        'date': dateStamp.slice(0,10)
    })

    return object
}

function createTimeOutEvent(object, dateStamp){

    object.timeOutEvents.push({
        'type': "TimeOut",
        'hour': parseInt(dateStamp.slice(11)),
        'date': dateStamp.slice(0,10)
    })

    return object
}

function hoursWorkedOnDate(object, inputDate){
    let timeInHour = 0
    let timeOutHour = 0
    for (const obj of object.timeInEvents){
        if (obj.date === inputDate) {
            timeInHour = obj.hour / 100
        }
    }
    for (const obj of object.timeOutEvents){
        if (obj.date === inputDate) {
            timeOutHour = obj.hour / 100
        }
    }
    return timeOutHour - timeInHour

}

function wagesEarnedOnDate(object, inputDate){
return hoursWorkedOnDate(object, inputDate) * object.payPerHour
}

function allWagesFor(object){
    let totalWages = 0
    for (const obj of object.timeInEvents) {
        totalWages = totalWages + wagesEarnedOnDate(object, obj.date)
    }
    return totalWages
}

function calculatePayroll(array){
    let totalPayrollValue = 0
    for (let i = 0; i < array.length; i++){
        totalPayrollValue = totalPayrollValue + allWagesFor(array[i])
    }
    return totalPayrollValue
}

const temp = createEmployeeRecord(['john', 'smith', 'mr.', 13])

console.log(temp)
console.log(temp.familyName)
