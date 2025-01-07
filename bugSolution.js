```javascript
const query = { name: { $regex: /John/i } };
//This query will not cause error in MongoDB even if the name field contains some special character
//Using $regex operator will escape the special character in regular expression and run correctly
```