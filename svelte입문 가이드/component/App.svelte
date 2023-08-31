<script>
	import Fruits from './Fruits.svelte'
	let fruits = ['Apple', 'Banana', 'Cherry', 'Orange','Mango']
</script>

<Fruits {fruits}></Fruits>
<Fruits {fruits}, reverse></Fruits>
<Fruits {fruits} slice="-2"></Fruits>
<Fruits {fruits} slice = "0, 3"></Fruits>
