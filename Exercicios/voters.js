let voters = [{name:'Bob' , age: 30, voted: true}, {name:'Jake' , age: 32, voted: true}, {name:'Kate' , age: 25, voted: false}, {name:'Sam' , age: 20, voted: false}, {name:'Phil' , age: 21, voted: true}, {name:'Ed' , age:55, voted:true}, {name:'Tami' , age: 54, voted:true}, {name: 'Mary', age: 31, voted: false}, {name: 'Becky', age: 43, voted: false}, {name: 'Joey', age: 41, voted: true}, {name: 'Jeff', age: 30, voted: true}, {name: 'Zack', age: 19, voted: false} ];

const ageLimit = {
    'YOUNG':{lowerAgeLimit:18 , upperAgeLimit:25},
    'MID':{lowerAgeLimit:26 , upperAgeLimit:35},
    'OLD':{lowerAgeLimit:36 , upperAgeLimit:55},
}


const setVoters = (ageRange) => (total,voter) =>{
    return({
        ...total,
        [ageRange]: {
            people: total[ageRange].people + 1,
            vote: voter.voted ? total[ageRange].vote + 1 : total[ageRange].vote,
        }
    })
}

function getResults(arr) {
    
    return arr.reduce(
        (total, voter) =>{
            for(prop of Object.keys(ageLimit)){
                if(voter.age >=ageLimit[prop].lowerAgeLimit && voter.age <= ageLimit[prop].upperAgeLimit){
                    return setVoters(prop)(total,voter)
                }
            }
        },
        {
            'YOUNG': {people:0 , vote:0},
            'MID': {people:0 , vote:0},
            'OLD': {people:0 , vote: 0}
        }
    )
}

getResults(voters)