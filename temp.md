❌ Bad Code:
```javascript
function sum() {return a+b};
```

🔍 Issues:
* ❌ The variables `a` and `b` are not defined within the function scope, nor are they passed as arguments. This will
likely lead to an error when the function is executed.
* ❌ Missing semicolon at the end of the statement inside function body.

✅ Recommended Fix:

```javascript
function sum(a, b) {
return a + b;
}
```

💡 Improvements:

* ✔️ The function now accepts `a` and `b` as parameters, making it reusable and predictable.
* ✔️ Included semicolon at the end of the statement.
* ✔️ Proper indentation improves readability.

Final Note:
Always ensure your functions receive necessary inputs and handle them correctly to produce the expected output. Defining
parameters makes the function self-contained and prevents reliance on global variables.