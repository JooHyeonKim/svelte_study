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
	<div>� �t� D t�</div>
{/if}

<input type ="text" bind:value={name}/>

<button on:click = {assign}>
	Change name
</button>

<button on:click = {()=>{toggle = !toggle}}>
	�t ��L �L
</button>


<style>
	h1{
		color:darkblue
	}
	.active{
		color:deeppink
	}
</style>