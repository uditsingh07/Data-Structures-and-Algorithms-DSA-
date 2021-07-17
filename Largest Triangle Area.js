/* Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. 
Answers within 10-5 of the actual answer will be accepted.

Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2.00000
Explanation: The five points are shown in the above figure. The red triangle is the largest.
*/

var largestTriangleArea = function(points) {
    const n = points.length;
    let maxArea = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (k = j + 1; k < n; k++) {
                const area = calcArea(points[i], points[j], points[k]);
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};


function calcArea(coordA, coordB, coordC){
    const [xCoordA, yCoordA] = coordA;
    const [xCoordB, yCoordB] = coordB;
    const [xCoordC, yCoordC] = coordC;
    
    const sideA = xCoordA * (yCoordB - yCoordC);
    const sideB = xCoordB * (yCoordC - yCoordA);
    const sideC = xCoordC * (yCoordA - yCoordB);
    
    return Math.abs((sideA + sideB + sideC) / 2);
};
