let worlds = {}

worlds["world1"] = {
	level1: generateLevel([9,6,'right'],[13,4],
    [
        [10,6,'right',true,1],
        [11,6,'right',true,1],
        [12,6,'up',true,1],
        [10,5,'up',true,1],
        [11,5,'left',true,1],
        [12,5,'left',true,1],
        [10,4,'right',true,1],
        [11,4,'right',true,1],
        [12,4,'right',true,1],
    ]),
    level2: generateLevel([15,7,'down'],[17,11],
    [
    	[15,8,'down',true, 1],
        [15,9,'right',true,1],
        [15,10,"spike",false,0],
        [16,8,"up",true, 1],
        [16,9,"right",true, 1],
        [16,10,"spike",false, 0],
        [17,8,"spike",false, 0],
        [17,9,"down",true, 1],
        [17,10,"down",true, 1],
    ]),
    level3: generateLevel([15,14,'down'],[18,19],
    [
    	[15,15,'right',true,1],
        [15,16,'up',true,1],
        [15,17,'left',true,1],
        [15,18,'up',false,1],
        [16,15,'right',true,1],
        [16,16,'spike',false,0],
        [16,17,'spike',false,0],
        [16,18,'spike',false,0],
        [17,15,'right',true,1],
        [17,16,'spike',false,0],
        [17,17,'down',true,1],
        [17,18,'right',true,1],
        [18,15,'down',true,1],
        [18,16,'down',true,1],
        [18,17,'left',false,1],
        [18,18,'down',true,1],
    ]),
    level4: generateLevel([13,15,'left'],[7,19],
    [
    	[12,15,'left',true,1],
        [11,15,'down',true,1],
        [10,15,'spike',false,0],
        [9,15,'spike',false,0],
        [8,15,'spike',false,0],
        [12,16,'spike',false,0],
        [11,16,'left',true,1],
        [10,16,'left',true,1],
        [9,16,'down',true,1],
        [8,16,'spike',false,0],
        [12,17,'spike',false,0],
        [11,17,'spike',false,0],
        [10,17,'spike',false,0],
        [9,17,'down',true,1],
        [8,17,'spike',false,0],
        [12,18,'down',true,1],
        [11,18,'spike',false,0],
        [10,18,'down',true,1],
        [9,18,'right',false,1],
        [8,18,'spike',false,0],
        [12,19,'left',true,1],
        [11,19,'left',true,1],
        [10,19,'left',true,1],
        [9,19,'left',true,1],
        [8,19,'left',true,1],
    ]),
    level5: generateLevel([6,14,'up'],[2,8],
    [
    	[6,13,'up',true,1],
        [6,12,'up',true,1],
        [6,11,'up',true,1],
        [6,10,'up',true,1],
        [6,9,'left',true,1],
        [5,13,'spike',false,0],
        [5,12,'spike',false,0],
        [5,11,'spike',false,0],
        [5,10,'spike',false,0],
        [5,9,'left',true,1],
        [4,13,'up',false,1],
        [4,12,'up',false,1],
        [4,11,'left',true,1],
        [4,10,'down',true,1],
        [4,9,'down',true,1],
        [3,13,'right',false,1],
        [3,12,'spike',false,0],
        [3,11,'left',true,1],
        [3,10,'spike',false,0],
        [3,9,'spike',false,0],
        [2,13,'spike',false,0],
        [2,12,'spike',false,0],
        [2,11,'up',true,1],
        [2,10,'up',true,1],
        [2,9,'up',true,1]
    ])
}

