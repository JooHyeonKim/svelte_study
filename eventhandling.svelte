<script>
	import {onMount} from 'svelte'
	let name = 'world';
	let isRed = false
	onMount(()=>{ //컴포넌트가 준비되면실행
		const box = document.querySelector('.box')
	  box.addEventListener('click', ()=>isRed = !isRed)
	})
	
</script>


<h1>박스를 클릭해보세요</h1>
<div class = "box"
	style = "background-color: {isRed ? 'red': 'orange'};">Box!</div>

<style>
	.box{
		width: 300px;
		height: 150px;
		background-color: orange;
	}
</style>
