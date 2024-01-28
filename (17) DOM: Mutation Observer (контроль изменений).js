
//----------
// контроль изменений:
//----------

function observerFunction(mutationRecords)
{
    console.log(mutationRecords);

}//f:observerFunction

let observer = new MutationObserver(observerFunction);
observer.observe(elem, {
    childList:true,
    subtree:true,
    characterDataOldValue:true,
});

