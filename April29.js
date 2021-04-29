// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

var destCity = function(paths) {
    //arr[0] begin arr[-1] end of path
    //arr =  ["B", "C"] \\ acc   ["D","B"] \\ cur
    // ["D", "B", "C"] \\ acc ["B", "A"]
    // return ["D", "B", "C", "A"]
    let clearPath = paths.reduce((acc, curr) => { // curr = [p, p]
        if(acc[curr[0]]) {
            acc[curr[0]].zeroIndex += 1;
        }
        else if(acc[curr[1]]) {
            acc[curr[1]].oneIndex += 1;
        } 
        if(!acc[curr[1]]){
            acc[curr[1]] = {zeroIndex: 0, oneIndex: 1}
        }
        if(!acc[curr[0]]){
            acc[curr[0]] = {zeroIndex: 1, oneIndex: 0}
        }
        return acc
    }, {}) 
    // win case { zeroIndex: 0, oneIndex: 1 } // loss Case { zeroIndex : 1, oneIndex: 1}
    for (const property in clearPath) {
        if(clearPath[property]["zeroIndex"] == 0 && clearPath[property]["oneIndex"] == 1) {
            return property
        }
    }
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))