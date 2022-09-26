# codilityChallenges
My solutions for codility challenges

The Matrix 2021 

https://app.codility.com/cert/view/cert5B57K8-B6FZZSJSN8C5QMTP/

---Problem---

You are given an N × N matrix in which every cell is colored black or white. Columns are numbered from 0 to N-1 (from left to right). This coloring is represented by a non-empty array of integers A. If the K-th number in the array is equal to X then the X lowest cells in the K-th column of the matrix are black. The rest of the cells in the K-th column are white. The task is to calculate the side length of the biggest black square (a square containing only black cells).

Write a function:

function solution(A);

that, given an array of integers A of length N representing the coloring of the matrix, returns the side length of the biggest black square.

Examples:

1. Given A = [1, 2, 5, 3, 1, 3], the function should return 2. For example, the black square of side 2 contains the two lowest rows of the 1st and 2nd columns (counting from 0).

2. Given A = [3, 3, 3, 5, 4], the function should return 3. For example, the biggest black square has side 3 and contains the three lowest rows of the last three columns.

3. Given A = [6, 5, 5, 6, 2, 2], the function should return 4. The biggest black square has side 4 and contains the four lowest rows of the first four columns.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..N]

The Doge 2021

https://app.codility.com/cert/view/certW84Y4K-6TDD6WDDH8QADSNC/

-- Problem --

During an Animal Day event, N people (numbered from 0 to N−1) showed up. Each of them had either a dog or a cat. The organizers decided to give them a wonderful gift: a toy for each animal.

After the event, it turned out that some people who owned a dog had received a cat-toy, and some people who owned a cat received a dog-toy. People may exchange toys, but only if they know each other (otherwise they have no way to contact the other person). The pair of people can exchange toys multiple times.

Knowing who knows who, who owns which animal, and what kind of toy he or she received, can you determine whether it is possible for people to exchange toys in such a way that every dog ends up with a dog-toy and every cat gets a cat-toy?

Write a function:

function solution(P, T, A, B);

that returns true if it is possible to exchange toys in such a way that every animal receives an appropriate toy, or false otherwise. First two arrays describe the pets (array P) and toys (array T) that every person owns. The J-th person owns pet P[J] and toy T[J] (1 means dog or dog-toy and 2 means cat or cat-toy). The next two arrays, A and B, both of length M, describe the relationships between people. For each integer K from 0 to M−1, person A[K] knows person B[K].

Examples:

1. Given:

P = [1, 1, 2]
T = [2, 1, 1]
A = [0, 2]
B = [1, 1]
the function should return true. Person 0 can exchange toys with person 1 to obtain a dog-toy, and then person 1 can exchange toys with person 2.

2. Given:

P = [2, 2, 1, 1, 1]
T = [1, 1, 1, 2, 2]
A = [0, 1, 2, 3]
B = [1, 2, 0, 4]
the function should return false. There is no way for persons 3 and 4 to exchange toys with others.

3. Given:

P = [1, 1, 2, 2, 1, 1, 2, 2]
T = [1, 1, 1, 1, 2, 2, 2, 2]
A = [0, 2, 4, 6]
B = [1, 3, 5, 7]
the function should return false. There is no way for persons 2 and 3 and for persons 4 and 5 to exchange toys with others.

4. Given:

P = [2, 2, 2, 2, 1, 1, 1, 1]
T = [1, 1, 1, 1, 2, 2, 2, 2]
A = [0, 1, 2, 3, 4, 5, 6]
B = [1, 2, 3, 4, 5, 6, 7]
the function should return true.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [0..200,000];
each element of arrays P and T is an integer that can have one of the following values: 1, 2;
each element of arrays A and B is an integer within the range [0..N-1];
for each integer K from 0 to M−1, elements A[K] and B[K] are different;
there are no redundant elements in arrays A, B; more formally every unordered pair of persons a, b will appear as A[K], B[K] for at most one K.