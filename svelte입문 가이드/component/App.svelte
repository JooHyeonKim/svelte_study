<script>
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange','Mango']
</script>

<h2>
	Fruits
</h2>

<ul>
	{#each fruits as f}
	<li>
		{f}
	</li>
	{/each}
</ul>

<h2>
	Fruits reverse
</h2>
<ul>
	{#each [...fruits].reverse() as f}
	<li>
		{f}
	</li>
	{/each}
</ul>

<h2>
	Fruits slice -2
</h2>

<ul>
	{#each fruits.slice(-2) as f}
	<li>
		{f}
	</li>
	{/each}
</ul>
