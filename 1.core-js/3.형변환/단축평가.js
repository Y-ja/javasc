// 단축평가
/*
AND연산
    t && t ->t
    t && f -> f
    f && t -> f
    f && f -> f
OR연산
    t || t
    t || f
    f || t
    f || f
 */
//OR연산
console.log('hello' || 'world');
console.log( 0 || 'world');
//AND연산
console.log('hello' && 'world');
console.log(null && 'world');