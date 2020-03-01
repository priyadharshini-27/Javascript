function display()
{
    var a=parseInt(n1.value),b=parseInt(n2.value),c=parseInt(n3.value);
    var root1 = ((-b) +((b**2) - (4*a*c))**(0.5))/(2*a);
    var root2 = ((-b) -((b**2) - (4*a*c))**(0.5))/(2*a);
    op.value=root1;
    op1.value=root2;
}