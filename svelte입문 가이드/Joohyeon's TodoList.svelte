<script>
	let name = 'Joohyeon';
	let task = ['남자친구 생각','남자친구 계란찜해주기','남자친구랑 영화보기','남자친구랑 맛집탐방','svelte공부','백준'];
	function del (){
		task = task.slice(1)
	};
</script>

<h1>Today {name}'s TodoList</h1>

<ul>
	{#each task as t}
	<li>
		{t}
	</li>
	{/each}
</ul>

<button on:click = {del}>
	DELETE
</button>
