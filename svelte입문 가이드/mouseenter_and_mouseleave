<script>
	// import {onMount} from 'svelte';
	let name = 'Joohyeon';
	let mouse = "mouse"
	let isPink = false
	// onMount(()=>{
	// 	const box = document.querySelector('.box')
	// 	box.addEventListener('click',()=>{isPink = !isPink;})
	// })
</script>

<h1>{name}님, 박스를 클릭해보세요</h1>
<h2>{mouse}</h2>
<div class = "box"
	   style = "background-color : {isPink? 'pink' : 'skyblue'}"
		 on:click = {()=>{isPink = !isPink}}
		 on:mouseenter = {() =>{mouse = 'enter'}}
	   on:mouseleave={()=>{mouse='leave'}}>box!
</div>

<style>
	.box{
		height: 300px;
		width: 800px;
		background-color : skyblue;
	}
	
</style>

