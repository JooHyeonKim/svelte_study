<script>
	export let fruits
	export let reverse
	export let slice

	let computedFruits = []
	let title = ''

	if(reverse){
		computedFruits = [...fruits].reverse()
		title = 'reverse'
	} else if (slice) {
		title = slice.split(',')
		//... : 배열을 전개
		//...slice.split(',') //split된 결과 배열요소들을 전개 ['0', '3'] => '0', '3'
		computedFruits = fruits.slice(...slice.split(','))
		title = `slice ${slice}`
	}else{
		computedFruits = [...fruits]
	}

</script>

<h2> Fruits {title}</h2>

<ul>
	{#each computedFruits as fruit}
	<li>{fruit}</li>
	{/each}
</ul>
