for(var i =0; i<5; i++){
	setTimeout(()=>{
		console.log(i, " ");
	}, 1000)
}

for(let i =0; i<5; i++){
	setTimeout(()=>{
		console.log(i);
	}, 1000)
}

// - Display 0 1 2 3 4
for(var i =0; i<5; i++){
	function fun(i){
		setTimeout(()=>{
		console.log(i, " ");
	}, 1000)
	}
	fun(i);
}