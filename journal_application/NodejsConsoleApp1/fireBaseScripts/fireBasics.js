var httpBoot = require('./HttpBoot');

exports.upload_user = function (admin, user_name, user_text, date_p) {
    var ref = admin.database().ref('user_db');
    var userRef = ref.child('user/' + user_name);
    userRef.push({
        name: user_name,
        Text: user_text,
        //date_time: date_p
    });
    console.log('User added: ' + user_name);
};

exports.myDateTime = function () {
    return Date();
};

exports.search_user = function (admin, startServer) {
    console.log("Delivering users")
    var array = new Array();
    var count = 0;
    var ref = admin.database().ref("user_db/user");
    var user = 'Ben';
    ref.child(user).once("value", function (snapshot) {
        
        
        snapshot.forEach(function (data) {
            var temp = data.val();
            console.log(temp.Text);
            console.log("*");
            console.log(data.val());
            console.log(data.ref.toString());
            array[count] = temp.Text;
            count += 1;
        });
        startServer(array, user);
    });

}

exports.startServer = function (cat, user) {
    httpBoot.bootTestServer(cat, user);
    //console.log(cat[0]);
    //console.log(cat[0]);
    console.log("Async finished");
}



