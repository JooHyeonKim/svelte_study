<script>
	let name = 'world';
	let age = 27
	let toggle = true

	function assign(){
		name = "Joohyeon"
		age = 23
	}
</script>

<h1>Hello {name}!</h1>
{#if toggle}
<h2 class = {age>25 ?'active' :''}>age: {age} </h2>
{:else}
	<div>내 나이는 비밀이닷</div>
{/if}

<input type ="text" bind:value={name}/>

<button on:click = {assign}>
	Change name
</button>

<button on:click = {()=>{toggle = !toggle}}>
	나이 보여줄까 말까
</button>


<style>
	h1{
		color:darkblue
	}
	.active{
		color:deeppink
	}
</style>
