```javascript
// Correct use of $inc operator with data validation
db.collection.findOne({"_id":1}, (err, doc) => {
if (err) throw err;
if (doc && typeof doc.field === 'number') {
  db.collection.updateOne({"_id":1},{"$inc":{"field":1}});
} else {
  console.error("Field is not a number or document not found");
}
});
```