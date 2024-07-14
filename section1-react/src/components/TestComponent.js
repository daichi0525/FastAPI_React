import React, { useState } from 'react';

const TestComponent = () => {
	const [count, setCount] = useState(0);
  return (
	<div>
		<p>テストコンポーネント</p>
		<button onClick={() => setCount(count +1)}>+1ボタン</button>
		<h2>{count}</h2>
	</div>
  )
}
export default TestComponent;
