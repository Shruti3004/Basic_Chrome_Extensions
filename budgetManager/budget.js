chrome.storage.sync.get([ 'total' , 'limit' ] ,function(budget){
    document.getElementById('total').textContent = budget.total;
    document.getElementById('limit').textContent = budget.limit;
})

document.getElementById('spendAmount').addEventListener('click' , (e) => {
    chrome.storage.sync.get('total', function(budget){
        var newTotal = 0;
        if(budget.total){
            newTotal += parseInt(budget.total);
        }
        const amount = document.getElementById('amount').value;
        if(amount){
            newTotal +=parseInt(amount);
        }
        chrome.storage.sync.set({'total' : newTotal});
        document.getElementById('total').textContent = newTotal;
        document.getElementById('amount').value = '';
    })
    e.preventDefault();
});

chrome.storage.sync.get([ 'total' , 'limit' ] ,function(budget){
    if(budget.total >= budget.limit){
        var notifOptions = {
            type: 'basic',
            iconUrl: 'favicon.png',
            title: 'Limit Reached !',
            message: "Uh, oh! Looks like you reached your limit"
        };
        chrome.notifications.create('limitNotif', notifOptions)
    }
})