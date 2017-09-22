---
title: "Spline Chart"
description: "Spline Chart"
layout: "guide"
weight: 7
---

###### {$page.description}

<article id="1">

{call SplineChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [100, 20, 30]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100]
		]
	] /}
{/call}

```soy
{call SplineChart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [100, 20, 30]
		],
		[
			'id': 'data2',
			'data': [20, 70, 100]
		]
	] /}
{/call}
```
```jsx
<SplineChart
	columns={[
		{
			id: 'data1',
			data: [100, 20, 30]
		},
		{
			id: 'data2',
			data: [20, 70, 100]
		}
	]}
/>
```

</article>