worlds["world2"] = {
	level1: generateLevel([9,6,'right'],[13,4],
    [
        [10,6,'up',true,2],
        [11,6,'spike',false,0],
        [12,6,'spike',false,0],
        [10,5,'spike',false,0],
        [11,5,'right',true,1],
        [12,5,'up',true,1],
        [10,4,'right',true,1],
        [11,4,'down',true,1],
        [12,4,'right',true,1],
    ]),
    level2: generateLevel([15,7,'down'],[18,12],
    [
    	[15,8,'right',true, 1],
        [15,9,'spike',false,0],
        [15,10,'spike',false,0],
        [15,11,'down',true,1],
        [16,8,'down',false, 2],
        [16,9,'spike',false, 0],
        [16,10,'right',true, 1],
        [16,11,'bomb',false, 0],
        [17,8,'right',true, 1],
        [17,9,'bomb',false, 0],
        [17,10,'up',true, 2],
        [17,11,'spike',false, 0],
        [18,8,'down',true, 1],
        [18,9,'down',true, 2],
        [18,10,'bomb',false, 0],
        [18,11,'down',true, 1],
        
    ]),
    level3: generateLevel([15,14,'down'],[18,19],
    [
    	[15,15,'down',true,2],
        [15,16,'spike',false,0],
        [15,17,'down',true,1],
        [15,18,'right',true,2],
        [16,15,'spike',false,0],
        [16,16,'bomb',false,0],
        [16,17,'spike',false,0],
        [16,18,'bomb',false,0],
        [17,15,'spike',false,0],
        [17,16,'right',true,1],
        [17,17,'spike',false,0],
        [17,18,'up',true,2],
        [18,15,'spike',false,0],
        [18,16,'down',true,2],
        [18,17,'bomb',false,0],
        [18,18,'down',true,1],
    ]),
    level4: generateLevel([13,15,'left'],[7,19],
    [
    	[12,15,'left',true,2],
        [11,15,'spike',false,0],
        [10,15,'down',false,3],
        [9,15,'right',true,1],
        [8,15,'spike',false,0],
        [12,16,'down',true,1],
        [11,16,'right',true,1],
        [10,16,'spike',false,0],
        [9,16,'right',true,1],
        [8,16,'bomb',false,0],
        [12,17,'down',false,2],
        [11,17,'spike',false,0],
        [10,17,'spike',false,0],
        [9,17,'up',true,2],
        [8,17,'spike',false,0],
        [12,18,'up',true,1],
        [11,18,'bomb',false,0],
        [10,18,'right',false,2],
        [9,18,'up',true,1],
        [8,18,'spike',false,0],
        [12,19,'left',true,3],
        [11,19,'bomb',false,0],
        [10,19,'left',true,3],
        [9,19,'left',true,1],
        [8,19,'right',true,2],
    ]),
    level5: generateLevel([6,14,'up'],[2,8],
    [
    	[6,13,'left',true,2],
        [6,12,'down',false,1],
        [6,11,'up',true,1],
        [6,10,'up',true,1],
        [6,9,'left',true,2],
        [5,13,'spike',false,0],
        [5,12,'spike',false,0],
        [5,11,'right',true,1],
        [5,10,'spike',false,0],
        [5,9,'bomb',false,0],
        [4,13,'up',true,1],
        [4,12,'up',true,1],
        [4,11,'right',true,1],
        [4,10,'spike',false,0],
        [4,9,'left',true,1],
        [3,13,'right',true,1],
        [3,12,'spike',false,0],
        [3,11,'bomb',false,0],
        [3,10,'left',true,1],
        [3,9,'down',true,1],
        [2,13,'right',true,1],
        [2,12,'bomb',false,0],
        [2,11,'spike',false,0],
        [2,10,'up',true,2],
        [2,9,'spike',false,0]
    ])
}


