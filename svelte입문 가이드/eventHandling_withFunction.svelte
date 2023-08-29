<script>

	let name = 'Joohyeon';
	let mouse = "mouse"
	let isPink = false

	function click(){
		isPink = !isPink
	}

	function enter(){
		mouse = 'enter'
	}

	function leave(){
		mouse = 'leave'
	}
	
</script>

<h1>{name}님, 박스를 클릭해보세요</h1>
<h2>{mouse}</h2>

<div class = "box"
	   style = "background-color : {isPink? 'pink' : 'skyblue'}"
		 on:click = {click}
		 on:mouseenter = {enter}
	   on:mouseleave={leave}>box!
</div>

<style>
	.box{
		height: 300px;
		width: 800px;
		background-color : skyblue;
	}
	
</style>

