// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

function quadrant(x, y) {
    if(y>0){
      return x>0?1:2
    }else{
      return x>0?4:3
    }
  }