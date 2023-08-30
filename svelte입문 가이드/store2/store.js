import {writable} from 'svelte/store'

//storeName이라는 변수를 내보냄
//writable을 사용하면 내가 내보낸 데이터를 수정할 수 있음. () 안에는 초기값
//writable이 실행되면 svelte의 store 객체가 반환됨
//storeName : store 객체

export let storeName = writable('Puang')
