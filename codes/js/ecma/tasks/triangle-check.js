let edge1 = 10
let edge2 = 10
let edge3 = 10
let edgeEquals = 0
let result

if(edge1 == edge2 && edge2 == edge3)
  edgeEquals = 3
else if(edge1 == edge2 || edge2 == edge3 || edge1 == edge3)
  edgeEquals = 2

// equilateral, isosceles, scalene
switch (edgeEquals)
{
  case 3:
    result = "Equilátero"
    break
  case 2:
    result = "Isósceles"
    break
  default:
    result = "Escaleno"
}

console.log(result)