worlds["world3"] = {
	level1: generateLevel([9,6,'right'],[13,4],
    [
        [10,6,'right',true,1],
        [11,6,'right',true,1],
        [12,6,'up',true,1],
        [10,5,'up',true,1],
        [11,5,'left',true,1],
        [12,5,'left',true,1],
        [10,4,'right',true,1],
        [11,4,'right',true,1],
        [12,4,'right',true,1],
    ], [], [[10,4],[11,4],[12,6]]),
    level2: generateLevel([15,7,'down'],[18,12],
    [
    	[15,8,'right',true, 1],
        [15,9,'spike',false,0],
        [15,10,'spike',false,0],
        [15,11,'down',true,1],
        [16,8,'down',false, 2],
        [16,9,'spike',false, 0],
        [16,10,'right',true, 1],
        [16,11,'bomb',false, 0],
        [17,8,'right',true, 1],
        [17,9,'bomb',false, 0],
        [17,10,'up',true, 2],
        [17,11,'spike',false, 0],
        [18,8,'down',true, 1],
        [18,9,'down',true, 2],
        [18,10,'bomb',false, 0],
        [18,11,'down',true, 1],
    ], [11,13,14]),
    level3: generateLevel([15,14,'down'],[18,19],
    [
    	[15,15,'right',true,1],
        [15,16,'up',true,1],
        [15,17,'left',true,1],
        [15,18,'up',false,1],
        [16,15,'right',true,1],
        [16,16,'spike',false,0],
        [16,17,'spike',false,0],
        [16,18,'spike',false,0],
        [17,15,'right',true,1],
        [17,16,'spike',false,0],
        [17,17,'down',true,1],
        [17,18,'right',true,1],
        [18,15,'down',true,1],
        [18,16,'down',true,1],
        [18,17,'left',false,1],
        [18,18,'down',true,1],
    ], [3,4,5,11], [[15,16],[17,15],[18,15]]),
    level4: generateLevel([13,15,'left'],[7,19],
    [
    	[12,15,'left',true,2],
        [11,15,'spike',false,0],
        [10,15,'down',false,3],
        [9,15,'right',true,1],
        [8,15,'spike',false,0],
        [12,16,'down',true,1],
        [11,16,'right',true,1],
        [10,16,'spike',false,0],
        [9,16,'right',true,1],
        [8,16,'bomb',false,0],
        [12,17,'down',false,2],
        [11,17,'spike',false,0],
        [10,17,'spike',false,0],
        [9,17,'up',true,2],
        [8,17,'spike',false,0],
        [12,18,'up',true,1],
        [11,18,'bomb',false,0],
        [10,18,'right',false,2],
        [9,18,'up',true,1],
        [8,18,'spike',false,0],
        [12,19,'left',true,3],
        [11,19,'bomb',false,0],
        [10,19,'left',true,3],
        [9,19,'left',true,1],
        [8,19,'right',true,2],
    ], [6,11,14,19], [[9,16],[11,16],[9,19],[10,19]]),
    level5: generateLevel([6,14,'up'],[2,8],
    [
    	[6,13,'left',true,2],
        [6,12,'down',false,1],
        [6,11,'up',true,1],
        [6,10,'up',true,1],
        [6,9,'left',true,2],
        [5,13,'spike',false,0],
        [5,12,'spike',false,0],
        [5,11,'right',true,1],
        [5,10,'spike',false,0],
        [5,9,'bomb',false,0],
        [4,13,'up',true,1],
        [4,12,'up',true,1],
        [4,11,'right',true,1],
        [4,10,'spike',false,0],
        [4,9,'left',true,1],
        [3,13,'right',true,1],
        [3,12,'spike',false,0],
        [3,11,'bomb',false,0],
        [3,10,'left',true,1],
        [3,9,'down',true,1],
        [2,13,'right',true,1],
        [2,12,'bomb',false,0],
        [2,11,'spike',false,0],
        [2,10,'up',true,2],
        [2,9,'spike',false,0]
    ], [4,16,19,20], [[6,10],[3,10],[3,13],[4,13]]),
}

function generateLevel(startPos, endPos, positions, flippedTiles = [], cloudPositions = []){
    let totalTiles = positions.length + 2;
    let tilePatterns = [];
    let obstacleTilePositions = [];
    
    for(let i = 0; i< positions.length; i++){
    	let position = positions[i];
        if(position[3]){
        	tilePatterns.push({
            	name: "tile" + (i+1),
                direction: position[2],
                units: position[4]
            })
        }else{
        	obstacleTilePositions.push({
            	name: "tile" + (i+1),
               	type: position[2],
                position: position.slice(0,2),
                units: position[4],   
            })
        }
    }
    
    const tilePositions = positions.filter(position => position[3]).map(position => {
    	return position.slice(0,2)
    })

    return {
    	numTiles: totalTiles,
        tilePositions: tilePositions,
        obstacleTilePositions: obstacleTilePositions,
        startTile: {
        	name: "tileStart",
            direction: startPos[2],
            units: 1,
            position: startPos.slice(0,2)
        },
        endTile: {
        	name: "tileEnd",
            position: endPos
        },
        tilePatterns: tilePatterns,
        flippedTiles: flippedTiles,
        cloudPositions: cloudPositions
    }
}

module.exports = worlds;