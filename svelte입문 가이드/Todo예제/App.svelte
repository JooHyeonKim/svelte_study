<script>
	import {writable} from 'svelte/store'
	import Todo from './Todo.svelte'
	let title = '';
	let todos = writable([]) //todos는 어디서든 반응성을 유지할 수 있게 됨. 쓰기 가능한 형태
														//어디서든 '할당'을 통해 '반응성'을 유지할 수 있음.
	let id = 0

	function createTodo(){
		if(!title.trim()){ //아무것도 안쓰면 함수를 종료
			title = ''
			return
		}
		$todos.push({
			id,
			title
		}) //데이터가 갱신되도 화면이 바뀌지 않는 문제 발생. 반응성이 없기 때문.
		$todos = $todos //todos에 뭔가를 할당해야 반응성을 가진다. 
		title = ''
		id += 1
	}
</script>

<input bind:value={title} 
			 type = "text"
			on:keydown={ (e) =>{e.key === 'Enter' && createTodo()} }/>

<button on:click={createTodo}>
	Create Todo
</button>

<!--데이터를 넘겨줄 때 $를 붙이면 쓰기가능한 store객체가 아닌 그냥 배열을 받는게 되버림-->

{#each $todos as todo}
<Todo bind:todos={todos} {todo}/> 
{/each}
