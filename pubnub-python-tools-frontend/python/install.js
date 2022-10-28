let {PythonShell} = require('python-shell');
var package_name = 'pubnub-python-tools'
let options = {
    args : [package_name]
}
PythonShell.run('./python/pip-install.py', options, 
    function(err, results)
    {
        if (err) throw err;
        else console.log(results);
    })