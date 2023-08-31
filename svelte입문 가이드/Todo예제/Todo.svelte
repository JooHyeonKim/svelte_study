<script>
	//외부에서 받아온 데이터
	export let todos
	export let todo 
	
	let isEdit = false
	let title = ''

	function onEdit(){ //수정모드로 변경
		isEdit = true
		title = todo.title
	}
	function offEdit(){
		isEdit = false
	}

	function updateTodo(){
		todo.title = title
		offEdit()
	}
	function deleteTodo(){
		//todos는 App.svelte에 정의되어 있음.  App.svelte 밖에서는 반응성이 정상작동하지 않는다. 
		$todos = $todos.filter(t => t.id !== todo.id)

	}
</script>

{#if isEdit}
	<div>
		<input bind:value={title}
			type = "text"
			on:keydown= {(e)=>{e.key === 'Enter' && updateTodo()}}/>
		<button on:click = {updateTodo}>
			OK
		</button>
		<button on:click = {offEdit}>
			Cancel
		</button>
	</div>
	
{:else}
	<div>
	{todo.title}
	<button on:click={onEdit}>
		Edit
	</button>
	<button on:click={deleteTodo}>
		Delete
	</button>
</div>
{/if}
