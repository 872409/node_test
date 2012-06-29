var a ={"A":1,"B":2,"C":10,"E":{"E1":11,"E2":22},"F":[{"F1":"f1","F2":"f2"},{"F1":"f1","F2":"f2"},{"F1":"f1","F2":"f2"},{"F1":"f1","F2":"f2"}]};
var b ={"B":4,"D":5,"E":{"E1":111,"E3":"e333"},"F":[,,,,{"F2":"f22","F3":"f3"},{"F3":"F2222","F33":"F3333"},{"F1":"f1","F2":"f2"},{"F1":"f1","F2":"f2"},{"F1":"f1","F2":"f2"},{"F1":"f1","F2":"f2"}]};
 
function bind(a,b){
	a = a||(Array.isArray(b)?[]:{});
	for(var i in b){
		
		var bi = b[i];
		
		if(typeof(bi) == 'object'){
			a[i] = a[i]||(Array.isArray(bi)?[]:{});
			a[i] = bind(a[i],bi);
		}
		else{
			a[i] = bi;
		}
	}
	return a;
}
var aa = bind(a,b);
console.log(aa);