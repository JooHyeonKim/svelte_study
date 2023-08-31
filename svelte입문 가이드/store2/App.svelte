<script>
	import {storeName} from './store.js'
	import Parent from './Parent.svelte'
	
	let name = 'world'
	
	//$가 붙어있으면 store객체라고 보면 됨.
	$storeName = name //Paung을 다시 world로 할당
	console.log(storeName)
</script>

<Parent></Parent>
