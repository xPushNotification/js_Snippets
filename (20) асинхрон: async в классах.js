
//----------
// async в классах:
//----------

class Waiter
{
    async wait()
    {
        return await Promise.resolve(1);

    } //f:async:wait

} //c:Waiter

new Waiter().wait().then(alert);    // 1

