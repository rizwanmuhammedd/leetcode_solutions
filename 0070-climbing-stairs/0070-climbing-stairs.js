var climbStairs = function(n) {
 // Tabulation way (bottom-up approach)
 let db = [];
 db[0] = 1; 
 db[1] = 1; 
 for (let i = 2; i <= n; i++) {
     db[i] = db[i - 1] + db[i - 2];
 }
 return db[n];
};