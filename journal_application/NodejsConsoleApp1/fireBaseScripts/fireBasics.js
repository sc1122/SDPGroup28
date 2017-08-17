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
    var user;
    ref.on("value", function (snapshot) {
        console.log(snapshot.val());
        
        snapshot.forEach(function (data) {
            console.log("*");
            user = data;
            console.log(data.key);
            array[count] = data.key;
            count += 1;
        });
        startServer(array);
    });

}

exports.startServer = function (cat) {
    httpBoot.bootTestServer(cat);
    console.log(cat[0]);
    console.log("Async finished");
}



