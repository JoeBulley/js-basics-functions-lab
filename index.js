function distanceFromHqInBlocks(blocks) {
    
    return Math.abs(blocks - 42);

}


function distanceFromHqInFeet(blocks) {
  let feet = distanceFromHqInBlocks(blocks) *264;
 
  return feet
   
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let result = Math.abs(startBlock - endBlock) *264;
    
    return result
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) *0.02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }

}
