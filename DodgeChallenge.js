function solution(P, T, A, B) {
    let i;
    let exchangeAble = true;
    let pairs = []

    function createRelationshipPairAndSortByOrderInTheGroup() {
        for (i = 0; i < A.length; i++) {
            A[i] > B[i] ? pairs.push([B[i], A[i]]) : pairs.push([A[i], B[i]])
        }
        pairs = pairs.sort(compare)
    }

    createRelationshipPairAndSortByOrderInTheGroup()

    let circlesOfPeopleKnowEachOther = new Array(P.length)

    function linkFirstPersonInThePairToMutualFriendBySecondPerson() {
        circlesOfPeopleKnowEachOther[pairs[i][0]] = circlesOfPeopleKnowEachOther[pairs[i][1]]
    }

    function createInitialLinkToTheFirstPersonInThePair() {
        circlesOfPeopleKnowEachOther[pairs[i][0]] = pairs[i][0]
        circlesOfPeopleKnowEachOther[pairs[i][1]] = pairs[i][0]
    }

    function updateLinkToTheSmallestIndexPersonInTheGroup() {
        if (circlesOfPeopleKnowEachOther[pairs[i][1]] > circlesOfPeopleKnowEachOther[pairs[i][0]]) {
            circlesOfPeopleKnowEachOther[circlesOfPeopleKnowEachOther[pairs[i][1]]] = circlesOfPeopleKnowEachOther[pairs[i][0]]
            circlesOfPeopleKnowEachOther[pairs[i][1]] = circlesOfPeopleKnowEachOther[pairs[i][0]]
        } else {
            circlesOfPeopleKnowEachOther[circlesOfPeopleKnowEachOther[pairs[i][0]]] = circlesOfPeopleKnowEachOther[pairs[i][1]]
            circlesOfPeopleKnowEachOther[pairs[i][0]] = circlesOfPeopleKnowEachOther[pairs[i][1]]
        }
    }

    function linkTheSecondPersonToTheMutualFriendByTheFirstPerson() {
        circlesOfPeopleKnowEachOther[pairs[i][1]] = circlesOfPeopleKnowEachOther[pairs[i][0]]
    }

    for (i = 0; i< A.length; i++)
    {
        let firstPersonInThePairNotLinkToAnyoneYet = circlesOfPeopleKnowEachOther[pairs[i][0]] === undefined
        let secondPersonInThePairAlreadyLinkedUp = circlesOfPeopleKnowEachOther[pairs[i][1]] !== undefined
        if (firstPersonInThePairNotLinkToAnyoneYet)
        {
            if (secondPersonInThePairAlreadyLinkedUp)
            {
                linkFirstPersonInThePairToMutualFriendBySecondPerson()
            }
            else
            {
                createInitialLinkToTheFirstPersonInThePair()
            }
        }
        else
        {
            linkPersonInTheCircleToTheSmallestIndexPersonInTheGroupThatTheyKnow(pairs[i][0], circlesOfPeopleKnowEachOther)
            linkPersonInTheCircleToTheSmallestIndexPersonInTheGroupThatTheyKnow(pairs[i][1], circlesOfPeopleKnowEachOther)
            if (secondPersonInThePairAlreadyLinkedUp)
            {
                updateLinkToTheSmallestIndexPersonInTheGroup()
            }
            else
            {
                linkTheSecondPersonToTheMutualFriendByTheFirstPerson()
            }
        }
    }

    for (i = 0; i< P.length; i++)
    {
        linkPersonInTheCircleToTheSmallestIndexPersonInTheGroupThatTheyKnow(i, circlesOfPeopleKnowEachOther)
    }

    let circleMap = new Map()

    function separatePeopleInToRelationshipCircles() {
        for (i = 0; i < P.length; i++) {
            if (circleMap.get(circlesOfPeopleKnowEachOther[i]) === undefined) {
                let newCircle = [i]
                circleMap.set(circlesOfPeopleKnowEachOther[i], newCircle)
            } else {
                let existCircle = circleMap.get(circlesOfPeopleKnowEachOther[i])
                existCircle.push(i)
                circleMap.set(circlesOfPeopleKnowEachOther[i], existCircle)
            }
        }
    }

    separatePeopleInToRelationshipCircles()

    for (let key of circleMap.keys())
    {
        exchangeAble = exchangeAble && isExchangeAble(key, circleMap.get(key), P, T)
    }

    return exchangeAble;
}

function linkPersonInTheCircleToTheSmallestIndexPersonInTheGroupThatTheyKnow(index, circles)
{
    while (circles[index] !== circles[circles[index]])
    {
        let pointer = circles[circles[index]]
        circles[circles[index] = circles[circles[circles[index]]]]
        circles[index] = pointer
    }
}

function compare(a,b)
{
    return a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]
}

function isExchangeAble(key, value, P, T)
{
    if (key === undefined)
    {
        for (let i = 0; i < value.length; i++)
        {
            if (P[value[i]] !== T[value[i]])
                return false;
        }
        return true;
    }
    else
    {
        let catGotDog = 0;
        let dogGotCat = 0;
        for (let i = 0; i< value.length; i++)
        {
            if (P[value[i]] !== T[value[i]] && P[value[i]] === 1)
                catGotDog++
            if (P[value[i]] !== T[value[i]] && P[value[i]] === 2)
                dogGotCat++
        }
        return catGotDog === dogGotCat;
    }
}
module.exports = solution