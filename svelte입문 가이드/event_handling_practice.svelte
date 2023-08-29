<script>
	import {onMount} from 'svelte';
	let name = 'world';
	let message = "클릭하면 색깔이 변하는 마법의 박스"
	let isPink = false
	onMount(()=>{
		const box = document.querySelector('.box')
		box.addEventListener('click',()=>{isPink = !isPink;})
	})
</script>

<h1>박스를 클릭해보세요</h1>

<div class = "box"
	   style = "background-color : {isPink? 'pink' : 'skyblue'};">
	{message}
</div>

<style>
	.box{
		height: 300px;
		width: 800px;
		background-color : skyblue;
	}
	
</style>

