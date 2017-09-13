---
title: "Combination Chart"
description: "Combination Chart"
layout: "guide"
weight: 9
---

###### {$page.description}

<article id="1">

{call Chart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [30, 20, 50, 40, 60, 50],
			'type': 'bar'
		],
		[
			'id': 'data2',
			'data': [200, 130, 90, 240, 130, 220],
			'type': 'bar'
		],
		[
			'id': 'data3',
			'data': [300, 200, 160, 400, 250, 250],
			'type': 'spline'
		],
		[
			'id': 'data4',
			'data': [200, 130, 90, 240, 130, 220],
			'type': 'line'
		],
		[
			'id': 'data5',
			'data': [130, 120, 150, 140, 160, 150],
			'type': 'bar'
		],
		[
			'id': 'data6',
			'data': [90, 70, 20, 50, 60, 120],
			'type': 'area'
		]
	] /}
	{param groups: [['data1', 'data2']] /}
{/call}

```soy
{call Chart.render}
	{param columns: [
		[
			'id': 'data1',
			'data': [30, 20, 50, 40, 60, 50],
			'type': 'bar'
		],
		[
			'id': 'data2',
			'data': [200, 130, 90, 240, 130, 220],
			'type': 'bar'
		],
		[
			'id': 'data3',
			'data': [300, 200, 160, 400, 250, 250],
			'type': 'spline'
		],
		[
			'id': 'data4',
			'data': [200, 130, 90, 240, 130, 220],
			'type': 'line'
		],
		[
			'id': 'data5',
			'data': [130, 120, 150, 140, 160, 150],
			'type': 'bar'
		],
		[
			'id': 'data6',
			'data': [90, 70, 20, 50, 60, 120],
			'type': 'area'
		]
	] /}
	{param groups: [['data1', 'data2']] /}
{/call}
```
```jsx
<Chart
	columns={[
		{
			id: 'data1',
			data: [30, 20, 50, 40, 60, 50],
			type: 'bar'
		},
		{
			id: 'data2',
			data: [200, 130, 90, 240, 130, 220],
			type: 'bar'
		},
		{
			id: 'data3',
			data: [300, 200, 160, 400, 250, 250],
			type: 'spline'
		},
		{
			id: 'data4',
			data: [200, 130, 90, 240, 130, 220],
			type: 'line'
		},
		{
			id: 'data5',
			data: [130, 120, 150, 140, 160, 150],
			type: 'bar'
		},
		{
			id: 'data6',
			data: [90, 70, 20, 50, 60, 120],
			type: 'area'
		}
	]}
	groups={['data1', 'data2']}
/>
```

</article>
