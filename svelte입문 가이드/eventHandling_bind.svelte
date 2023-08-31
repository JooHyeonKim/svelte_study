<script>

	let text = 'Hi'
</script>

<h2>{text}</h2>

<input type = "text"
			 bind:value = {text}
			 on:input = {(e)=>e.target.value}
			 />
<input type = "text"
			 bind:value = {text}
			 />
<button on:click = {()=>{text="Joohyeon"}}>Click</button>

