```javascript
const query = { name: /John/i };
//This query will cause error in MongoDB if the name field contains some special character like $ or . which are used as metacharacter in regular expression
// The correct way to use regex in mongodb is to use $regex operator
const query = { name: { $regex: /John/i } };
```