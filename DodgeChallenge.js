function solution(P, T, A, B) {
    let i;
    let exchangeAble = true;
    let pairs = []
    for (i = 0; i< A.length; i++)
    {
        if (A[i] > B[i])
        {
            let temp = A[i]
            A[i] = B[i]
            B[i] = temp
        }
        pairs.push([A[i], B[i]])
    }
    pairs = pairs.sort(compare)

    let circles = new Array(P.length)

    for (i = 0; i< A.length; i++)
    {
        if (circles[pairs[i][0]] === undefined)
        {
            if (circles[pairs[i][1]] !== undefined)
            {
                circles[pairs[i][0]] = circles[pairs[i][1]]
            }
            else
            {
                circles[pairs[i][0]] = pairs[i][0]
                circles[pairs[i][1]] = pairs[i][0]
            }
        }
        else
        {
            updatePointer(pairs[i][0], circles)
            updatePointer(pairs[i][1], circles)
            if (circles[pairs[i][1]] !== undefined)
            {
                if (circles[pairs[i][1]] > circles[pairs[i][0]])
                {
                    circles[circles[pairs[i][1]]] = circles[pairs[i][0]]
                    circles[pairs[i][1]] = circles[pairs[i][0]]
                }
                else
                {
                    circles[circles[pairs[i][0]]] = circles[pairs[i][1]]
                    circles[pairs[i][0]] = circles[pairs[i][1]]
                }
            }
            else
            {
                circles[pairs[i][1]] = circles[pairs[i][0]]
            }
        }
    }

    for (i = 0; i< P.length; i++)
    {
        updatePointer(i, circles)
    }

    let circleMap = new Map()

    for (i = 0; i< P.length; i++)
    {
        if (circleMap.get(circles[i]) === undefined)
        {
            let newCircle = [i]
            circleMap.set(circles[i], newCircle)
        }
        else
        {
            let existCircle = circleMap.get(circles[i])
            existCircle.push(i)
            circleMap.set(circles[i], existCircle)
        }
    }

    for (let key of circleMap.keys())
    {
        exchangeAble = exchangeAble && isExchangeAble(key, circleMap.get(key), P, T)
        if (!exchangeAble)
            return exchangeAble;
    }

    return true;
}

function updatePointer(index, circles)
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