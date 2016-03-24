# spring
spring aims to aid in use cases where you have a value that you want to 
decrease but don't want to take into consideration if the value is negative or not.

## Usage
```
spring(6);      // 5
spring(6, 2);   // 4
spring(-5);     // -4
spring(-5, 4);  // -1

var a = spring(10, 4); // 6
a = spring(a, 4);      // 2
a = spring(a, 4);      // -2
a = spring(a, 4);      // 2
```
