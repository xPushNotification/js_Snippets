
//----------
// break с указанием метки:
//----------

outer_no_forward:
for(let i = 0; i < 3; i++)
{
    if(i == 2) {break outer_no_forward;}
}

