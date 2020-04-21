const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/qingyi";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("数据库已连接～～");
    const dbbase = db.db('qingyi');
    // const user = {
    //     name: 'qingyi',
    //     age: 18
    // }
    // 查询条件
    let whereStr = {
        "name": "刘中柱"
    };
    let updateStr = {
        $set: {
            "age": 20
        }
    }
    let user = [{
        name: "俞成朋",
        age: "25"
    }, {
        name: "刘中柱",
        age: "18"
    }, {
        name: "李嘉",
        age: "23"
    }];

    // insert
    // dbbase.collection('info_test').insertMany(user, (err, res) => {
    //     if (err) throw err;
    //     // console.log("创建集合 info_test!");
    //     // console.log("数据插入成功！");
    //     console.log("插入" + res.insertedCount + "条数据成功！");
    //     db.close();
    // })

    // delete
    // dbbase.collection('info_test').deleteOne(whereStr, (err, res) => {
    //     if (err) throw err;
    //     // console.log("创建集合 info_test!");
    //     // console.log("数据插入成功！");
    //     console.log("数据删除成功！");
    //     db.close();
    // })

    // update
    dbbase.collection('info_test').updateOne(whereStr, updateStr, (err, res) => {
        if (err) throw err;
        // console.log("创建集合 info_test!");
        // console.log("数据插入成功！");
        console.log("数据修改成功！");
        db.close();
    })

    // select
    // 查询所有数据 find({})
    // 查询条件
    // const updateCondition = {
    //     "age": 20
    // }
    // dbbase.collection('info_test').find(updateCondition).toArray((err, res) => {
    //     if (err) throw err;
    //     // console.log("创建集合 info_test!");
    //     // console.log("数据插入成功！");
    //     // console.log("数据修改成功！");
    //     console.log(res);
    //     db.close();
    // })

    /**
     * sort
     * 升序 1， 降序 -1
     */
    dbbase.collection('info_test').find().sort({ "age": -1 }).toArray((err, res) => {
        if (err) throw err;
        // console.log("创建集合 info_test!");
        // console.log("数据插入成功！");
        // console.log("数据修改成功！");
        console.log(res);
        db.close();
    })
});