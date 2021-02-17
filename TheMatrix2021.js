function getBiggestBlackSquare(A) {
    let biggestSquare = 0;
    let minHeight = A[0];
    let square = 0;
    let cutOffArray = [];
    let sumTotal = A.reduce((a,b) => a + b);

    if (sumTotal === A.length)
        biggestSquare = 1;

    if (sumTotal === A.length * A.length)
        biggestSquare = A.length;

    for (let i = 0; i < A.length; i++)
    {
        if (A[i] > square && minHeight > square)
        {
            minHeight = A[i] <= minHeight ? A[i] : minHeight
            if (A[i] <= minHeight)
            {
                cutOffArray = []
            }
            else
            {
                cutOffArray.push(A[i])
            }
            square++
        }
        else
        {
            biggestSquare = biggestSquare < square ? square : biggestSquare;

            if (A[i] <= square)
            {
                square = 1
                minHeight = A[i]
                cutOffArray = []
                continue
            }

            if (minHeight === square)
            {
                if (cutOffArray.length > 0)
                {
                    square = cutOffArray.length + 1
                    let minIndex = getMinHeightIndex(cutOffArray)
                    minHeight = cutOffArray[minIndex] < A[i] ? cutOffArray[minIndex] : A[i]
                    if (minHeight === A[i])
                    {
                        cutOffArray = []
                    }
                    else
                    {
                        cutOffArray = cutOffArray.slice(minIndex + 1, cutOffArray.length)
                        cutOffArray.push(A[i])
                    }
                    continue
                }
                else
                {
                    square = 1
                    minHeight = A[i]
                    continue
                }
            }
        }
    }
    return biggestSquare < square ? square : biggestSquare;
}

function getMinHeightIndex(A)
{
    let min = A[0];
    let minIndex = 0;
    for (let j = 0; j < A.length; j++)
    {
        min = min < A[j] ? min : A[j]
        minIndex = min < A[j] ? minIndex : j
    }
    return minIndex
}

module.exports = getBiggestBlackSquare;