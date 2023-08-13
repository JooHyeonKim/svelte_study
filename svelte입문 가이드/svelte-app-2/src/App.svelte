<script>
	let arr = ['a','ab','abc','abcd','efg']

	function deleteAlement(){
		arr = arr.slice(1)
	}
</script>

<ul>
	{#each arr as ar}
	<li>
		{ar}
	</li>
	{/each}
</ul>

<button on:click={deleteAlement}>
	Delete
</button>

<!-- <script>
	let name = 'world';
	let fruits = ['Apple','Banana','Cherry','Orange','Mango']

	function deleteFruit(){
		fruits = fruits.slice(1)
	}
</script>

<h1>Hello {name}</h1>

<ul>
	
	{#each fruits as fruit}
		<li>{fruit}</li>
	{/each}
	
</ul>

<button on:click={deleteFruit}>
	Eat it!
</button> -->