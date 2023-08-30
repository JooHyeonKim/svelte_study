<script>
	import Child from './Child.svelte'
	export let name //Parent입장에서는 쓸모없는 데이터. ->Store라는 개념으로 해결
	//App - Parent - Child
	//Parent는 중간 매개체 역할만 함
	// store를 통해 App -> child로 바로 데이터 전달
</script>

<div>
	Parent
</div>

<Child name = {name}>
</Child>
