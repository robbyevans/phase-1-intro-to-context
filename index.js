
let myArray=["Gray", "Worm", "Security", 1];

let dataEmployees = [
  ["Thor", "Odinsson", "Electrical Engineer", 45],
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150],
  ["Darcey", "Lewis", "Intern", 15],
  ["Jarvis", "Stark", "CIO", 125],
  ["Anthony", "Stark", "Angel Investor", 300],
  ["Byron", "Poodle", "Mascot", 3],
  ["Julius", "Caesar", "General", 27],
  ["Rafiki", "", "Aide", 10],
  ["Simba", "", "King", 100]
]

//define createEmployeeRecord
let newObjArray=[]
function createEmployeeRecord(array){
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

// define createEmployeeRecords
function createEmployeeRecords(arrayOfArrays){
  const employeeRecords=[];
  arrayOfArrays.forEach(array => {
    const person=createEmployeeRecord(array);
    employeeRecords.push(person)
  })
  return employeeRecords;
  };
 let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]

// console.log(createEmployeeRecords(twoRows))
let size=createEmployeeRecords(twoRows)
console.log(size.length)

//correct



// console.log(size.map(nameExtractor))


let employeeRecords = createEmployeeRecords(dataEmployees)

// console.log((employeeRecords.length))
// console.log(employeeRecords[0].firstName)

// console.log(employeeRecords[0])

//function createTimeEvent
function createTimeInEvent(employeeRecord, timeStamp){
  const dateTime = timeStamp.split(" ");
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    date: dateTime[0],
    hour: parseInt(dateTime[1]),
  });
  return employeeRecord;
};
//function createTimeOutEvents
function createTimeOutEvent (employeeRecord, dateStamp){
  const dateTime = dateStamp.split(" ");
  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    date: dateTime[0],
    hour: parseInt(dateTime[1]),
  });
  return employeeRecord;
};

//defined function hoursWorkedOnDate()

function hoursWorkedOnDate(employeeRecord,dateStamp){
  const input =employeeRecord.timeInEvent.find(
    (item)=>item.date===dateStamp
  );
  const output=employeeRecord.timeOutEvents.find(
    (item)=>item.date===dateStamp
  )
let timeOut=(output.hour)
let timeIn=(input.hour)
  return(timeOut-timeIn)/100;
};

//define function wagesEarnedOnDate()
function wagesEarnedOnDate(employeeRecord,dateStamp){
  const input=employeeRecord.timeInEvent.find(
    (item)=>item.date===dateStamp
  )
  const output=employeeRecord.timeOutEvents.find(
    (item)=>item.date===dateStamp

  )
  let timeOut=(output.hour)
  let timeIn=(input.hour)
    return((timeOut-timeIn)/100)*employeeRecord.payPerHour
}


//define function allWagesFor()

function allWagesFor(employeeRecord){
  const totalDays = employeeRecord.timeInEvents.length;
  let sum = 0;
  for (let i = 0; i < totalDays; i++) {
    const totalHours =
      (employeeRecord.timeOutEvents[i].hour -
        employeeRecord.timeInEvents[i].hour) /
      100;
    sum = sum + totalHours * employeeRecord.payPerHour;
  }
  return sum;
}

//defined function calculatePayroll()

function calculatePayroll(array){
  let sum = 0;
  for (let i = 0; i < employeeRecordArr.length; i++) {
    sum = sum + allWagesFor(employeeRecordArr[i]);
  }
  return sum;
}
