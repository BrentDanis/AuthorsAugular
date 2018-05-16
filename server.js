var express = require('express');
var app = express();
var bodyParser = require('body-parser');  // Require body-parser (to receive post data from clients)
app.use(bodyParser.urlencoded({ extended: true })); // Integrate body-parser with our App

app.use(bodyParser.json());


var path = require('path'); // Require path

app.use(express.static( __dirname + '/authorsApp/dist/authorsApp' ));


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authorsDb');
var AuthorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

}, {timestamps: true });



const Author = mongoose.model('Author', AuthorSchema);

// Use native promises
mongoose.Promise = global.Promise;


// Routes
// 1. Retrieve all Author
app.get('/authors', function (req, res) {
    Author.find({}, function (err, data) {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            res.json(data);
        }
    })
})

// 2. Retrieve one Author by ID
app.get('/authors/:id', function (req, res) {
    Author.findOne({ _id: req.params.id }, function (err, data) {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            res.json(data);
        }
    })
})

// 3. Create a Author
app.post('/authors', function (req, res) {
    console.log("POST /authors");
    console.log(req.body);
    var author = new Author(req.body);

    author.save(function (err) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", data: author })
        }
    })

})

// 4. Update a Author by ID
app.put('/authors/:id', function (req, res) {
    var obj = {};
    if (req.body.firstName) { //if in the body your passing a new firstName.
        obj['firstName'] = req.body.firstName;
    }
    if (req.body.lastName) {
        obj['lastName'] = req.body.lastName;
    }
    obj['updated_at'] = Date.now();
    Author.update({ _id: req.params.id }, {
        $set: obj
    }, function (err, data) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", data: data })
        }
    });
})

// 5. Delete a Author by ID
app.delete('/authors/:id', function (req, res) {
    Author.remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success"})
        }
    });
})


// Setting our Server to Listen on Port: 8000
app.listen(8888, function () {
    console.log("listening on port 8888");
})
