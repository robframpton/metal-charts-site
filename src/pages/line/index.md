---
title: "Line Chart"
description: "Line Chart"
layout: "guide"
weight: 4
---

###### {$page.description}

<article id="1">

{call LineChart.render}
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
{call LineChart.render}
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
<LineChart
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
