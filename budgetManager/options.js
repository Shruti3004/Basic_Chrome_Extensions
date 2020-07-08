chrome.storage.sync.get('limit', function(budget){
    document.getElementById('limit').value = budget.limit;
})

document.getElementById('saveLimit').addEventListener('click', (e) => {
    var limit = document.getElementById('limit').value;
    if(limit){
        chrome.storage.sync.set({'limit' : limit}, function(){
            close();
        })
    }
});

document.getElementById('resetTotal').addEventListener('click', () => {
    chrome.storage.sync.set({'total' : 0}, function(){
            var notifOptions = {
                type: 'basic',
                iconUrl: 'favicon.png',
                title: 'Reset Total !',
                message: "Total has been reset to 0"
            };
            chrome.notifications.create('limitNotif', notifOptions)
    });
})