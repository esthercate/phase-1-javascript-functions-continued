// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(action = "go to the office") {
    return `This Monday, I will ${action}.`;
}

function wrapAdjective(str = 'a dedecated programmer') {
    return function (par = "a hard worker") {
        return `You are ${par}!`;
    }
}