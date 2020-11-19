const trap = height => {
    const len = height.length;
    let left = 0;
    let right = len -1;
    let leftMax = 0;
    let rightMax = 0;
    let total = 0;
    while (left < right) {
        if(height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else { 
                total += (leftMax - height[left]);
            }
            left ++;
        } else {
            if(height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                total += (rightMax - height[right]);
            }
            right--;
        }
    }
    return total;
};

module.exports = trap;