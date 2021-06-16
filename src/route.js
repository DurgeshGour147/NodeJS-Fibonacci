const express = require('express')
const router = express.Router()

const fibonacci = (n) => {
    if(n <= 0)
       return [];
    if (n == 1) {
        return [0, 1];
      } else {
        var arr = fibonacci(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
      }
 }
router.post('/fibonacci', (req, res) => {
    var n = req.body.fibNumber;
    var arr = fibonacci(n);
    res.render('input',{fib: arr.length == 0 ? "Invalid Number" : arr.slice(0, -1), number: n});
})

router.get("/",(req, res) => {
    res.render("input");
})

module.exports = router;
